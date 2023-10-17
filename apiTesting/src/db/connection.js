const monk = require('monk');

let dbUrl = process.env.DB_URL; // gets the database URL from the environment variable

// if env is test, use the test database
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DB_URL_TEST;
}

const db = monk(dbUrl); // connect to the database

module.exports = db; // export the database connection