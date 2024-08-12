<template>
  <div v-if="review" class="review-detail">
    <h1 class="review-title">{{ review.title }}</h1>
    <img v-if="review.image" :src="review.image" alt="Review Image" class="review-image" />
    <p class="review-content" v-html="review.content"></p>
    <p class="review-author"><em>By {{ review.author }}</em></p>
    <p class="review-date"><small>Published on {{ review.date }}</small></p>
  </div>
  <p v-else class="loading">Loading...</p>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      review: null
    };
  },
  async created() {
    const reviewId = this.$route.params.id;
    await this.fetchReview(reviewId);
  },
  methods: {
    async fetchReview(id) {
      try {
        const response = await axios.get(`/reviews/${id}`);
        const data = response.data.data;

        this.review = {
          title: data.attributes.Title,
          content: this.parseContent(data.attributes.Content),
          author: data.attributes.Author,
          date: data.attributes.Date,
          image: data.attributes.Image ? data.attributes.Image.url : null
        };
      } catch (error) {
        console.error('Error fetching review:', error);
      }
    },
    parseContent(content) {
      return content.map(paragraph => paragraph.children.map(child => child.text).join('')).join('<br>');
    }
  }
};
</script>

<style scoped>
.review-detail {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.review-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #e50914;
  text-align: center;
}

.review-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #bdc3c7;
}

.review-author,
.review-date {
  font-size: 1rem;
  color: #95a5a6;
  text-align: center;
  margin-top: 10px;
}

.review-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #95a5a6;
}
</style>
