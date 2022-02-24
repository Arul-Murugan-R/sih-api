const express = require('express');
const app = express();



const apiPage = require('./module/feed');
const authPage = require('./module/auth');

app.use(express.urlencoded({ extended: true }));

app.use('/api',apiPage);
// app.use('/auth',authPage);

app.listen(8080,()=>{
    console.log('listening on http://localhost:8080');
})