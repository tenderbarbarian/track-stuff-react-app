const address = ['Kopalniana 22', 'Warszawa', 'Polska', '01-321'];

const [, city, country= 'Poland'] = address;

console.log(`You're in ${city} ${country}`);

const item = ['coffee {hot}', '$2.00', '$2.50', '$2.75'];

const [beverage, , medium,]= item;
console.log(`A medium ${beverage} costs ${medium}`);




// const book = {
//     title: 'Ego is the enemy', 
//     author: 'Ryan Holiday', 
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name:pubilsherName="Self-published"} = book.publisher;

// console.log(pubilsherName);




//   console.log('destructuring');

//   const person = {
//       name: "Kocia", 
//       age:2,
//       location:{
//           city: "Warszawa", 
//           temp: 1
//       }
//   }

//   const {name ='Anonymous', age} = person;
 
//   console.log(`${name} is ${age}`);

//   const {city, temp: temperature} = person.location;
//   if (city && temperature){
//       console.log(`It's ${temperature} in ${city}`);
//   }
//   //console.log(`${person.name} is ${person.age}`);