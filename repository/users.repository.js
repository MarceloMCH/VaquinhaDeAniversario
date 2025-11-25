import {UserModel} from "../models.js"
import { connectDB,sequelize } from "../database/database.js"

async function CreateUser(req,res) {
    connectDB();

    try{
        const{firstName, lastname,email,password} = req.body;
        const user = await UserModel.create({
        firstName,
        lastname,
        email,
        password
     })
     res.json(user)
    } catch(error){
        res.json({error: error.message})
    }
}

async function ReadUsers(req,res) {
    try{
        const users = await UserModel.find()
        res.json({
            user: req.user,
            User:users
        })
    } catch(error){
        res.json({error:error.message })
    }
    
}

async function UpdateUser(req,res) {
    try{
        const updateUser = await UserModel.findByIdAndUpdate({
            req.params.id,
            req.body,
            {new:true}
        })
    }
    
}