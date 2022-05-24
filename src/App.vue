<template>
  <h1 class="header">Sicopata Pedidos</h1>
  <div class="navbar-start">
    <nav class="navbar">
      <router-link class="navbar-item" to="/register">Register</router-link>
      <router-link class="navbar-item" to="/">Login</router-link>
      <router-link class="navbar-item" to="/crud">Categories</router-link>
      <router-link class="navbar-item" to="/products">Products</router-link>
    </nav>
  </div>
  <router-view />
</template>

<script>

</script>

<style>
#app {
  font-family: 'Roboto Flex';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
}

.header {
  background: rgb(48, 107, 209);
  color: #fff;
  padding: 8px;
  text-align: left;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


nav a.router-link-exact-active {
  color: rgb(98, 190, 61);
}
</style>
