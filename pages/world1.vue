<template>
<div>
  <iframe
      src="/webgl/world/index.html"
      width="800"
      height="600"
      frameborder="0"
    ></iframe>  <!-- <div id="map"></div> -->
</div>
</template>

<script>
export default {
  name: 'world1',
  data() {
    return {
      mapPath: '/world-map.svg',
    };
  },
  methods: {
    handleMapClick(event) {
      // Handle click event on the map here
    },
  },
};
</script>

<style scoped>
      #unity-container{
        height: 100vh;
        width: 100vw;
      }

      iframe{
        height: 71vh;
    object-fit: cover;
    display: flex;
    width: 92vw;
    scale: 1.55;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 15vh;
    left: 5vw;
      }

</style>
