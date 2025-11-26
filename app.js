import { connectDB,sequelize }  from "./database/database.js";
import repository from './repository/index.js';

async function main() {
  await connectDB()
  await sequelize.sync({ alter: true });
  await repository.users.create({
    name:"Marcelo Machado",
    email: "Marcelo.mar9810@gmail.com234",
    password: "98071011"
  })
}

export default main()