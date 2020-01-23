import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCV2cMajGLyQ0SMGwHRHSxL7LpsqtjiboY',
  authDomain: 'gruporesgate.firebaseapp.com',
  databaseURL: 'https://gruporesgate.firebaseio.com',
  projectId: 'gruporesgate',
  storageBucket: 'gruporesgate.appspot.com',
  messagingSenderId: '552208019011',
  appId: '1:552208019011:web:85d24f42a643e013ca6ef6',
  measurementId: 'G-BZKNSF23E2',
};
// Initialize Firebase
const fapp = firebase.initializeApp(firebaseConfig);
export const db = fapp.firestore();
export const videosCollection = db.collection('videos');
export const productsCollection = db.collection('products');
export const eventsCollection = db.collection('events');
