import mongoose from "mongoose";
import mysql from "mysql2/promise";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};

//链接mysql
const connect_mysql = {}

export const connectToMySql = async () => {
  try{
    if(!connect_mysql.isConnected) return;
    connect_mysql.isConnected = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456Oo',
      port: '3306',
      database: 'test'
    })
  }catch(error){
    console.log(error)
    throw new Error(error);
  }
};