<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-menu">
        <!-- Usar <router-link> para manejar la navegación en Vue -->
        <li class="navbar-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
      </ul>
    </nav>

    <main class="container">
      <!-- Contenido renderizado por Vue Router -->
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 MyMovieSite. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Navigation bar styling */
.navbar {
  background-color: #000;
  padding: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.navbar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.navbar-item {
  margin: 0 20px;
}

.nav-link {
  color: #fff;
  background-color: #e50914; /* Color rojo brillante */
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5em; /* Tamaño más grande */
  padding: 15px 30px; /* Padding aumentado para tamaño más grande */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #c81010; /* Color rojo oscuro en hover */
  color: #fff;
}

/* Especificar estilos para los estados activos de los enlaces */
.router-link-active.nav-link,
.router-link-exact-active.nav-link {
  background-color: #c81010; /* Color rojo oscuro para el enlace activo */
  color: #fff; /* Asegúrate de que el texto sea blanco en el estado activo */
}

/* Footer styling */
.footer {
  background-color: #000;
  color: #fff;
  padding: 15px 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content p {
  margin: 0;
  font-size: 0.9em;
}
</style>
