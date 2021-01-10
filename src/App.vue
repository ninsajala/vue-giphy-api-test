<template>
  <h1>Giphy Searcher</h1>
  <div class="search">
    <input type="text" v-model="searchInput" @key-up.enter="getGiphys" />
    <button @click.prevent="getGiphys">Search</button>
  </div>
  <Search :searchInput="searchInput" />
  <Results v-if="giphys.length" :giphys="giphys" />
</template>

<script>
import Results from './components/Results';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Results,
  },
  data() {
    return {
      giphys: [],
      apiKey: 'OyIPKJHTAxK7m6BsXUMpIyfr1xHgwlmj',
      searchInput: 'cats',
    };
  },
  mounted() {
    this.getGiphys();
  },
  methods: {
    getGiphys() {
      axios
        .get(
          `http://api.giphy.com/v1/gifs/search?q=${this.searchInput}&api_key=${this.apiKey}&limit=12`
        )
        .then((response) => {
          this.giphys = response.data.data;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}
</style>
