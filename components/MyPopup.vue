<template>
    <div class="popup" style="background-color: #e2f3cb;">
      <div class="popup-content">
        <!-- Your pop-up content goes here -->
        <h1 style="color: #ff9ff3; font-size: 24px;">Well done! You unlocked all the worlds</h1>
        <button @click="closePopup" style="background-color: #badc58; color: white;">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 100000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  
  .popup-content {
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
  </style>
  