<template>
  <div id="app">
    <header>
      <Navigation />
    </header>

    <main class="container">
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-white py-3">
      <Navigation />
    </footer>
  </div>
</template>

<script>
import Navigation from './components/AppNavigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
body {
background-color:red;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header, footer {
  text-align: center;
}

main {
  margin-top: 60px; 
  padding-bottom: 60px; 
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}

main {
  padding-top: 50px; 
  padding-bottom: 50px; 
}
</style>
