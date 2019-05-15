// Load required modules and functionality
const express = require('express')
const db = require('./queries');
const app = express()
app.use(express.json())

// Sent get request to retrieve staff information
app.get('/api/staff/:name/:password', db.logStaff)

// Listening on defined port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

