const mongoose= require('../db/connection');
const Schema= mongoose.Schema;


const Guest= new Schema({
    name:String,
    Age:String,git 
    image:String,
    phone:Number,
    email:Number,

    
});

 module.exports= mongoose.model('Guest', Guest);