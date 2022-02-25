const route = require('express').Router();

const bcrypt = require('bcrypt')

const User = require('../models/user')



route.use('/login',(req, res,next)=>{
    res.status(200).json({message:'Working Good'})
})

route.post('/signup',(req, res,next)=>{
    console.log(req.body)
    User.findOne({name:req.body.name})
    .then((result)=>{
        console.log(result)
        if(result){
            const error = new Error('User Already Exist')
            error.statusCode = 442;
            throw error
        }
        bcrypt.hash(req.body.password,12)
        .then((hash)=>{
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password:hash
            })
            return user.save()
        })
        .then(()=>{
            res.status(201).json({message:'User Signed Up Successfully'})
        })
    })
    .catch(err=>{
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 442
        }
        next(err)
    })
    
})


module.exports = route