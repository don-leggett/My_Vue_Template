<template>
  <div id="example-1">
    <div>
      <b-form-input type="text" :value="value" v-on="listeners"/>
    </div>
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
import HelloWorld from "/src/components/HelloWorld";

export default {
  //Components

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
    },
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  },
  //Mounted
  mounted() {
    movieApi
      .fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response;
        this.ratings = this.singleMovie.Ratings;
        this.ratings.forEach(function(element) {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0]);
          element.Value =
            element.Value <= 10 ? element.Value / 2 : element.Value / 20;
        });
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  //Computed
  computed: {},
  //Watch
  watch: {
    name(value) {
      this.fetchResult(value);
    }
  }
};
</script>

<style>
</style>
