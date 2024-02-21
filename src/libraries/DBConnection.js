import pkg from 'pg';
const { Pool } = pkg;

import { config } from "../config/config.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const getConnection = async () => {
  const pool = new Pool({ connectionString: URI });
  return pool;
};

export const testConnection = async () => {
  try {
    const pool = await getConnection();

    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');

    console.log('Database connected:', result.rows[0].now);
    client.release();

  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    return false;
  }
};
