<template>
<body>
  <div class="login">
    <div class="container">
      <h2 class="text-center">RESGATE</h2>
      <h3 class="text-center"><span class="">Crie sua conta: </span></h3>
      <div class="form-group">
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        >
      </div>
      <div class="form-group">
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Senha"
          v-model="password"
        >
      </div>
      <button @click="signUp" class="btn btn-light">
        Criar conta
      </button>
      <button @click="authFacebook" class="btn btn-light" id="facebook">
        <span class="fa fa-facebook-official"></span>
      </button>
      <button @click="authGoogle" class="btn btn-light" id="google">
        <span class="fa fa-google"></span>
      </button>
      <h6 class="text-center">Já tem uma conta?</h6>
      <router-link to="/login">
        <button class="btn btn-light">
          Faça seu login
        </button>
      </router-link>
    </div>
  </div>
</body>
</template>

<script>
/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import firebase from 'firebase';

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (email) => {
          this.$router.replace('home').then(() => {
            alert(`Bem vindo, ${this.email}`);
          });
        },
        (err) => {
          if (err.code === 'auth/invalid-email'){
            alert('Por favor, digite um email válido.');
          }
          else if (err.code === 'auth/weak-password'){
            alert('Senha Inválida - A senha precisa ter no mínimo 6 caractéres.');
          }
          else {
            alert(`${err.code} - ${err.message}`);
          }
        },
      );
    },
    authFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider).then(
        (result) => {
          const token = result.credential.accessToken;
          const user = result.user.email;
          console.log(token);
          this.$router.replace('home');
          alert(`Bem vindo, ${user}`);
        },
        (error) => {
          console.log(error.code);
          console.log(error.message);
        },
      );
    },
    authGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        const token = result.credential.accessToken;
        const user = result.user.email;
        console.log(token);
        this.$router.replace('home');
        alert(`Bem vindo, ${user}`);
      },
      (error)=> {
        console.log(error.code);
        console.log(error.message);
      },
      );    
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

  body {
    background-color: #efefef;
    display: flex;
    height: 100vh;
    min-height: 650px;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: #000;
    font-family: 'Permanent Marker', cursive;
  }

  h3 {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-bottom: 20px;
  }

  .btn {
    color: #000;
    height: 50px;
    width: 100%;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    background-color: #FFF;
  }

  .btn:hover {
    background-color: #FFF;
    box-shadow: none;
  }

  .login {
    padding: 10px;
    padding-top: 20px;
    background-color: #FFF;
    max-height: 600px;
    height: 90%;
    max-width: 375px;
    width: 90%;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  }
  #facebook {
    background-color: #3b5998;
    border-color: #3b5998;
    color: #fff;
    font-size: 24px;
  }
  #google {
    background-color: #d34836;
    color: #FFF;
    border-color: #d34836;
    font-size: 24px;
  }
</style>
