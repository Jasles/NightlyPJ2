let express = require('express')
let serviceRouter = express.Router()

const Service= require('../models/service');

serviceRouter.get('/new', (req, res) => {
    console.log('new')
        res.render('addService');
    });


serviceRouter.get('/',(req,res)=>{
    Service.find().then(service => { 
        console.log(res)
        res.render('indexService', { service });


    });
});

serviceRouter.get('/:name',(req,res)=>{
   Service.findOne( {name: req.params.name} ).then(service => { 
        res.render('showservice', { service });
    });
});


serviceRouter.get('/:id/edit',(req,res)=>{
    Service.findById(req.params.id).then(service => { 
        console.log('id')
        res.render('editService', { service });
    });
});

serviceRouter.post('/', (req, res) => {
    Service.create(req.body).then(() => {
        res.redirect('/service');
    });
})
serviceRouter.delete('/:id', (req, res) => {
    Service.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/service');
    });
});
serviceRouter.put('/:id',(req,res)=>{
    Service.findByIdAndUpdate(req.params.id, req.body).then(service => { 
        console.log('id')
        res.redirect('/service');
    });
});

module.exports= serviceRouter;