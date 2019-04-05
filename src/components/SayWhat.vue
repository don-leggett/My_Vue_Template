<template>
  <div id="example-3">
     <input v-model="name">
    <b-button variant="info" v-on:click="greet(name)">Greet</b-button>
    <b-button variant="success" v-on:click="say('what')">Say what</b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    greet(name) {
      alert("Hello " + name + "!");
      //count++;
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function(message) {
      alert(message);
    }
  }
};
</script>
<style>
</style>