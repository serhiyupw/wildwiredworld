<template>
  <div>
    <svg width="500" height="500" @click="handleMapClick">
        <image :xlink:href="mapPath" width="100%" height="100%" />
    </svg>
    <div>header</div>
    <!-- <div id="map"></div> -->
  </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage',
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
  