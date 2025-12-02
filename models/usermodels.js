import { DataTypes } from '@sequelize/core';
import { sequelize } from '../database/database.js';
const UserModel = sequelize.define('User',{
    UserId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    cpf:{
        type:DataTypes.STRING(11),
        unique: true,
        allowNull: false
    },
    notification:{
        type:DataTypes.BOOLEAN,
        allowNull: false
    },
    fullname:{ 
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(100),
        unique:true,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING(14),
        unique:true,
        allowNull:false
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    birthdata:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }


})

export {UserModel};