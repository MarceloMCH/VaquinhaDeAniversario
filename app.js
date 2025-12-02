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
    phone:"41985034355",
    password:"98071011",
    birthdata:"07031998"
  })
    await repository.hobbies.create({
    label:"Ler"
  }) 
    await repository.hobbies.create({
    label:"videogame"
  }) 
    await repository.hobbies.create({
    label:"viajar"
  }) 
    await repository.hobbies.create({
    label:"⁠autocuidado"
  }) 
}

export default main()