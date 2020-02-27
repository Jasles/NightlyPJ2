// let User = require('../models/guest.js')
let Hotel = require('../models/hotel.js')
// let Service = require('../models/service.js');
let Service = require('../models/service.js')
let Guest = require('../models/guest.js')

let NewHotel = [
{
    name: 'Hampton Inn',
    location:'Peachtree Corners',
    image:'',
    description:'Double',
    capacity:4,
    checkinTime: '10pm', 
    _id: 'Clean Parking Lot'

},

{
    name: 'Quality Inn',
    location:'Alpharetta',
    image:'',
    description:'Double',
    capacity:4,
    checkinTime: '11pm',
    service: 'Clean Windows'
},

{
    name: 'Hilton Garden Inn',
    location:'Dunwoody',
    image: url("Unknown-5.jpeg"),
    description: 'Single',
    capacity:2 ,
    checkinTime: '11pm',
    service: 'Clean Parking Lot'
},
{
    name: 'Quality Inn',
    location:'Decatur',
    image:'',
    description:'Double',
    capacity: 4,
    checkinTime: '9pm',
    service: 'Clean Windowns'
},

{
    name: 'Residence Inn',
    location:'Decatur',
    image:'',
    description:'Suite',
    capacity: 6,
    checkinTime: '10pm',
    service: 'Clean Parking Lot'
}
]

let NewService =[
{
    name:'Clean Windows',
    description: 'Clean Perimeter first floor windows.',
    materials:'Will be provided',
    time:'1 hour ',
},

{
    
    name:'Clean Parking Lot',
    description: 'Clean Pearking lot, free of trash.',
    materials:'Will be provided',
    time:'1 hour ',
},
]

let NewGuest=
[
    {
        name: 'Mary Tyler Moore',
        Age:39,
        image: '',
        phone:'798-7659',
        email:'happyday@me.com',
    
    }
]

Hotel.deleteMany().then(() => {
    return Hotel.create(NewHotel)
});

Service.deleteMany().then(() => {
    return Service.create(NewService)
});

Guest.deleteMany().then(() => {
    return Guest.create(NewGuest)
});


