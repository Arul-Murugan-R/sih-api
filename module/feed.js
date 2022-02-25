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
    if(!errors.isEmpty){
        return res.status(500).json({data:'something went Wrong',error:errors.array()})
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
    data.save(()=>{
        res.status(201).json({message:'Successfully added to the db'})
    })
})

route.use('/data',(req,res,next)=>{
    Data.find()
    .then((dataSet)=>{
        if(!dataSet){
            return res.status(404).json({message: 'No data found in database'})
        }
        console.log(dataSet)
        res.status(200).json({data:dataSet,message:'Data Fetched Successfully'})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=route