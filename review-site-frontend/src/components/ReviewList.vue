<template>
  <div class="review-list">
    <div class="search-container">
      <SearchBar @search="handleSearch" />
    </div>
    <ul class="review-grid">
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
      reviews: [],
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
  padding: 20px;
}

.search-container {
  margin-bottom: 20px;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.review-item {
  background-color: #000;
  color: #fff;
  border: 1px solid #e70000;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.review-item:hover {
  transform: scale(1.05);
}

.review-item h2 {
  color: #e70000;
  margin-bottom: 10px;
}

.review-item p {
  color: #ccc;
}

.review-item a {
  text-decoration: none;
  color: inherit;
}

.review-item a:hover {
  text-decoration: underline;
}
</style>
