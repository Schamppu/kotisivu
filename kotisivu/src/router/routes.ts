import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StartPage.vue') },
      { path: 'work', component: () => import('pages/MyWork.vue') },
      { path: 'thoughts', component: () => import('pages/Thoughts.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      { path: 'login', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
