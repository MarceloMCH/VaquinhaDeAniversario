
import {UserModel} from "../models/usermodels.js"


async function create(user){
    return UserModel.create(user)
}
export default {
  create
};