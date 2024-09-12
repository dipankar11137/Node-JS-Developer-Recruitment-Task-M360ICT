

import dotenv from 'dotenv';
import knex from 'knex';

// Load environment variables from the .env file
dotenv.config();

// Create a Knex instance using the environment variables for the DB connection
const db = knex({
  client: 'pg', // Change this to 'mysql2' if you're using MySQL
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: { min: 2, max: 10 },
});

export default db;
