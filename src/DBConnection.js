import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "1234567890",
  port: 3306,
  database: "instalandoCaliMainDB",
});