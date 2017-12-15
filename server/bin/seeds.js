const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cocktails_at_home', {useMongoClient: true});
const User = require('../models/User');
User.collection.drop();

const userData = [

{username: 'Yurema',
password: '1234',
email: 'yuremarc@gmail.com',
isBartender: true,
city: 'Madrid',
style: 'Modern',
description: 'Me encantan los cocktails!!'
// reviews: []
},

{
  username: 'Fer Gómez',
  password: '1234',
  email: 'fergomez@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Me gusta encontrar la mezcla perfecta para cada persona y hacer flair.'
},

{
  username: 'Gabriel Burneo',
  password: '1234',
  email: 'gabriel_burneo@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Un poco de locura con la mezcla siempre es divertido.'
},

{
  username: 'Adriana Soley',
  password: '1234',
  email: 'soyadrianasoley@gmail.com',
  isBartender: true,
  city: 'Madrid/NewYork',
  style: 'Modern',
  description: 'Con un poco de gusto todo está bueno.'
},

{
  username: 'Miguel Figueredo Lancha',
  password: '1234',
  email: 'miguelfigueredolancha@gmail.com',
  isBartender: true,
  city: 'Madrid/Washington D.C.',
  style: 'Modern',
  description: 'Tengo una amplia trayectoria y grandes conocimientos.'
},

{
  username: 'Alberto Pizarro',
  password: '1234',
  email: 'albertopizarro83@gmail.com',
  isBartender: true,
  city: 'Barcelona',
  style: 'Modern',
  description: 'Tengo una amplia trayectoria y grandes conocimientos.'
},

{
  username: 'Alicia Barcos',
  password: '1234',
  email: 'alibarcos@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Me gusta la harmonía líquida'
},

{
  username: 'Almudena Vazquez Castro',
  password: '1234',
  email: 'castro86@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Llevo años en la coctelería, puedo hacer cócteles tanto clásicos como modernos.'
},

{
  username: 'Ángel Ávila',
  password: '1234',
  email: 'avilalson@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Especializado en bebidas tropicales.'
},

{
  username: 'Ántonio Naranjo',
  password: '1234',
  email: 'a.naranjonev@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Mi punto fuerte es el Dry Martini.'
},

{
  username: 'Bruno Rodrigues',
  password: '1234',
  email: 'rodriguestar@gmail.com',
  isBartender: true,
  city: 'Barcelona',
  style: 'Modern',
  description: 'Especialista en hacer pasar buenas experiencias.'
},

{
  username: 'David González',
  password: '1234',
  email: 'dgl.80@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: ''
},

{
  username: 'Dennis Barela Adiuba',
  password: '1234',
  email: 'dennisbarelafil@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Cocktails, flair y un poco de magia.'
},

{
  username: 'Eduardo García Miras',
  password: '1234',
  email: 'edumiras87@gmail.com',
  isBartender: true,
  city: 'Madrid/Ibiza',
  style: 'Modern',
  description: 'Me muevo entre Madrid e Ibiza. Me encanta provocar sonrisas.'
},

{
  username: 'Elisa Libertad Vidal',
  password: '1234',
  email: 'elibertad.vidal@gmail.com',
  isBartender: true,
  city: 'Valencia',
  style: 'Modern',
  description: ''
},

{
  username: 'Eloy García Vergara',
  password: '1234',
  email: 'eloycubaname@gmail.com',
  isBartender: true,
  city: 'Jerez',
  style: 'Modern',
  description: 'Puedo hacer los mejores cócteles tropicales de Jerez.'
},

{
  username: 'Fermín Román',
  password: '1234',
  email: 'fermin.roman@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Classic',
  description: 'Larga trayectoria y clientes siempre contentos.'
},

{
  username: 'Fran Olmo',
  password: '1234',
  email: 'francixolmo@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Classic',
  description: 'Me gusta la harmonía líquida'
},

{
  username: 'Frank Lola',
  password: '1234',
  email: 'frankbeefeater@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Recetas especiales con Beefeater!!'
},

{
  username: 'Héctor Talens',
  password: '1234',
  email: 'soyhektortalens@gmail.com',
  isBartender: true,
  city: 'Valencia',
  style: 'Classic',
  description: 'Recetas especiales con Beefeater!!'
},

{
  username: 'Iván Cortón',
  password: '1234',
  email: 'chuski86@gmail.com',
  isBartender: true,
  city: 'A Coruña',
  style: 'Modern',
  description: 'Adoro los maridajes.'
},

{
  username: 'Javier Caballero',
  password: '1234',
  email: 'javier@liquidexperience.com',
  isBartender: true,
  city: 'Madrid/A Coruña',
  style: 'Modern',
  description: 'Toda una experiencia líquida por vivir.'
},

{
  username: 'Jesús De los Mozos',
  password: '1234',
  email: 'j.delosmozos@gmail.com',
  isBartender: true,
  city: 'Madrid',
  style: 'Modern',
  description: 'Rock & Cocktails!'
},

{
  username: 'Joao Eusebio',
  password: '1234',
  email: 'nosinminegroni@gmail.com',
  isBartender: true,
  city: 'Barcelona',
  style: 'Modern',
  description: 'Puedo hacer cualquier cocktail pero mi favorito sin duda es el negroni.'
}


];

User.create(userData)
.then(userData => {
console.log(userData);
mongoose.connection.close();
})
.catch(err => console.log(err));
