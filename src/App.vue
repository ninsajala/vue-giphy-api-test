<template>
  <header>
    <h1>Vue Giphy Genarator</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/random">Random</router-link>
    </nav>
  </header>

  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: rgb(158, 92, 179);
}
header {
  display: flex;
  background-color: black;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
}

h1 {
  font-size: 21px;
  margin: 0 10px;
}

nav {
  margin-left: 30px;
}

nav a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;
}
</style>
