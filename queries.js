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
