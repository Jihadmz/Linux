<template>
  <div class="home">
    <img alt="Programming pic" src="../assets/images/programming_pic.jpg" />
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import "../assets/styles/_home.sass";
export default {
  name: "Home",
  components: {
    Welcome,
  },
};
</script>
