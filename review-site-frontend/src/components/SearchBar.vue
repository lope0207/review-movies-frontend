<template>
  <div class="search-bar">
    <input type="text" v-model="query" @input="search" placeholder="Search reviews..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    }
  }
};
</script>

<style scoped>
.search-bar input {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
