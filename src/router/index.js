import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultTheme from "../components/Home";
import ThemeOne from "../components/theme_01/Index";
import ThemeTwo from "../components/theme_02/Index";
import Contact from "../views/pages/Contact";
import Editor from "../views/pages/Editor";
import ArticleDetails from "../views/pages/ArticleDetails";
import CategoryWiseArticle from "../views/pages/CategoryWiseArticle";
import Category from "../views/pages/Category";
import Subjects from "../views/pages/Subjects";
import Question from "../views/pages/Question";
import Books from "../views/pages/Books";
import axios from "axios";


Vue.use(VueRouter)
let select_router;
const getTheme = () => {

    axios
        .get(`${process.env.VUE_APP_URL}/api/theme`)
        .then(res => {
            select_router = res.data.design_path;
        })
};
getTheme();

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: true,
        component: {
            render(c)
            {
                if (select_router == 'theme_01') {
                    return c(ThemeOne);
                } else if (select_router == 'theme_02') {
                    return c(ThemeTwo);
                }else{
                    return c(DefaultTheme);
                }
            }
        }
    },
    {
        path: '/page/contact',
        name: 'contact',
        component: Contact,
        meta: true,
    },
    {
        path: '/page/editor',
        name: 'editor',
        component: Editor,
        meta: true,
    },
    {
        path: '/article/details/:id',
        name: 'article-details',
        component: ArticleDetails,
        meta: true,
    },
    {
        path: '/category/:id',
        name: 'category-article',
        component: CategoryWiseArticle,
        meta: true,
    },
    {
        path: '/category-dd',
        name: 'categorwwy',
        component: Category,
        meta: true,
    },
    {
        path: '/subject',
        name: 'subject',
        component: Subjects,
        meta: true,
    },
    {
        path: '/qa',
        name: 'question',
        component: Question,
        meta: true,
    },
    {
        path: '/monthly_archive',
        name: 'books',
        component: Books,
        meta: true,
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
