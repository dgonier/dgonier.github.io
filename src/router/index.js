import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)



const routes = [
  {
    path: "/",
    name: "Devin Gonier",
    meta: {
      title: 'Devin Gonier'
    },
    component: () =>
      import("../views/HomeDark.vue"),
  },
  {
    path: "/home-light",
    name: "HomeLight",
    meta: {
      title: 'Home Light'
    },
    component: () =>
      import("../views/HomeLight.vue"),
  },
  {
    path: "/home-dark",
    name: "HomeDark",
    meta: {
      title: 'Home Dark'
    },
    component: () =>
      import("../views/HomeDark.vue"),
  },

  {
    path: '*',
    name: NotFound,
    meta: {
      title: '404'
    },
    component: ()=> import("../views/NotFound.vue")
  }
];
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})


router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' | Tokyo - Personal Portfolio VuejS template';
  }
});


export default router;