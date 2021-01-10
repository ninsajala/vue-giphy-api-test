<template>
  <div class="gifwrapper">
    <div class="oneGif" v-for="gif in giphys" :key="gif.id">
      <img :src="gif.images.original.url" :alt="gif.title" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    giphys: Array,
  },
};
</script>

<style scoped>
.gifwrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.oneGif img {
  max-width: 300px;
  max-height: 300px;
  box-shadow: 2px 2px 10px black;
}

.oneGif {
  height: 300px;
  width: 300px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
}
</style>
