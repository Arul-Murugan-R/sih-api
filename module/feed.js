const route = require('express').Router();


const Data = require('../models/data')

route.use('/data',(req,res,next)=>{
    console.log(req.body)
    res.status(500).json({data:req.body.title})
})

module.exports=route