const mongoose = require('mongoose')

const schema = mongoose.Schema

const excersiceSchema = new schema({
    username:{
        type:String,
        unique:true
    },
    description:{
        type:String,
        minlength:3
    },
    derection:{
        type:String,
        minlength:3
    },
    date:{
        type:Date
        
    }

   
}, {timestamps:true})

const excersice = mongoose.model('excersice' ,excersiceSchema);

module.exports = excersice;