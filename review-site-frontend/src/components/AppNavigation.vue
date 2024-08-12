<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link class="nav-link home-link" to="/">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>

<style scoped>
.home-link {
  color: #fff;
  background-color: #e50914; 
  padding: 10px 20px; 
  border-radius: 5px; 
  text-decoration: none; 
}

.home-link:hover {
  background-color: #c81010; 
}
</style>
