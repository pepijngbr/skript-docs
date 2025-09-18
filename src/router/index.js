import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 150,
      }
    } else if (savedPosition) {
      return { ...savedPosition }
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/DocsView.vue'),
    },
    // Tutorials
    {
      path: '/tutorials',
      name: 'tutorials',
      component: () => import('../views/TutorialsView.vue'),
      redirect: { name: 'tutorials.api' },
    },
    // API Tutorials
    {
      path: '/tutorials/api',
      name: 'tutorials.api',
      component: () => import('../views/tutorials/api/GettingStarted.vue'),
    },
    {
      path: '/tutorials/api/functions',
      name: 'tutorials.api.functions',
      component: () => import('../views/tutorials/api/FunctionsView.vue'),
    },
    // Scripting Tutorials
    {
      path: '/tutorials/scripting',
      name: 'tutorials.scripting',
      component: () => import('../views/tutorials/scripting/GettingStarted.vue'),
    },
    {
      path: '/tutorials/scripting/text',
      name: 'tutorials.scripting.text',
      component: () => import('../views/tutorials/scripting/TextView.vue'),
    },
    {
      path: '/tutorials/scripting/conditionals',
      name: 'tutorials.scripting.conditionals',
      component: () => import('../views/tutorials/scripting/ConditionalsView.vue'),
    },
    {
      path: '/tutorials/scripting/loops',
      name: 'tutorials.scripting.loops',
      component: () => import('../views/tutorials/scripting/LoopsView.vue'),
    },
    {
      path: '/tutorials/scripting/commands',
      name: 'tutorials.scripting.commands',
      component: () => import('../views/tutorials/scripting/CommandsView.vue'),
    },
    {
      path: '/tutorials/scripting/functions',
      name: 'tutorials.scripting.functions',
      component: () => import('../views/tutorials/scripting/FunctionsView.vue'),
    },
    // Tools
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/ToolsView.vue'),
    },
  ],
})

export default router
