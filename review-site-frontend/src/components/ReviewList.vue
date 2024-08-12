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

<style scoped>
.review-list {
  margin-top: 20px;
  padding: 0 10px;
}

.search-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.search-container .search-bar {
  width: 100%;
  max-width: 600px; 
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px; 
  list-style: none;
  padding: 0;
  margin: 0;
}

.review-item {
  background-color: #000;
  color: #e50914; 
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.review-item:hover {
  transform: scale(1.02);
}

.review-item h2 {
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
