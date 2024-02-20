import pkg from 'pg';
const { Pool } = pkg;

export const getConnection = async () => {
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'developer',
    password: '1234567890',
    database: 'instalando_cali_db'
  });
  return pool;
};

export const testConnection = async () => {
  try {
    const client = await getConnection();
    console.log('Database connected!');
    return true;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    return false;
  }
};
