// middleware/auth.js

import { checkAuthentication } from '~/auth.js';

export default function ({ route, redirect }) {
  const isAuthenticated = checkAuthentication();

  // Check if the route requires authentication
  if (route.matched.some((record) => record.meta.requiresAuth)) {
    // If the user is not authenticated, redirect to the password page
    if (!isAuthenticated) {
      return redirect('/password');
    }
  }
}
