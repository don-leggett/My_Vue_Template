<template>
  <div id="example-3">
    <b-button variant="info" v-on:click="greet('hi')">Greet</b-button>
    <b-button variant="success" v-on:click="say('what')">Say what</b-button>
  </div>
</template>
<script>
export default {
  methods: {
    greet(message) {
      alert("Hello " + this.name + "!");
      count++;
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