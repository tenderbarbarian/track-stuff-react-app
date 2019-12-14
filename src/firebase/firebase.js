import * as firebase from 'firebase';
//import expenses from '../tests/fixtures/expenses';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.val());
// 	console.log(snapshot.key);
// });

// database.ref('expenses').on('value', (snapshot) => {
// 	const expensesFromDB = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expensesFromDB.push({
// 			...childSnapshot.val(),
// 			id: childSnapshot.key
// 		});
// 	});
// 	console.log(expensesFromDB);
// });

// database.ref('expenses').once('value').then((snapshot) => {
// 	const expensesFromDB = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expensesFromDB.push({
// 			...childSnapshot.val(),
// 			id: childSnapshot.key
// 		});
// 	});
// 	console.log(expensesFromDB);
// });

// expenses.forEach((expense) => {
// 	database.ref('expenses').push(expense);
// });

// database.ref('notes').push({
// 	title: 'dawno dawno temu',
// 	content: 'nie bylo dzemu'
// });

// database.ref().on('value', (snapshot) => {
// 	const data = snapshot.val();
// 	console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(val);
// });

// database.ref().once('miejsce')
//               .then((snapshot)=>{
//                 const val = snapshot.val();
//                 console.log(val);
//               })
//               .catch((e)=>{
//                 console.log('error fetching once ', e)
//               });

// database.ref().set({
//     name: 'Kicia Kocia',
//     age: 2,
//     isSingle: true,
//     likesReading:true,
//     stressLevel: 9,
//     job: {
//       title: 'Mial master',
//       company: 'book'
//     },
//     miejsce: {
//       kraj: "Poland",
//       city: 'Warsaw'
//     }
// }).then(()=>{
//   console.log('data set');
// }).catch((e)=>{
//   console.log("this failed ", e);
// });

// // database.ref('likesReading').remove().then(function() {
// //   console.log("Remove succeeded.")
// // })
// // .catch(function(error) {
// //   console.log("Remove failed: " + error.message)
// // });

// // database.ref().update({
// //   name: 'Pucio',
// //   likesReading: null,
// //   'miejsce/city': 'Olsztyn'
// // });
// database.ref().update({
//   stressLevel: 6,
//   'job/company': 'movie',
//   'miejsce/city': 'Pacanów'
// });
