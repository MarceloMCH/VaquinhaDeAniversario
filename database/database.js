import { Sequelize } from '@sequelize/core';
import { MariaDbDialect } from '@sequelize/mariadb';
import dotenv from "dotenv"
dotenv.config();



const sequelize = new Sequelize({
  dialect: MariaDbDialect,
  database:process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST ,
  port: process.env.PORT,
  showWarnings: true,
  connectTimeout: 1000,

});

async function connectDB() {
  await sequelize.authenticate();
  console.log("conexao feita com sucesso")
  
}
export  {connectDB,sequelize};