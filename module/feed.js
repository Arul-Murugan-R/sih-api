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
        errors.statusCode = 442;
        errors.message = 'Data Should be filled Completely'
        throw errors
    }
    console.log(req.body)
    const data = new Data({
        marks:req.body.marks,
        status:req.body.status,
        personality:req.body.personality,
        agree:req.body.agree,
        opens:req.body.opens,
        aoi:req.body.aoi,
    }) 
    data.save()
    .then(()=>{
        res.status(201).json({message:'Successfully added to the db'})
    })
    .catch(err=>{
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 442
        }
        next(err)
    })
})

route.use('/data',(req,res,next)=>{
    Data.find()
    .then((dataSet)=>{
        if(!dataSet){
            const error = new Error('No data found in database')
            error.statusCode = 404;
            throw error
        }
        console.log(dataSet)
        res.status(200).json({data:dataSet,message:'Data Fetched Successfully'})
    })
    .catch(err=>{
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 442
        }
        next(err)
    })
})


module.exports=route