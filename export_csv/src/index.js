import express, { json, urlencoded } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { ExportCSV } from './services/Export.js';

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



app.get('/',async(req,res)=>{
    const result = await ExportCSV()
    console.log(result);
    if(result.status === -1){
        res.json(result)
    }else
    res.download('./users.csv')
})

app.listen(5004, () => {
    console.log('listening on port 5004')
});