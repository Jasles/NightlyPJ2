const mongoose= require('../db/connection');
const Schema= mongoose.Schema;


const Guest= new Schema({
    name:String,
    Age:Number,
    image: String,
    phone:String,
    email:String,

    
});

 module.exports= mongoose.model('Guest', Guest);