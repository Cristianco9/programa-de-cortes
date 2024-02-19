/*import mysql from 'mysql2/promise';

export const connection = {
  host: '127.0.0.1',
  user: 'root',
  password: '1234567890',
  database: 'instalandoCaliMainDB',
  port: '3306'
};

export const pool = mysql.createPool(connection);

export const testConnection = async () => {
  let connection;

  try {
    connection = await pool.getConnection();
    console.log('Database connected!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    // Release the connection
    if (connection) {
      connection.release();
    }
  }
}; */

/*import { Pool } from 'pg';

export const connection = {
  host: '127.0.0.1',
  user: 'developer',
  password: '1234567890',
  database: 'instalando_cali_db',
  port: 5432
};

export const pool = new Pool(connection);

export const testConnection = async () => {
  let client;

  try {
    client = await pool.connect();
    console.log('Database connected!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    // Release the client
    if (client) {
      client.release();
    }
  }
}; */

import pkg from 'pg';
const { Client } = pkg;

export const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'developer',
    password: '1234567890',
    database: 'instalando_cali_db'
  });

  await client.connect();
  return client;
};

export const testConnection = async () => {
  try {
    const client = await getConnection();
    await client.end();
    console.log('Database connected!');
    return true;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    return false;
  }
};
