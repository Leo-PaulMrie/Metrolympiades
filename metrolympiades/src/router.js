import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from './pages/RegisterPage.vue';
import CreateMatchPage from './pages/CreateMatchPage.vue';
 

const routes = [
    {
        path: "/",
        name: "register",
        component: RegistrationPage,
    },
    {
        path: "/match/create-match",
        name: "createMatch",
        component: CreateMatchPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
