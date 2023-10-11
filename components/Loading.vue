// components/Loading.vue

<template>
  <div class="loading">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff; /* Set your desired background color */
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #3498db; /* Set the spinner color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
