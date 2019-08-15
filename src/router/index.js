import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Grzx from '@/components/Grzx'
import Product from '@/components/Product'
import Car from '@/components/Car'
import Car2 from '@/components/Car2'
import Car3 from '@/components/Car3'
import Address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
      {
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Grzx',
          name: 'Grzx',
          component: Grzx
      },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
      {
          path: '/Car',
          name: 'Car',
          component: Car
      },
      {
          path: '/Car2',
          name: 'Car2',
          component: Car2
      },
      {
          path: '/Car3',
          name: 'Car3',
          component: Car3
      },
      {
          path: '/Address',
          name: 'Address',
          component: Address
      }
  ]
})
