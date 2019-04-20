// Load required modules and functionality
const express = require('express')
const db = require('./queries')
const app = express()
app.use(express.json())

// Sent get request to retrieve cakes and sandwiches
app.get('/api/cakesandwich', db.readCakeSandwich)

// Sent get request to retrieve cakes and sandwiches by id
app.get('/api/cakesandwich/:id', db.readCakeSandwichByID)

// Sent post request to store order information
app.post('/api/orders', db.addOrder)

// Sent post request to store cake/sandwich information
app.post('/api/cakesandwich', db.addCakeSandwich)

// Sent put request to add time taken to complete order 
app.put('/api/orders/:id', db.addTime)

// Sent put request to update cake/sandwich status
app.put('/api/cakesandwich/:id', db.updateCakeSandwichStatus)

// Sent delete request to delete cake/sandwich
app.delete('/api/cakesandwich/:id', db.delCakeSandwich)

// Listening on defined port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
