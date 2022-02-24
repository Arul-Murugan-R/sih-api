const Schema = require('mongoose').Schema;

const dataSchema = new Schema({
    //12 th Marks
    marks:{
        type:Number,
        required:true,
    },
    //Economical Stability
    status:{
        type:Number,
        required:true,
    },
    personality:{
        type:Number,
        required:true,
    },
    //agreeableness
    agree:{
        type:Number,
        required:true,
    },
    //openness
    opens:{
        type:Number,
        required:true,
    },
    //Area Of Interest
    aoi:{
        type:Number,
        required:true,
    },
})



module.exports = dataSchema