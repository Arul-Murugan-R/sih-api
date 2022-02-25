const route = require('express').Router();
const {body,validationResult} = require('express-validator/check')

const Data = require('../models/data')

route.post('/data',
[
    body('marks').not().isEmpty().withMessage('Requires Mark'),
    body('status').not().isEmpty().withMessage('Requires Econmical Stability'),
    body('personality').not().isEmpty().withMessage('Requires Personality'),
    body('agree').not().isEmpty().withMessage('Requires Agreeableness'),
    body('opens').not().isEmpty().withMessage('Requires Openness'),
    body('aoi').not().isEmpty().withMessage('Requires Area Of Interest'),
],
(req,res,next)=>{
    console.log(req.body)
    res.status(500).json({data:'success'})
})

route.get('/data',(req,res,next)=>{
    console.log(req.body)
    res.status(500).json({data:req.body.title})
})


module.exports=route