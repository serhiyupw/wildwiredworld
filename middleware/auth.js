import { checkAuthentication } from '~/auth.js';

export default function ({ route, redirect }) {
  const isAuthenticated = checkAuthentication();

  if (route.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated && route.path !== '/password') {
      return redirect('/password');
    }
  }
}


// export default defineNuxtRouteMiddleware((to, from) => {
//   // isAuthenticated() is an example method verifying if a user is authenticated
//   if (isAuthenticated() === false) {
//     return navigateTo('/password')
//   }
// })
