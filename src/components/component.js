import Vue from 'vue';

// Pages
Vue.component('home-page', require('./Home').default);

// core component
Vue.component('page-header', require('./layouts/Header').default);
Vue.component('page-footer', require('./layouts/Footer').default);
Vue.component('right-sidebar', require('./layouts/RightSidebar').default);
Vue.component('menus', require('./layouts/Menus').default);
Vue.component('current-book', require('./widgets/CurrentBook').default);
Vue.component('notice', require('./widgets/Notice').default);
Vue.component('current-book-articles', require('./widgets/CurrentBookArticles').default);
Vue.component('book-info', require('./widgets/BookInfo').default);
Vue.component('most-read-article', require('./widgets/MostReadArticale').default);
Vue.component('latest-article', require('./widgets/LatestArticle').default);
Vue.component('category', require('./widgets/Category').default);

//
Vue.component('loader-component', require('./core/Loader').default);
Vue.component('breadcrumb', require('./core/Breadcrumb').default);

// theme
Vue.component('theme-one', require('../views/theme_01/Index').default)
Vue.component('theme-two', require('../views/theme_02/Index').default)
Vue.component('theme-three', require('../views/theme_03/Index').default)
Vue.component('theme-default', require('../views/default/Index').default)

// theme 02
Vue.component('theme-two-header', require('./layouts/theme_02/Header').default);
Vue.component('theme-two-footer', require('./layouts/theme_02/Footer').default);
Vue.component('theme-two-menu', require('./layouts/theme_02/Menus').default);
Vue.component('right-side-image-card', require('./widgets/RightSideImageCard').default);
Vue.component('no-image-card', require('./widgets/NoImageCard').default);
Vue.component('left-image-card', require('./widgets/LeftImageCard').default);
Vue.component('top-image-card', require('./widgets/TopImageCard').default);
