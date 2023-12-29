const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const excersice = require('./routes/excersice')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
dotenv.config()
const port = 3333;

const url = process.env.ATLAS_URI;
mongoose.connect(url)
.then(()=>{
    console.log('mongodb connection is successfully')
})
.catch((error)=>{
    console.log(error)
})
app.use(cors());
app.use(express.json());

app.use('/user' , user);
app.use('/excersice', excersice)

app.listen(port ,()=>{
    console.log(`server is running on port: ${port} `)
})

