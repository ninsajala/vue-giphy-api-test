<template>
  <div class="search">
    <input type="text" v-model="searchInput" @key-up.enter="getGiphys" />
    <button @click.prevent="getGiphys">Search</button>
  </div>

  <Results v-if="giphys.length" :giphys="giphys" />
</template>

<script>
import Results from './Results';
import axios from 'axios';

export default {
  name: 'Home',
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
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search input {
  border: none;
  outline: none;
  width: 300px;
  height: 20px;
  font-size: 20px;
  padding: 4px;
  margin: 1%;
  border-radius: 10px;
  box-shadow: 0px 2px 5px black;
}

.search button {
  border: none;
  outline: none;
  height: 30px;
  font-size: 18px;
  padding: 5px;
  margin: 0.5%;
  border-radius: 10px;
  background-color: rgb(28, 196, 187);
  box-shadow: 2px 2px 5px black;
}
</style>
