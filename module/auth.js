const route = require('express').Router();

const User = require('../models/user')



route.use('/login',(req, res,next)=>{
    res.status(200).json({message:'Working Good'})
})


module.exports = route