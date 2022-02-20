import express, { json, urlencoded } from 'express'
import cors from 'cors'
import 'dotenv/config'
import proxy from 'express-http-proxy'


const app = express();

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.use('/save-users', proxy(process.env.URL + "5001/"));
app.use('/get-users', proxy(process.env.URL + "5002/"));
app.use('/update-user', proxy(process.env.URL + "5003/"));
app.use('/get-users-csv', proxy(process.env.URL + "5004/"));



app.get('/',(req,res)=>{
    res.json("hey, I am Alive")
})

app.listen(5000, () => {
    console.log('listening on port 5000')
});