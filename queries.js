// Establishing connection with postgresql
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'ygjpicmywavcnj',
    host: 'ec2-50-19-127-115.compute-1.amazonaws.com',
    database: 'dauqu68lisig93',
    password: '1c8c280cf46ba300954c41c637ba4705b24462d400b67d61c1be8155b11db9aa',
    port: 5432,
    max: 15,
    ssl: true
})


// Query to login staff member to the system
const logStaff = (req, res) => {
    const name = (req.params.name)
    const password = (req.params.password)
    pool.query('SELECT * FROM public."Staff" where name = $1 and password = $2', [name, password], (err, result) => {
        if (err) {
            throw err
        }
        if (result.rowCount > 0) {
            res.status(200).send(result.rows[0].name)
        } else {
            res.status(200).send('Invalid')
        }
    })
}


// Query to insert order information in Order table 
const addOrder = (req, res) => {
    const {
        quantity,
        size,
        name,
        time
    } = req.body
    var status = "inqueue"


    pool.query('SELECT sum(time) FROM public."Order"', (err, result) => {
        if (err) {
            throw err
        }
        sum = 0;
        sum = parseInt(time);
        if (parseInt(result.rows[0].sum)) {
            sum = parseInt(result.rows[0].sum) + sum
        }

        pool.query('INSERT INTO public."Order" (quantity, size, name, status, time) VALUES ($1, $2, $3, $4, $5)', [quantity, size, name, status, sum], (err) => {
            if (err) {
                throw err
            }
            res.status(201).send('Order completed')

        })


    })

}

// Query to set the time taken to prepare order in Order table
const addTime = (req, res) => {
    const id = parseInt(req.params.id)
    const {
        time
    } = req.body

    pool.query('UPDATE public."Order" set time = $1 where orderID = $2', [time, id], (err) => {
        if (err) {
            throw err
        }

        res.status(201).send('Time has been added')
    })
}

// Query to add cake/sandwich information to Cakesandwich table
const addCakeSandwich = (req, res) => {
    const {
        name,
        status
    } = req.body
    pool.query('INSERT INTO public."Cakesandwich" (name, status) SELECT $1, $2 WHERE NOT EXISTS ( SELECT name FROM public."Cakesandwich" WHERE name = $1)', [name, status], (err) => {
        if (err) {
            throw err
        }

        res.status(201).send('Cake/sandwich has been added')
    })
}

// Query to retrieve all cakes and sandwich information 
const readCakeSandwich = (req, res) => {
    pool.query('SELECT * FROM public."Cakesandwich"', (err, result) => {
        if (err) {
            throw err
        }

        res.status(200).json(result.rows)
    })
}

const readOrders = (req, res) => {
    pool.query('SELECT * FROM public."Order"', (err, result) => {
        if (err) {
            throw err
        }

        res.status(200).json(result.rows)
    })
}

// Query to update cake/sandwich status
const updateCakeSandwichStatus = (req, res) => {
    const id = parseInt(req.params.id)
    const {status, name} = req.body

    pool.query('UPDATE public."Cakesandwich" set status = $1, name = $2 where id = $3', [status, name, id], (err) => {
        if (err) {
            throw err
        }

        res.status(201).send('Cake/sandwich status has been updated')
    })
}

// Query to delete cake/sandwich status
const delCakeSandwich = (req, res) => {
    const name = (req.params.name)
    pool.query('DELETE FROM public."Cakesandwich" where name like $1', [name], (err) => {
        if (err) {
            throw err
        }

        res.status(200).json('Cake/sandwich has been deleted')
    })
}

// Query to add staff member to system
const addStaff = (req, res) => {
    const {
        name,
        password
    } = req.body
    pool.query('INSERT INTO public."Staff" (name, password) VALUES ($1, $2)', [name, password], (err) => {
        if (err) {
            throw err
        }

        res.status(201).send('Staff has been added')
    })
}

// Query to retrieve all staff information 
const readStaff = (req, res) => {
    pool.query('SELECT * FROM public."Staff"', (err, result) => {
        if (err) {
            throw err
        }

        res.status(200).json(result.rows)
    })
}

// Query to delete staff member from system
const delStaff = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM public."Staff" where id = $1', [id], (err) => {
        if (err) {
            throw err
        }

        res.status(200).json('Staff has been deleted')

    })
}

// update order
const ordercomp = (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    newStatus = "comp"
    pool.query(' UPDATE public."Order" set time = time - ( SELECT time FROM public."Order" WHERE orderid = $1) where orderid != $1 ', [id], (err) => {
        if (err) {
            throw err
        }
        pool.query(' UPDATE public."Order" set status = $2 , time = 0 where orderid = $1 ', [id, newStatus], (err) => {
            if (err) {
                throw err
            }

            pool.query(' UPDATE public."Order" set time = $1 WHERE time < 0 ', [1], (err) => {
                if (err) {
                    throw err
                }

                res.status(201).send('Order completed')
            })

        })

    })

}

// Export functions so that they can be used in server.js to build API's
module.exports = {
    logStaff,
    addOrder,
    addTime,
    addCakeSandwich,
    readCakeSandwich,
    updateCakeSandwichStatus,
    delCakeSandwich,
    addStaff,
    readStaff,
    delStaff,
    ordercomp,
    readOrders
}