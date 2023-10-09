<!-- pages/protected-page.vue -->
<template>
    <div>
      <h1>Welcome to the Protected Page</h1>
      <!-- Your protected content goes here -->
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';

  export default {
  computed: {
    ...mapState('auth', ['isAuthenticated']), // Import the isAuthenticated state
  },
  beforeRouteEnter(to, from, next) {
    // Now, you can use this.isAuthenticated to check authentication status
    if (!this.isAuthenticated) {
      next('/login'); // Redirect to login page if not authenticated
    } else {
      next();
    }
  },
};
  </script>
  