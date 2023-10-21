const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//app.use(express.json())

//importing routes
const ventasroutes = require('./routes/ventas');

//settings
app.set('port', process.env.PORT || 3000); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: 3306, 
    database: 'base'
}, 'single'));

app.use(express.urlencoded({extended:false}))
//routes
app.use('/',ventasroutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


//Staring the server
app.listen((3000), () =>{
    console.log('server on port 3000')
})