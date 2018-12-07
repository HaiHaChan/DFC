import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddPost from '@/components/Post/AddPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/create',
      name: 'AddPost',
      component: AddPost
    }
  ]
})
