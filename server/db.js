require("dotenv").config();
const Pool = require("pg").Pool;

const password = process.env.PG_PASSWORD;
const pool = new Pool({
  user: "postgres",
  password: password,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
