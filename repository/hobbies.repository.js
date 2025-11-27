import { hobbies } from "../models/users_hobbies.js";
async function create(hobbie) {
    return hobbies.create(hobbie)
}

export default {
    create
};
