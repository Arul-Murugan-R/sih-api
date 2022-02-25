const route = require('express').Router();
const {body,validationResult} = require('express-validator/check')

const Data = require('../models/data')

route.post('/data',
[
    body('marks').isLength({min:1,max:3}).withMessage('Requires Mark'),
    body('status').isLength({min:1,max:3}).withMessage('Requires Econmical Stability'),
    body('personality').isLength({min:1,max:3}).withMessage('Requires Personality'),
    body('agree').isLength({min:1,max:3}).withMessage('Requires Agreeableness'),
    body('opens').isLength({min:1,max:3}).withMessage('Requires Openness'),
    body('aoi').isLength({min:1,max:3}).withMessage('Requires Area Of Interest'),
],
(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(500).json({data:'something went Wrong',error:errors.array()})
    }
    console.log(req.body)
    res.status(201).json({data:'success'})
})

route.get('/data',(req,res,next)=>{
    console.log(req.body)
    res.status(200).json({data:req.body.title})
})


module.exports=route