import { UserModel } from "./usermodels.js";
import { HobbiesModel } from "./users_hobbies.js";

UserModel.associate = function(models){
    UserModel.belongsToMany(models.HobbiesModel,{
        through:"users_hobbies",
        as:"HobbiesModel",
        foreignKey:"UserId",
        otherKey:"hobbiesId"
    })

}


HobbiesModel.associate = function(models){
    HobbiesModel.belongsToMany(models.UserModel,{
        through:"users_hobbies",
        as:"UserModel",
        foreignKey:"hobbiesId",
        otherKey:"UserId"
    })
}

const UserHobbies = {
    hobbiesId:saveOrder.id,
    UserId: item.id,

}

