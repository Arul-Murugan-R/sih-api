const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const URI = `mongodb+srv://${process.env.NAME}:${process.env.DPASS}@cluster0.1tdiu.mongodb.net/${process.env.dbname}`
const apiPage = require('./module/feed');
const authPage = require('./module/auth');

app.use(express.urlencoded({ extended: true }));

app.use('/api',apiPage);
app.use('/auth',authPage);

mongoose.connect(URI)
.then(()=>{
    console.log('Mongoose Connected Successfully !!!');
    app.listen(8080,()=>{
        console.log('listening on http://localhost:8080');
    })
})
.catch(err=>console.log(err))