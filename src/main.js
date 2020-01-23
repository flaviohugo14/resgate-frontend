import Vue from 'vue';
import firebase from 'firebase';
import './firebase';
import VueFire from 'vuefire/dist/vuefire';
import App from './App.vue';
import router from './router';

Vue.use(VueFire);

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
