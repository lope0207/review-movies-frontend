<template>
  <div class="review-list">
    <div class="search-container">
      <SearchBar @search="handleSearch" />
    </div>
    <ul>
      <li v-for="review in filteredReviews" :key="review.id" class="review-item">
        <router-link :to="{ name: 'ReviewDetail', params: { id: review.id } }">
          <h2>{{ review.attributes.Title || 'Untitled' }}</h2>
          <p v-if="review.attributes.Description && review.attributes.Description !== 'No description available'">
            {{ review.attributes.Description }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      reviews: [], // Reviews from the API
      searchQuery: ''
    };
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      try {
        const response = await axios.get('http://localhost:1337/api/reviews');
        this.reviews = response.data.data || [];
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
    }
  },
  computed: {
    filteredReviews() {
      const query = this.searchQuery ? this.searchQuery.toLowerCase() : '';
      return this.reviews.filter(review =>
        (review.attributes.Title || '').toLowerCase().includes(query)
      );
    }
  }
};
</script>

<style scoped>
.review-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.search-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px; /* Espacio debajo del SearchBar */
}

.search-container .search-bar {
  width: 100%; /* Ajusta al tamaño del contenedor */
  max-width: 600px; /* Tamaño máximo del SearchBar */
}

.review-item {
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.review-item h2 {
  color: #e50914; /* Rojo oscuro, relacionado con el cine */
  margin-bottom: 10px;
}

.review-item p {
  color: #ccc;
  text-align: left;
}

.review-item a {
  text-decoration: none;
  color: inherit;
}

.review-item a:hover {
  text-decoration: underline;
}

.review-item p {
  margin-top: 10px;
  font-size: 14px;
}
</style>
