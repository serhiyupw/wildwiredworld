 <!-- pages/password.vue -->
<template>
    <div>
      <h1>Enter Password</h1>
      <input v-model="password" type="password" />
      <button @click="checkPassword">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: "",
      };
    },
    methods: {
  checkPassword() {
    console.log("Checking password...");
    if (this.password === "your_password") {
      console.log("Correct password entered.");
      this.$router.push("/protected-page");
    } else {
      console.log("Incorrect password entered.");
      alert("Incorrect password. Please try again.");
    }
  },
},

  };
  </script>
  