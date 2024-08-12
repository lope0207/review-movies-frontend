import { createRouter, createWebHistory } from 'vue-router';
import ReviewList from '../components/ReviewList.vue';
import ReviewDetail from '../components/ReviewDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ReviewList
  },
  {
    path: '/review/:id',
    name: 'ReviewDetail',
    component: ReviewDetail,
    props: route => ({ id: Number(route.params.id) }) 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
