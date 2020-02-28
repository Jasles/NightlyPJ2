const mongoose= require('../db/connection');
const Schema= mongoose.Schema;

const Hotel= new Schema({
    name:String,
    location:String,
    image:String,
    description:String,
    capacity:Number,
    checkinTime: String,
    service: String,
});


// export the donut model with module.exports
 module.exports= mongoose.model('Hotel', Hotel);