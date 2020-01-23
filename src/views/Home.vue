<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="#" class="navbar-brand">
        <span class="permanent">Resgate</span>
      </a>
    </nav>
    <div id="bar">
      <div class="btn_menu" @click="alternar('Index')">
        <span class="fa fa-tv"></span>Ao vivo
      </div>
      <div class="btn_menu" @click="alternar('Store')">
        <span class="fa fa-heart"></span>Ajude-nos
      </div>
      <div class="btn_menu" @click="alternar('Events')">
        <span class="fa fa-calendar"></span>Eventos
      </div>
      <div class="btn_menu" @click="alternar('Contact')">
        <span class="fa fa-user"></span>Contato
      </div>
      <div class="btn_menu" @click="sair">
        <span class="fa fa-sign-out"></span>Sair
      </div>
    </div>
    <div id="component">
      <Index v-show="this.aba === 'Index'"/>
      <Store v-show="this.aba === 'Store'"/>
      <Events v-show="this.aba === 'Events'"/>
      <Contact v-show="this.aba === 'Contact'"/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import firebase from 'firebase';
import Index from '../components/Index.vue';
import Store from '../components/Store.vue';
import Contact from '../components/Contact.vue';
import Events from '../components/Events.vue';

export default {
  name: 'home',
  data() {
    return {
      aba: 'Index',
    };
  },
  components: {
    Index,
    Store,
    Contact,
    Events,
  },
  methods: {
    alternar(name) {
      this.aba = name;
    },
    sair() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

.permanent {
  font-family: 'Permanent Marker', cursive;
  font-size: 24px;
}

.fa {
  margin-right: 8px;
}

.links-nav {
  border-bottom: 0.5px solid transparent;
}
.links-nav:hover {
  border-bottom: 0.5px solid #333;
}

#bar {
  display: flex;
  height: 50px;
  background-color: #FFF;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #000;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
  0px 3px 1px -2px rgba(0, 0, 0, 0.12),
  0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}

.btn_menu {
  padding: 8px;
  margin-left: 5px;
  margin-right: 5px;
  background-color:transparent;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn_menu:hover {
  background-color: #eee;
  cursor: pointer;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
}

@media screen and (max-width: 500px) {
  #bar {
    background-color: #fff;
    flex-direction: column;
    height: 240px;
  }

  .btn_menu {
    padding: 8px;
    margin-left: 5px;
    margin-right: 5px;
    width: 95%;
    margin-bottom: 5px;
    background-color:transparent;
    border: 0.5px solid #eee;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn_menu:hover {
  background-color: #eee;
  cursor: pointer;
  }
}
</style>
