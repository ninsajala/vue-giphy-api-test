<template>
  <h2>Trending Today</h2>
  <Results v-if="giphys.length" :giphys="giphys" />
</template>

<script>
import Results from './Results';
import axios from 'axios';

export default {
  name: 'Trending',
  components: {
    Results,
  },
  data() {
    return {
      giphys: [],
      apiKey: 'OyIPKJHTAxK7m6BsXUMpIyfr1xHgwlmj',
    };
  },
  mounted() {
    this.getTrending();
  },
  methods: {
    getTrending() {
      axios
        .get(
          `http://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=12`
        )
        .then((response) => {
          this.giphys = response.data.data;
        });
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 30px;
}
</style>
