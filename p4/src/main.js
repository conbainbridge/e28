import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import HomePage from "./components/pages/HomePage.vue";
import NoteLog from "./components/pages/NoteLog.vue";
import ToDoLog from "./components/pages/ToDoLog.vue";
import Vuelidate from 'vuelidate';

/* eslint-disable no-unused-vars */
const _ = require('lodash');
/* eslint-enable no-unused-vars */

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/notes', name: "add note", component: NoteLog },
  { path: '/todo', name: "add todo", component: ToDoLog }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
