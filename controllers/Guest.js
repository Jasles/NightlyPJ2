let express = require('express')
let guestRouter = express.Router()

const Guest= require('../models/guest');
guestRouter.get('/:id/edit',(req,res)=>{
    Guest.findById(req.params.id).then(guest => { 
        console.log('id')
        res.render('editGuest', { guest });
    });
});
guestRouter.put('/:id',(req,res)=>{
    Guest.findByIdAndUpdate(req.params.id, req.body).then(guest => { 
        console.log('id')
        res.redirect('/guest');
    });
});
guestRouter.get('/new', (req, res) => {
    console.log('new')
        res.render('addGuest');
    });
guestRouter.get('/',(req,res)=>{
    Guest.find().then(guest => { 
        res.render('indexGuest', { guest });
    });
});

guestRouter.get('/:id',(req,res)=>{
    Guest.findById( req.params.id ).then(guest => { 
         res.render('showguest', { guest});
     });
 });

 guestRouter.delete('/:id', (req, res) => {
   Guest.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/guest');
    });
});
guestRouter.post('/', (req, res) => {
    Guest.create(req.body).then(() => {
        res.redirect('/guest');
    });
})

module.exports= guestRouter;