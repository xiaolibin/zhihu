import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/pages/index.vue'
import xq from '../components/pages/xq.vue'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/index',
        component:index,
    
      },
      {
        path:'/xq/:id',
        component:xq
      },
      {
        path:"*",
        redirect:'/index'
      }
  ]
})
