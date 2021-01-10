import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import Random from '../components/Random.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
