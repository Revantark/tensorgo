import { Users } from "../models/user.js";
import { Parser }  from 'json2csv';
import {promises as fs } from 'fs'
export async function ExportCSV(){
    
    try {
        const res =await Users.find().select(['-_id','-__v']).lean()
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(res);
        await fs.writeFile('users.csv',csv,(err)=>{
            if(err) console.log(err);
        })
        return {status:1,res:"Success"}
    } catch (error) {
        console.log(error);
        return {status:-1,res:"Error"}
        
    }
}