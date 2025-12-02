import { DataTypes } from '@sequelize/core';
import { sequelize } from '../database/database.js';

const HobbiesModel = sequelize.define('HobbiesModel',{
    hobbiesId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    label:{
        type:DataTypes.STRING,
        unique:true
        
    }

})
export {HobbiesModel}