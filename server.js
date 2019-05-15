// Load required modules and functionality
const express = require('express')
const db = require('./queries');
const app = express()
app.use(express.json())


// Listening on defined port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
