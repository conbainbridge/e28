import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from "./components/pages/HomePage.vue";
import NoteLog from "./components/pages/NoteLog.vue";
import ToDoLog from "./components/pages/ToDoLog.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/notes', name: "notes", component: NoteLog },
  { path: '/todo', name: "todo", component: ToDoLog }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
