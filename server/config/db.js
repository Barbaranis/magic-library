import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const dbConfig = {
    host: process.env.DB_HOST, // localhost
    user: process.env.DB_USER, // root
    password: process.env.DB_PASSWORD, //root
    database: process.env.DB_NAME, // librairie_en_ligne
    port:process.env.DB_PORT || 8889
};

const connectDB = async () => {
    return await mysql.createConnection(dbConfig);
};

export default connectDB;