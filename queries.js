// Establishing connection with postgresql
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'SanSak12$',
    port: 5432
})

