import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/keypad/home',
    name: 'Home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to ensure user is logged in before accessing any page except Login
router.beforeEach((to, from, next) => {
  // Check if user is logged in by checking localStorage for telegram_id and telegram_username
  const isLoggedIn = localStorage.getItem("telegram_id") && localStorage.getItem("telegram_username");

  // If the user is not logged in and tries to access the home page or other pages
  if (!isLoggedIn && to.name !== 'Login') {
    // Redirect to the Login page
    next({ name: 'Login' });
  } else {
    // Allow navigation
    next();
  }
});

export default router;
