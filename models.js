import { DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';
class UserModel extends Model{ 
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    id;

    @Attribute(DataTypes.STRING)
    @NotNull
    firstName;

    @Attribute(DataTypes.STRING)
    @NotNull
    lastName;

    @Attribute(DataTypes.STRING)
    @NotNull
    email;

    @Attribute(DataTypes.STRING)
    @NotNull
    password;
}

export default UserModel;