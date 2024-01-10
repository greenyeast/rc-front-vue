import Home from "@/pages/Main";
import Login from "@/pages/Login";
import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import News from "@/pages/News";
import Union from "@/pages/Union";
import Gallery from "@/pages/Gallery";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/main', component: Main},
    {path: '/gallery', component: Gallery},
    {path: '/news', component: News},
    {path: '/union', component: Union}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;