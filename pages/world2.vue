<template>
<div >
        <div class='flex absolute z-[100000000000000000] w-screen justify-end p-5'>
          <a class="overlay-button" href="home">
              <div class="aboutbtn z-[100000000000000000]">Back</div>
          </a>
        </div>

  <!-- <iframe
      src="/webgl/world2/index.html"
      width="800"
      height="600"
      frameborder="0"
    ></iframe>   -->

    <div class="fullscreen-container">
      <iframe  class="background-video"
      src="/webgl/world2/index.html"
      width="800"
      height="600"
      frameborder="0"
      ></iframe> 
    </div>
   

    <!-- <iframe height="167" frameborder="0" src="https://itch.io/embed/2318523" width="552"><a href="https://xen0on.itch.io/wilrwied">WilrWired by Xen0on</a></iframe>  -->
    <!-- <div id="map"></div> -->
</div>
</template>

<script>
export default {
  name: 'world2',
  // data() {
  //   return {
  //     mapPath: '/world-map.svg',
  //   };
  // },
  // methods: {
  //   handleMapClick(event) {
  //     // Handle click event on the map here
  //   },
  // },
};
</script>

<style scoped>

.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black; /* Optional: Set the background color to black or any other color you prefer */
  z-index: 9999; /* Adjust the z-index as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fullscreen-container iframe {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.fullscreen-container button {
  margin-top: 10px; /* Optional: Add some spacing between the iframe and the button */
}

.video {
  object-fit: cover; /* Cover the entire container */
  width: 100%;
  height: 100%;
  /* filter: brightness(50%); */
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
  overflow: hidden; 
}


.aboutbtn{
  width: auto;
  /* height: 60px; */
  /* color: #fa7dad; */
  color: white;
  /* background-color: #edf3ff; */
    /* background-color: #40cef6; */
  padding: 0px 15px 0px 15px;
  border: 2px solid white;
  border-radius: 45px;
  line-height: 50px;
  margin: 0px 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  /* z-index: 1; */
  /* overflow: hidden; */
}

.aboutbtn:hover{
  transition: background-color 0.3s ease;
  background-color: #ffffff7f;
}

      #unity-container{
        height: 100vh;
        width: 100vw;
      }

      iframe{
        height: 100vh;
        width: 100vw;
      }

      iframe{
        /* height: 71vh;
    object-fit: cover;
    display: flex;
    width: 92vw;
    scale: 1.55;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 15vh;
    left: 5vw; */
      }

</style>
