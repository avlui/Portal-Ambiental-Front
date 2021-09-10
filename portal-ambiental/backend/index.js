/*
Paquetes instalados para le backend:
    body-parser
    cors
    dotenv
    express
    express-validator
    formidable  
    fs
    lodash
    mongose
    morgan

    nodemon
*/
//Import libs
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors =  require('cors');

//Use libs methods
const app = express();
require('dotenv').config();


//Midlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Database setup
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=> console.log('¡Database conecctión success!'));
//Routes setup
app.get('/',(req,res)=>{
    res.send('welcome to the MERN project sever');
}) 

//Listen to port
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`video-game MERN server is running in port: ${port}`);
})