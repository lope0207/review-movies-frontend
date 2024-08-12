<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-menu">
        <li class="navbar-item"><a href="#home">Home</a></li>
      </ul>
    </nav>

    <main class="container">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 MyMovieSite. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

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

.navbar-item a {
  color: #e70000;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar-item a:hover {
  background-color: #e70000; 
  color: #fff; 
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
