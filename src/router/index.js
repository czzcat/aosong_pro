import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import login from '@/components/login'
import classMan from '@/components/classMan'
import teacherMan from '@/components/teacherMan'
import studyMan from '@/components/studyMan'
import taskMan from '@/components/taskMan'
import resources from '@/components/resources'
import database from '@/components/database'
import user from '@/components/user'
import mbx from '@/components/mbx'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/user',
      
      children:[
        {
          path: '/user',
         name: 'user',
         component: user,

        },
        {
          path: '/classMan',
          name: 'classMan',
          component: classMan
        },
        {
          path: '/teacherMan',
          name: 'teacherMan',
          component: teacherMan
        },
        {
          path: '/studyMan',
          name: 'studyMant',
          component: studyMan
        },
        {
          path: '/taskMan',
          name: 'taskMan',
          component: taskMan
        },
        {
          path: '/resources',
          name: 'resources',
          component: resources
        },
        {
          path: '/database',
          name: 'database',
          component: database
        },
        {
          path: '/mbx',
          name: 'mbx',
          component: mbx
        },
      ],
      

      
      
    },
   
    {
      path: '/login',
      name: 'login',
      component: login
    },
    
   
    
    
  ]
})
