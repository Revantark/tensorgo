import { Users } from "../models/user.js";

export async function UpdateUser(user){
    
    try {
        await Users.findOneAndUpdate({id:user.id},user)
        return {status:1,res:"User Updated"}
    } catch (error) {
        return {status:-1,res:"An error occured"}
        
    }
}