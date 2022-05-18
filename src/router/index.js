import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
  },
  // About
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue'),
  },
  // Work
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work/index.vue'),
  },
  // Reviews
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../views/Reviews/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
