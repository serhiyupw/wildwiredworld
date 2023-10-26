<template>
<div>
  <div class='flex absolute z-[100000000000000000] w-screen justify-end p-5'>
          <a class="overlay-button" href="..">
              <div class="aboutbtn z-[100000000000000000]">Back</div>
          </a>
        </div>
  <!-- <iframe
      src="/webgl/world2/index.html"
      width="800"
      height="600"
      frameborder="0"
    ></iframe>   -->

    <iframe
      src="https://v6p9d9t4.ssl.hwcdn.net/html/8922946/Final_19.10_ChetGrove/index.html"
      width="800"
      height="600"
      frameborder="0"
    ></iframe> 

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
