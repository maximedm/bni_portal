import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import './style.css'
//import App from './App.vue'
import Dashboard from './pages/Dashboard.vue'

import Chapters from './pages/Chapters.vue'

//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Dashboard },
    { path: '/chapters', component: Chapters },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  //onst app = Vue.createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
    createApp({}).use(router).mount('#app')
/*   app.use(router)
  
  app.mount('#app') */

