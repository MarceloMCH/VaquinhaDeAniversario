import { connectDB,sequelize }  from "./database/database.js";
import repository from './repository/index.js';

async function main() {
  await connectDB()
  await sequelize.sync({ alter: true });
  await repository.users.create({
    cpf:"06562666945",
    notification:true,
    fullname:"Marcelo Machado",
    email:"Marcelo_mch@outlook.com",
    phone:"41985034255",
    password:"98071011",
    birthdata:"07031998"
  })
}

export default main()