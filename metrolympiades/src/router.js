import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import MyMatches from './pages/MyMatches.vue';
import Leaderboard from './pages/Leaderboard.vue';
import CreateMatchPage from './pages/CreateMatchPage.vue';
import MyTeam from './pages/MyTeam.vue';

const routes = [
  {
    path: "/",
    redirect: "/leaderboard"
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage
  },
  {
    path: "/games",
    name: "games",
    component: MyMatches,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:"/leaderboard",
    name:"leaderboard",
    component: Leaderboard
  },
  {
      path: "/game",
      name: "createMatch",
      component: CreateMatchPage,
      meta: {
        requiresAuth: true
      }
  },
  {
    path:"/team",
    name:"myTeam",
    component: MyTeam,
    meta: {
      requiresAuth: true
    }
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;