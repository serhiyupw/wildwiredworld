<!-- pages/protected-page.vue -->
<template>
    <div>
      <h1>Welcome to the Protected Page</h1>
      <!-- Your protected content goes here -->
    </div>
  </template>
  
  <script>
import { checkAuthentication } from '~/auth.js';

export default {
  async asyncData({ redirect }) {
    // Check if the user is authenticated
    if (!checkAuthentication()) {
      redirect('/login'); // Redirect to login page if not authenticated
    }
  },
};
  </script>
  