<template>
  <div id="app">
    <img width="25%" src="./src/assets/logo.png">

    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "/src/components/HelloWorld.vue";

export default {
  name: "App",
  //Components
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
