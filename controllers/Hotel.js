let express = require('express')
let hotelRouter = express.Router()

const Hotel= require('../models/hotel');

hotelRouter.get('/new', (req, res) => {
    console.log('new')
        res.render('addHotel');
    });

hotelRouter.get('/',(req,res)=>{
    Hotel.find().then(hotel => { 
        console.log(res)
        res.render('index', { hotel });


    });
});

hotelRouter.get('/:id',(req,res)=>{
    Hotel.findById(req.params.id).then(hotel => { 
        console.log('id')
        res.render('showHotel', { hotel });
    });
});

hotelRouter.get('/:id/edit',(req,res)=>{
    Hotel.findById(req.params.id).then(hotel => { 
        console.log('id')
        res.render('editHotel', { hotel });
    });
});

hotelRouter.put('/:id',(req,res)=>{
    Hotel.findByIdAndUpdate(req.params.id, req.body).then(hotel => { 
        console.log('id')
        res.redirect('/' + hotel.id);
   
    });
});
hotelRouter.delete('/:id', (req, res) => {
    Hotel.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    });
});


hotelRouter.get('/new', (req, res) => {
    console.log('new')
        res.render('/addHotel');
    });

hotelRouter.post('/', (req, res) => {
    Hotel.create(req.body).then(() => {
        res.redirect('/');
    });
});




module.exports = hotelRouter;