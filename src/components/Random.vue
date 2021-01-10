<template>
  <h1>Random</h1>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Random',
  data() {
    return {
      randomGifs: [],
      apiKey: 'OyIPKJHTAxK7m6BsXUMpIyfr1xHgwlmj',
    };
  },
  mounted() {
    this.getRandom();
  },
  methods: {
    getRandom() {
      axios
        .get(
          `http://api.giphy.com/v1/gifs/random&api_key=${this.apiKey}&limit=12`
        )
        .then((response) => {
          this.giphys = response.data.data;
        });
    },
  },
};
</script>

<style></style>
