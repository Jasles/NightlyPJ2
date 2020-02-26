let express = require('express')
let serviceRouter = express.Router()

const Service= require('../models/service');

serviceRouter.get('/:name',(req,res)=>{
  

   Service.findOne( {name: req.params.name} ).then(service => { 
     
        res.render('showservice', { service });
    });
});
module.exports= serviceRouter;