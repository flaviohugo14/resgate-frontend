<template>
  <div class="container">
    <br><br><br>
    <div class="list-group">
      <a v-for="event in events" :key="event.id" href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ event.title }}</h5>
          <small>{{ event.date }}</small>
        </div>
        <p class="mb-1">
          {{ event.description }}
        </p>
      </a>
    </div>
    <br><br>
    <form>
      <div class="form-group">
        <label for="title">Título</label>
        <input v-model="newEventTitle" type="text" name="title" class="form-control" placeholder="Título">
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea v-model="newEventDescription" name="description" class="form-control" placeholder="Escreva aqui..." rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="date">Data de Criação</label>
        <input type="date" v-model="newEventDate" name="date" class="form-control" placeholder="Escreva aqui..." rows="3">
      </div>
      <button class="btn btn-dark" @click.prevent="addEvent()">Adicionar</button>
    </form>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import { eventsCollection } from '../firebase';

export default {
  name: 'Events',
  data() {
    return {
      newEventTitle: '',
      newEventDescription: '',
      newEventDate: '',
      events: [],
      ref: eventsCollection,
    };
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.events = [];
      querySnapshot.forEach((doc) => {
        this.events.push({
          id: doc.data().id,
          title: doc.data().title,
          date: doc.data().date,
          description: doc.data().description,
          createdAt: doc.data().createdAt
        });
      });
    });
  },
  methods: {
    addEvent() {
      eventsCollection.add({
        id: this.events.length,
        title: this.newEventTitle,
        description: this.newEventDescription,
        createdAt: new Date,
        date: this.newEventDate,
      });
    },
  },
};
</script>
