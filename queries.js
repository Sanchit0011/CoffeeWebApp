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
    pool.query('SELECT * FROM public."Staff" where name = $1 and password = $2', [name, password], (err,result) => {
        if(err) {
            throw err
        }
        if(result.rowCount>0) {
            res.status(200).send(result.rows)
        }
        else {
            res.status(200).send('Invalid login details!')
        }
        
    })
}

// Export functions so that they can be used in server.js to build API's
module.exports = {
    logStaff
}
