import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ProductsPage from "./components/pages/ProductsPage.vue";
import HomePage from "./components/pages/HomePage.vue";
import CategoriesPage from "./components/pages/CategoriesPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/products', component: ProductsPage, name: 'products' },
  { path: '/product/:id', component: ProductPage, name: 'product', props: true },
  { path: '/categories', component: CategoriesPage, name: 'categories' }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')