const localhost = process.env.PGDB_HOST;
const postgres = process.env.PGDB_USER;
const Keyin2021 = process.env.PGDB_PASSWORD;
const computers = process.env.PGDB_DATABASE;
const Pool = require('pg').Pool

const pool = new Pool({
    user: postgres,
    host: localhost,
    database: computers,
    password: Keyin2021,
    port: 5432,
});

module.exports = pool;