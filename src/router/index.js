import AccessView from '@/views/AccessView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ManagmentView from '@/views/ManagmentView.vue'
import PresentationView from '@/views/PresentationView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import StudiesView from '@/views/StudiesView.vue'
import ContactView from '@/views/ContactView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAccessStore } from '@/stores/accessStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: PresentationView },
    { path: '/studies', component: StudiesView },
    { path: '/experience', component: ExperienceView },
    { path: '/projects', component: ProjectsView },
    { path: '/contact', component: ContactView },
    { path: '/access', component: AccessView },
    { path: '/management', component: ManagmentView, meta: { requiresAdmin: true } },
  ],
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdmin) {
    const accessStore = useAccessStore()
    if (accessStore.admin) {
      next() // permitimos el acceso
    } else {
      next('/access') // redirigimos al login
    }
  } else {
    next()
  }
})

export default router
