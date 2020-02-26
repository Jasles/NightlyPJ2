const mongoose= require('../db/connection');
const Schema= mongoose.Schema;

const service= new Schema({
    
    
    name:String,
    image: String,
    description: String,
    materials:String,
    time:String,
    

});


// export the donut model with module.exports
 module.exports= mongoose.model('Service',service);