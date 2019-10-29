import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
