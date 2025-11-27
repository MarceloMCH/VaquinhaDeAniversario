import { connectDB,sequelize }  from "./database/database.js";
import repository from './repository/index.js';

async function main() {
  await connectDB()
  await sequelize.sync({ alter: true });

  await repository.hobbies.create({
    label:"Treinar"
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