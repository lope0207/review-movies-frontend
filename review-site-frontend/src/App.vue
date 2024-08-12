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
/* Global styles */
body {
  margin: 0;
  padding: 0;
  background-color: #e9ecef;
  font-family: 'Arial', sans-serif;
}

/* Container styling */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Header styling */
header {
  background-color: #007bff; 
  color: #fff;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Footer styling */
footer {
  background-color: #343a40; 
  color: #fff;
  padding: 15px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
}

/* Main content styling */
main {
  padding-top: 70px;
  padding-bottom: 70px; 
  background-color: #ffffff; 
}
</style>
