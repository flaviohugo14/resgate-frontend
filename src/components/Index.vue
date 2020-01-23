<template>
  <div class="container">
    <br><br><br>
    <div
      class="embed-responsive embed-responsive-16by9"
      v-for="video in videos"
      :key="video.id"
    >
      <iframe
        class="embed-responsive-item"
        :src="video.url"
        width="560"
        height="315"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allowFullScreen="true"
      >
      </iframe>
      <br>
    </div>
    <br><br>
    <div id="form">
      <form>
        <div class="input-group">
            <input type="text" v-model="newVideo" class="form-control" placeholder="Adicionar vídeo..."/>
            <div class="input-group-append">
              <button type="submit" @click.prevent="addVideo()" class="btn btn-dark">+</button>
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
import { videosCollection } from '../firebase';

export default {
  name: 'Index',
  data() {
    return {
      newVideo: '',
      videos: [],
      ref: videosCollection,
    };
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.videos = [];
      querySnapshot.forEach((doc) => {
        this.videos.push({
          id: doc.data().id,
          url: doc.data().url,
          createdAt: doc.data().createdAt
        });
      });
    });
  },
  methods: {
    addVideo() {
      videosCollection.add({
        url: this.newVideo,
        id: this.videos.length,
        createdAt: new Date()
      });
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
