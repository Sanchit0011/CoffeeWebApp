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
 
// Query to insert order information in Order table 
const addOrder = (req, res) => {
    const {quantity, size, name, status} = req.body
    pool.query('INSERT INTO public."Order" (quantity, size, name, status) VALUES ($1, $2, $3, $4)', [quantity, size, name, status], (err) => {
        if(err) {
            throw err
        }
        
        res.status(201).send('Order has been added')
    })
}

// Query to set the time taken to prepare order in Order table
const addTime = (req, res) => {
    const id = parseInt(req.params.id)
    const {time} = req.body

    pool.query('UPDATE public."Order" set time = $1 where orderID = $2', [time, id], (err) => {
        if(err) {
            throw err
        }
    
        res.status(201).send('Time has been added')
    })
}

// Query to add cake/sandwich information to Cakesandwich table
const addCakeSandwich = (req, res) => {
    const {name, status} = req.body
    pool.query('INSERT INTO public."Cakesandwich" (name, status) SELECT $1, $2 WHERE NOT EXISTS ( SELECT name FROM public."Cakesandwich" WHERE name = $1)', [name, status], (err) => {
        if(err) {
            throw err
        }
        
        res.status(201).send('Cake/sandwich has been added')
    })
}

// Query to retrieve all cakes and sandwich information 
const readCakeSandwich = (req, res) => {
    pool.query('SELECT name FROM public."Cakesandwich"', (err, result) => {
        if(err) {
            throw err
        }
        
        res.status(200).json(result.rows)
    })
}

// Query to update cake/sandwich status
const updateCakeSandwichStatus = (req, res) => {
    const name = parseInt(req.params.name)
    const {status} = req.body

    pool.query('UPDATE public."Cakesandwich" set status = $1 where name = $2', [status, name], (err) => {
        if(err) {
            throw err
        }
    
        res.status(201).send('Cake/sandwich status has been updated')
    })
}

// Query to delete cake/sandwich status
const delCakeSandwich = (req, res) => {
    const name = parseInt(req.params.name)
    pool.query('DELETE FROM public."Cakesandwich" where name = $1',[name], (err) => {
        if(err) {
            throw err
        }
        
        res.status(200).json('Cake/sandwich has been deleted')
    })
}

// Query to add staff member to system
const addStaff = (req, res) => {
    const {name} = req.body
    pool.query('INSERT INTO public."Staff" (name) VALUES ($1)', [name], (err) => {
        if(err) {
            throw err
        }
        
        res.status(201).send('Staff has been added')
    })
}

// Query to retrieve all staff information 
const readStaff = (req, res) => {
    pool.query('SELECT * FROM public."Staff"', (err, result) => {
        if(err) {
            throw err
        }
        
        res.status(200).json(result.rows)
    })
}

// Query to delete staff member from system
const delStaff = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM public."Staff" where id = $1',[id], (err) => {
        if(err) {
            throw err
        }
        
        res.status(200).json('Staff has been deleted')
    })
}

// Export functions so that they can be used in server.js to build API's
module.exports = {
    addOrder,
    addTime,
    addCakeSandwich,
    readCakeSandwich,
    updateCakeSandwichStatus,
    delCakeSandwich,
    addStaff,
    readStaff,
    delStaff
}
