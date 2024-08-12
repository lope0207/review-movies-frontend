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
/* Estilos personalizados para el enlace Home */
.home-link {
  color: #fff; /* Texto blanco */
  background-color: #e50914; /* Fondo rojo */
  padding: 10px 20px; /* Relleno del botón */
  border-radius: 5px; /* Bordes redondeados */
  text-decoration: none; /* Sin subrayado */
}

.home-link:hover {
  background-color: #c81010; /* Rojo oscuro en hover */
}
</style>
