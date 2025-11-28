import { UserModel } from "./usermodels";
import { hobbies } from "./users_hobbies";
UserModel.belongsToMany(hobbies,{
    through:"UserHobbies",
    foreignKey:"user_id",
    otherKey:"hobbbes_id",
    as:"hobbies"
})
hobbies.belongsToMany(UserModel,{
    through:"UserHobbies",
    foreignKey:"hobbbies_id",
    otherKey:"user_id",
    as:"users"
})