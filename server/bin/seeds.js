const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cocktails_at_home', {useMongoClient: true});
const User = require('../models/User');
const Bartender = require('../models/Bartender');
User.collection.drop();

const userData = [

{username: 'Yurema',
password: '1234',
email: 'yuremarc@gmail.com'
// reviews: []
},

];

const bartenderData = [

  { username: 'Fernando',
    userlastname: 'Gomez',
    email: 'fergomez@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Me gusta encontrar la mezcla perfecta para cada persona y hacer flair'
    // recipes: 'hgku',
    // reviews: 'hgug'
  }
]

User.create(userData)
.then(userData => {
console.log(userData);
mongoose.connection.close();
})
.catch(err => console.log(err));

Bartender.create(bartenderData)
.then(bartenderData => {
console.log(bartenderData);
mongoose.connection.close();
})
.catch(err => console.log(err));
