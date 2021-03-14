import Vue from 'vue'
import Router from 'vue-router'
import MarkdownPanel from '@/components/MarkdownPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarkdownPanel',
      component: MarkdownPanel
    }
  ]
})
