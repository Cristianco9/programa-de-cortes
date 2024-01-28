// import { createPool } from "mysql2/promise";
import mysql from 'mysql2/promise';

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
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Release the connection
    if (connection) {
      connection.release();
    }
  }
};