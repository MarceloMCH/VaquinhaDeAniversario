import { DataTypes } from '@sequelize/core';
import { sequelize } from '../database/database.js';

const hobbies = sequelize.define('Hobbies',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    label:{
        type:DataTypes.STRING,
        unique:true
        
    }

})
export {hobbies}