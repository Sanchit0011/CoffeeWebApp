// Load required modules and functionality
const express = require('express')
const db = require('./queries');
const app = express()
app.use(express.json())

app.use(express.static('assets'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/assets/view/index.html');
});

app.get('/manager', function (req, res) {
    res.sendFile(__dirname + '/assets/view/manager.html');
});

app.get('/staff', function (req, res) {
    res.sendFile(__dirname + '/assets/view/staff.html');
});

// Sent get request to retrieve cakes and sandwiches
app.get('/api/cakesandwich', db.readCakeSandwich)

// Sent get request to retrieve staff information
app.get('/api/staff', db.readStaff)

// Sent get request to retrieve staff information
app.get('/api/orders', db.readOrders)

// Sent get request to retrieve staff information
app.get('/api/staff/:name/:password', db.logStaff)

// Sent post request to store order information
app.post('/api/orders', db.addOrder)

// Sent post request to store cake/sandwich information
app.post('/api/cakesandwich', db.addCakeSandwich)

// Sent post request to add staff member to system
app.post('/api/staff', db.addStaff)

// Sent put request to add time taken to complete order 
app.put('/api/orders/:id', db.addTime)

// Sent put request to update cake/sandwich status
app.put('/api/cakesandwich/:id', db.updateCakeSandwichStatus)

// Sent delete request to delete cake/sandwich
app.delete('/api/cakesandwich/:name', db.delCakeSandwich)

// Sent delete request to delete staff member from system
app.delete('/api/staff/:id', db.delStaff)

// Sent put request to add time taken to complete order 
app.put('/api/ordercomp/:id', db.ordercomp)

// Listening on defined port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))