<template>
  <div id="example-1">
    
    <b-card-group deck>
      <b-card
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
//import HelloWorld from "/src/components/HelloWorld";

export default {
  //Components
   components: {
    },
  //Data
  data() {
    return {
      counter: 1,
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ]
    };
  },
  //Methods
  methods: {
    back() {
      this.$router.push("/");
    }
  },
  //Mounted
  mounted() {},
  //Computed
  computed: {},
  //Watch
  watch: {}
  
};
</script>

<style>
</style>
