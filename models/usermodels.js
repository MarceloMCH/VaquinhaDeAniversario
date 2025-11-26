import { DataTypes } from '@sequelize/core';
import { sequelize } from '../database/database.js';
const UserModel = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{ 
        type:DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING
    }


})

export {UserModel};