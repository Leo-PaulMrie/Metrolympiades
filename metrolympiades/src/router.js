import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import MyMatches from './pages/MyMatches.vue';
import Leaderboard from './pages/Leaderboard.vue';
import CreateMatchPage from './pages/CreateMatchPage.vue';
import MyTeam from './pages/MyTeam.vue';

const routes = [
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
    path:"/",
    name:"leaderboard",
    component: Leaderboard
  },
  {
      path: "/match/create-match",
      name: "createMatch",
      component: CreateMatchPage,
  },
  {
    path:"/myTeam",
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
/*
const router = createRouter({
    routes,
    history: createWebHistory(),
});
*/

// La méthode beforeEach() est appelée avant chaque navigation.
// Elle prend comme argument une fonction callback qui reçoit trois arguments : to, from et next.
// to est l'objet de route vers lequel la navigation est en cours.
// from est l'objet de route à partir duquel la navigation est effectuée.
// next est une fonction qui doit être appelée pour continuer la navigation.
router.beforeEach((to, _, next) => {
  // Si la route nécessite une authentification, on vérifie si l'utilisateur est connecté.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (!user) {
      // Si l'utilisateur n'est pas connecté, on redirige vers la page de connexion.
      next({ name: 'login' });
    } else {
      // Sinon, on laisse l'utilisateur accéder à la route.
      next();
    }
  } else {
    next();
  }
});

export default router;

 
