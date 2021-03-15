import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user:'carlholmquist',
    host:'localhost',
    database:'dws',
    password:'4085',
    port: 5432
});

console.log()

export default pool;
