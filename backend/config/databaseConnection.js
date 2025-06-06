import dotenv from "dotenv";
import tables from "../DB/databaseTable.js";
import connection from "./db.js";
dotenv.config();

const DB_NAME = process.env.DB_NAME || "authsystem";

const runSetup = async () => {
  try {
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
    console.log(`Database '${DB_NAME}' created or exists`);

    for (const query of tables) {
      await connection.execute(query);
    }

    console.log("All tables created");
  } catch (err) {
    console.error("Setup error:", err.message);
  }
};

export default runSetup;
