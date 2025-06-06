import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


const DB_NAME = process.env.DB_NAME || 'authsystem';

const connection = await mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      port: process.env.DB_PORT || 3306,
      database: DB_NAME,
    });

export default connection;