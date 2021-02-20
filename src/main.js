import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  // register all the routes for the app
  // which vue component should be registered for which url
  // when registering routes there is no need to create local / global components
  routes: [
    // setting the homepage to teamsList by redirecting it 
    { path: '/', redirect: '/teams' },
    // each js object is responsible for a path and its configuration
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    // adding a dynamic id, route parameter (:teamId) ie teams/t1
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    // if a user types in an incorrect url path lead them to this component
    // nb must be last in the order
    { path: '/:notFound(.*)', component: NotFound }
  ],
  // allows you to override the router-link-active class
  linkActiveClass: 'active',
  // how to manage the routing history for the app
  // ie if the user clicks back
  history: createWebHistory(),
});

const app = createApp(App)

// app.use() allows us to use a 3rd party package
app.use(router)

app.mount('#app');
