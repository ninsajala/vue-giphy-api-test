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
  width: 300px;
}

.oneGif {
  height: 300px;
  margin: 10px;
}
</style>
