<template>
  <div>
    <p>Hello Vue in CodeSandbox!</p>

    <ButtonClicker/>
    <p>
    {{ count }}
    </p>
    <Template/>
    <SayWhat/>
    <blog-post></blog-post>
  </div>
</template>

<script>
import ButtonClicker from "/src/components/ButtonClicker.vue";
import Template from "/src/components/template.vue";
import SayWhat from "/src/components/SayWhat.vue";
import BlogPost from "/src/components/BlogPost.vue";

export default {
  components: {
    ButtonClicker,
    Template,
    SayWhat, BlogPost
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
