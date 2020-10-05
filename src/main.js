import Vue from 'vue'
import App from './App.vue'
//import Vue Router
import VueRouter from 'vue-router'

//implement VueRouter
Vue.use(VueRouter);

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

//import components
import PostsIndex from './components/posts/Index'
import PostCreate from './components/posts/Create'
import PostEdit from './components/posts/Edit'


Vue.config.productionTip = false

//membuat route
const router = new VueRouter({
  routes: [
    {
      path  : '/',
      name  : 'posts',
      component: PostsIndex
    },
    {
      path  : '/create',
      name  : 'create',
      component: PostCreate
    },
    {
      path  : 'edit/:id',
      name  : 'edit',
      component: PostEdit
    }
  ],
  mode: 'history'
})


new Vue({
  router, //daftarkan router
  render: h => h(App),
}).$mount('#app')
