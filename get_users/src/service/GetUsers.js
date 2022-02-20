import { Users } from "../models/user.js";

export async function GetUser() {

    try {
        const res = await Users.find().select('-_id')
        return {status:1,res:res}

    } catch (error) {
        return {status:-1,res:null}
    }

}