// Establishing connection with postgresql
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'SanSak12$',
    port: 5432
})

// Query to insert order information in Order table 
const addOrder = (req, res) => {
    const {quantity, size, name, status} = req.body
    pool.query('INSERT INTO public."Order" (quantity, size, name, status) VALUES ($1, $2, $3, $4)', [quantity, size, name, status], (err) => {
    if(err) {
        throw err
    }

    res.status(201).send('Order has been added')
})}

// Query to set the time taken to prepare order in Order table
const addTime = (req, res) => {
    const id = parseInt(req.params.id)
    const {time} = req.body

    pool.query('UPDATE public."Order" set time = $1 where orderID = $2', [time, id], (err) => {
        if(err) {
            throw err
        }
    
        res.status(201).send('Time has been added')
})}

// Query to add cake/sandwich information to Cakesandwich table
const addCakeSandwich = (req, res) => {
    const {name, status} = req.body
    pool.query('INSERT INTO public."Cakesandwich" (name, status) VALUES ($1, $2)', [name, status], (err) => {
        if(err) {
            throw err
        }
        
        res.status(201).send('Cake/sandwich has been added')
})}

// Query to retrieve all cakes and sandwich information 
const readCakeSandwich = (req, res) => {
    pool.query('SELECT name FROM public."Cakesandwich"', (err, result) => {
        if(err) {
            throw err
        }
        
        res.status(200).json(result.rows)

})}

// Query to retrieve cake/sandwich information by id
const readCakeSandwichByID = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT name FROM public."Cakesandwich" where id = $1',[id], (err, result) => {
        if(err) {
            throw err
        }
        
        res.status(200).json(result.rows)

})}

// Query to update cake/sandwich status
const updateCakeSandwichStatus = (req, res) => {
    const id = parseInt(req.params.id)
    const {status} = req.body

    pool.query('UPDATE public."Cakesandwich" set status = $1 where id = $2', [status, id], (err) => {
        if(err) {
            throw err
        }
    
        res.status(201).send('Cake/sandwich status has been updated')
})}

// Query to delete cake/sandwich status
const delCakeSandwich = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM public."Cakesandwich" where id = $1',[id], (err, result) => {
        if(err) {
            throw err
        }
        
        res.status(200).json('Cake/sandwich has been deleted')

})}

// Export functions so that they can be used in server.js to build API's
module.exports = {
    addOrder,
    addTime,
    addCakeSandwich,
    readCakeSandwich,
    readCakeSandwichByID,
    updateCakeSandwichStatus,
    delCakeSandwich
  }
