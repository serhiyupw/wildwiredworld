<template>
  <div class="background-video">
    <video autoplay muted loop playsinline class="video">
      <source src="home.mp4" type="video/mp4">
      <!-- You can include other video sources for different formats -->
    </video>
  </div>
</template>



<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it below other content */
  overflow: hidden; /* Ensure the video remains within the viewport */
}

.video {
  object-fit: cover; /* Cover the entire container */
  width: 100%;
  height: 100%;
  filter: brightness(50%);
}
</style>
