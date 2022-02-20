
import axios from 'axios';
import {Users} from '../models/user.js';

export async function fetchAndSave(){

    try {
        const res = await axios.get("https://gorest.co.in/public/v2/users")
        const data = res.data

        await Users.insertMany(data)
        return "Saved"
    } catch (error) {
        return "Internal Error occured"
    }

}
