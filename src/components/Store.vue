<template>
  <div class="container">
    <br><br><br>
    <center>
      <div class="product" v-for="product in products" :key="product.id">
        <div class="top">
          <center><b>{{product.title}}</b></center>
        </div>
        <br>
        <div class="center">
          <center><img :src="product.image" class="img-fluid"></center>
        </div>
        <br>
        <div class="center">
          <center><a :href="product.url"><button class="btn btn-light">Ir até o Mercado Livre</button></a></center>
        </div>
      </div>
    </center>
    <br><br>
    <div id="form">
      <form>
        <div class="input-group">
            <input type="text" v-model="newProductUrl" class="form-control" placeholder="Link do produto"/>
            <input type="text" v-model="newProductImage" class="form-control" placeholder="Link Imagem"/>
            <input type="text" v-model="newProductTitle" class="form-control" placeholder="Título"/>
            <div class="input-group-append">
              <button type="submit" @click.prevent="addProduct()" class="btn btn-dark">+</button>
            </div>
        </div>
      </form>
    </div>
    <br><br>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import { productsCollection } from '../firebase';

export default {
  name: 'Store',
  data() {
    return {
      newProductUrl: '',
      newProductTitle: '',
      newProductImage: '',
      products: [],
      ref: productsCollection,
    };
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.products = [];
      querySnapshot.forEach((doc) => {
        this.products.push({
          id: doc.data().id,
          title: doc.data().title,
          url: doc.data().url,
          image: doc.data().image,
          createdAt: doc.data().createdAt
        });
      });
    });
  },
  methods: {
    addProduct() {
      productsCollection.add({
        url: this.newProductUrl,
        id: this.products.length,
        title: this.newProductTitle,
        image: this.newProductImage,
        createdAt: new Date()
      });
    },
  },
};
</script>

<style scoped>
  img {
    object-fit: cover;
    max-width: 200px;
    max-height: 200px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #FFF;
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  }
</style>
