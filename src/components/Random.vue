<template>
  <div class="randomGiphy" v-if="randomGif">
    <img :src="randomGif.images.original.url" :alt="randomGif.title" />
  </div>
  <button class="randomButton" @click="getRandom">Random</button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Random',
  data() {
    return {
      randomGif: null,
      apiKey: 'OyIPKJHTAxK7m6BsXUMpIyfr1xHgwlmj',
    };
  },
  mounted() {
    this.getRandom();
  },
  methods: {
    getRandom() {
      axios
        .get(`http://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}`)
        .then((response) => {
          this.randomGif = response.data.data;
          console.log(this.randomGif);
        });
    },
  },
};
</script>

<style>
.randomGiphy img {
  box-shadow: 2px 2px 10px black;
}

.randomButton {
  outline: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  margin: 10px;
  background: radial-gradient(
    circle,
    rgba(255, 0, 0, 1) 55%,
    rgba(255, 255, 255, 1) 100%
  );
  color: white;
  box-shadow: 2px 2px 5px black;
}

.randomButton:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
