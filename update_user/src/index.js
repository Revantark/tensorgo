import express, { json, urlencoded } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { UpdateUser } from './services/UpdateUser.js';

const app = express();

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

///NOSQL connections
mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.once('open',function(){
	console.log('You are connected to the database')
}).on('error', function(error){
	console.log('error :', error)
})



app.put('/',async (req,res)=>{
    const result = await UpdateUser((req.body))
    res.json(result)
})

app.listen(5003, () => {
    console.log('listening on port 5003')
});