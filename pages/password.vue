<template>
  <div class=''>
    <!-- <div class="interactive-gradient "></div> -->
    <!-- <div class="square-grid opacity-20"></div> -->

    <div class="password-page ">
    <h1>Enter Password</h1>
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="checkPassword">Submit</button>
  </div>
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
  

  <style scoped>

.interactive-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 1s;
}

/* .square-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      transparent 1px,
      rgba(0, 0, 0, 0.2) 1px,
      rgba(0, 0, 0, 0.2) 14px,
      transparent 14px
    ),
    linear-gradient(
      to bottom,
      transparent 1px,
      rgba(0, 0, 0, 0.2) 1px,
      rgba(0, 0, 0, 0.2) 14px,
      transparent 14px
    );
  background-size: 15px 15px;
} */


/* Add your CSS styles here */
.password-page {
  text-align: center;
  margin: 100px auto;
  padding: 20px;
  max-width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index:1000000;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

button:hover {
  background-color: green;
}
</style>



