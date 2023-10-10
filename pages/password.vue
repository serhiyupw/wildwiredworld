<template>
    <div>
      <h1>Enter Password</h1>
      <input v-model="password" type="password" />
      <button @click="checkPassword">Submit</button>
    </div>
  </template>
  
  <script>
  import { setAuthentication } from '~/auth.js';
  
  export default {
    data() {
      return {
        password: '',
      };
    },
    methods: {
      checkPassword() {
        // You can perform your password validation here
        // For simplicity, let's assume 'password123' is the correct password
        if (this.password === 'password123') {
          // Password is correct; set authentication to true
          setAuthentication(true);
          
          // Redirect to a protected page
        //   this.$router.push('/protected-page');
        this.$router.push('../world1');
        } else {
              // Password is incorrect, show an error message
        alert("Incorrect password. Please try again.");
        }
      },
    },
  };
  </script>
  