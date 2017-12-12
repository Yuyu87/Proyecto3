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
    lastname: 'Gomez',
    email: 'fergomez@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Me gusta encontrar la mezcla perfecta para cada persona y hacer flair'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Gabriel',
    lastname: 'Burneo',
    email: 'gabriel_burneo@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Un poco de locura con la mezcla siempre es divertido'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Adriana',
    lastname: 'Soley',
    email: 'soyadrianasoley@gmail.com',
    password: '1234',
    city: 'Madrid/NewYork',
    style: 'Modern',
    description: 'Con un poco de gusto todo está bueno.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Miguel',
    lastname: 'Figueredo',
    email: 'mioguelfigueredolancha@gmail.com',
    password: '1234',
    city: 'Madrid/Washington D.C.',
    style: 'Modern',
    description: 'Tengo una amplia trayectoria y grandes conocimientos ;)'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Alberto',
    lastname: 'Pizarro',
    email: 'albertopizarro83@gmail.com',
    password: '1234',
    city: 'Barcelona',
    style: 'Modern',
    description: ''
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Alicia',
    lastname: 'Barcos',
    email: 'alibarcos@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Classic',
    description: 'Me gusta la harmonía líquida'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Almudena',
    lastname: 'Vazquez Castro',
    email: 'castro86@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Llevo años en la coctelería, puedo hacer cócteles tanto clásicos como modernos. '
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Ángel',
    lastname: 'Avila',
    email: 'avilalson@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Me especialozo sobre todo en bebidas tropicales.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Antonio',
    lastname: 'Naranjo',
    email: 'a.naranjonev@gmail.com',
    password: '1234',
    city: 'Barcelona',
    style: 'Classic',
    description: 'Mi punto fuerte es el Dry Martini.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Bruno',
    lastname: 'Rodrigues',
    email: 'rodriguestar@gmail.com',
    password: '1234',
    city: 'Barcelona',
    style: 'Modern',
    description: ''
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'David',
    lastname: 'González',
    email: 'dgl.80@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: ''
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Dennis',
    lastname: 'Barela Adiuba',
    email: 'dennisbarelafil@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Cocktails, flair y un poco de magia.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Eduardo',
    lastname: 'García Miras',
    email: 'edumiras87@gmail.com',
    password: '1234',
    city: 'Madrid/Ibiza',
    style: 'Modern',
    description: 'Me muevo entre Madrid e Ibiza.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Elisa',
    lastname: 'Libertad Vidal',
    email: 'elibertad.vidal@gmail.com',
    password: '1234',
    city: 'Valencia',
    style: 'Classic',
    description: ''
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Eloy',
    lastname: 'García Vergara',
    email: 'eloycubaname@gmail.com',
    password: '1234',
    city: 'Jerez',
    style: 'Tropical',
    description: 'Puedo hacer los mejores cócteles de Jerez.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Fermín',
    lastname: 'Román',
    email: 'fermin.roman@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Classic',
    description: 'Larga trayectoria y clientes siempre contentos.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Fran',
    lastname: 'Olmo',
    email: 'francixolmo@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Classic',
    description: 'Me gusta la harmonía líquida'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Frank',
    lastname: 'Lola',
    email: 'frankbeefeater@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: 'Recetas especiales con Beefeater!!'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Hektor',
    lastname: 'Talens',
    email: 'soyhektortalens@gmail.com',
    password: '1234',
    city: 'Valencia',
    style: 'Classic',
    description: ''
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Iván',
    lastname: 'Cortón',
    email: 'chuski86@gmail.com',
    password: '1234',
    city: 'A Coruña',
    style: 'Modern',
    description: 'Adoro los maridajes.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Javier',
    lastname: 'Caballero',
    email: 'javier@liquidexperience.com',
    password: '1234',
    city: 'Madrid/A Coruña',
    style: 'Modern',
    description: 'Toda una experiencia líquida por vivir.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Jesús',
    lastname: 'De los Mozos',
    email: 'j.delosmozos@gmail.com',
    password: '1234',
    city: 'Madrid',
    style: 'Modern',
    description: ''
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

  { username: 'Joao',
    lastname: 'Eusebio',
    email: 'joaococktail@gmail.com',
    password: '1234',
    city: 'Barcelona',
    style: 'Modern',
    description: 'Puedo hacer cualquier cocktail pero mi favorito sin duda es el negroni.'
    // recipes: 'hgku',
    // reviews: 'hgug'
  },

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
