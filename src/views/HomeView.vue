<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Login></Login>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Login,
  },
};
</script>

<style>
.header {
  font-size: 24px;
}

.all-categories {
  padding: 10px;
}

.all-content {
  height: 50px;
  width: 50%;
  margin: auto;
  border-radius: 10px;
  background-color: rgb(21, 107, 213);
  color: #fff;
}

.single-content {
  height: 50px;
  width: 50%;
  margin: auto;
  border-radius: 10px;
  background-color: rgb(21, 107, 213);
  color: #fff;
}
</style>