import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const DB_NAME = process.env.DB_NAME || "authsystem";

const connection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  port: process.env.DB_PORT || 3306,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const runSetup = async () => {
  try {
    const db = await connection.getConnection();
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255),
        password_hash VARCHAR(255),
        role_id INT
      )
    `);
    db.release();
    console.log("Database setup complete.");
  } catch (err) {
    console.error("Error setting up database:", err.message);
  }
};

export { connection, runSetup };
