// Load required modules and functionality
const express = require('express')
const db = require('./queries');
const app = express()
app.use(express.json())

// Sent get request to retrieve cakes and sandwiches
app.get('/api/cakesandwich', db.readCakeSandwich)

// Sent get request to retrieve staff information
app.get('/api/staff', db.readStaff)

// Sent post request to store order information
app.post('/api/orders', db.addOrder)

// Sent post request to store cake/sandwich information
app.post('/api/cakesandwich', db.addCakeSandwich)

// Sent put request to add time taken to complete order 
app.put('/api/ordercomp/:id', db.ordercomp)

// Sent post request to add staff member to system 
app.post('/api/staff', db.addStaff)

// Sent put request to add time taken to complete order 
app.put('/api/orders/:id', db.addTime)

// Sent put request to update cake/sandwich status
app.put('/api/cakesandwich/:name', db.updateCakeSandwichStatus)

// Sent delete request to delete cake/sandwich
app.delete('/api/cakesandwich/:name', db.delCakeSandwich)

// Sent delete request to delete staff member from system
app.delete('/api/staff/:id', db.delStaff)

// Sent get request to retrieve staff information
app.get('/api/staff/:name/:password', db.logStaff)



// Listening on defined port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
