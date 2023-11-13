<template>
       <!-- <div
          class="title-sec relative  text-xl  left-0 w-full text-center flex flex-col justify-center z-[1000000]"
          :style="{ top: `${titleTop}px`, width: titleWidth }"
        >
        <div class='flex  items-start justify-between'>
          <div class=" font-medium text-6xl w-3/4 justify-start text-left leading-[1.1] tracking-tight  text-[#ffffff]">
            <div class=" flex flex-col mobile-flex text-3xl ">
              <a class=" w-1/5 p-0" href="./">
                <img
                      src="group.png"
                      width="100%"
                      height="100%"
                      alt="logo"
                    /> 
              </a>
            <div class=' text-xl pl-10 w-1/4 font-light text-center'>
              <p>Rewilding Encounters of Langthorne Park</p>
            </div>
                          
            </div>
          </div>
          <div class='flex'>
          <a class="overlay-button" href="../about">
              <div class="aboutbtn z-[2000]">About
              </div>
            </a>
          <a class="overlay-button" href="../team">
              <div class="aboutbtn z-[2000]">Collaborators</div>
          </a>
          <a class="overlay-button" href="../backstory">
              <div class="aboutbtn z-[2000]">Backstory</div>
          </a>
        </div>
        </div> -->
          

<!-- flex-wrap -->

        <!-- <div class="title-sec bg-[#f46aa8] overflow-hidden relative text-xl left-0 w-full text-center z-[100000000000000000] text-[#ffffff]">
    <div class="flex items-center flex-wrap md:flex-col justify-between ">
      <div class="w-full md:w-3/4 flex items-center">
        <a class="w-1/6 p-0" href="./">
          <img src="group.png" width="100%" height="auto" alt="logo" />
        </a>
        <div class="text-xl w-2/4 font-light text-center md:text-left md:pl-10">
          <p>Rewilding Encounters of Langthorne Park</p>
        </div>
      </div>
      <div class="w-full md:w-2/4 mt-4 md:mt-0 flex justify-between">
        <a class="overlay-button aboutbtn" href="../about">About</a>
        <a class="overlay-button aboutbtn" href="../team">Collaborators</a>
        <a class="overlay-button aboutbtn" href="../backstory">Backstory</a>
      </div>
    </div>
  </div> -->



        <!-- </div> -->

        
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


<style scoped>

@media (max-width: 760px) {
  .title-sec {
    padding: 1rem;
  }

  .mobile-flex {
    display: block;
  }

  .title-sec > .flex > div {
    width: 100%;
  }

  .title-sec > .flex > div:nth-child(2) {
    margin-top: 1rem;
  }
  
  .title-sec > .flex > div:first-child > a {
    width: 40%; /* Adjust as needed */
  }

  .title-sec > .flex > div:first-child > img {
    max-width: 100%;
    height: auto;
  }

  .overlay-button {
    font-size: 1rem;
    padding: 0.25rem 0.5rem; /* Adjust as needed */
    margin: 0.25rem;
  }
}

.text-stroke{
    -webkit-text-stroke: 2px #aa213f; /* Adjust the color and size as needed */
   
}


      footer {
        position: fixed;
        bottom: 0;
        width: 100vw;
        z-index: 2;
              /* background-color: #333; Background color */
              color: white; /* Text color */
              padding: 20px; /* Padding around the content */
              text-align: center; /* Center align the content */
          }
  
          /* Style for the image container */
          .image-container {
              display: flex;
              justify-content: space-around;
              margin-top: 20px;
          }
  
          /* Style for each image */
          .image-container img {
              width: 20vw; /* Adjust the width as needed */
              height: auto; /* Maintain aspect ratio */
              margin: 10px; /* Margin between images */
          }



.svg-container{
padding-top: 3.5rem !important;
padding-bottom: 3.5rem !important;
z-index: 0 !important;
}

@media (max-width: 760px) {
   .mobile-flex{
    display: block;
   }

   .mobile-text{
    font-size: 1rem;
    line-height: normal;
   }
}

hr {
    display: inline-block;
    height: 1px;
    border: 0px;
    border-top: 1px solid white;
    margin: 20px;
    width: 50px;
}

.title-sec{
  padding: 1rem;
    position: relative;
    /* position: absolute; */
    top: 1px;
    height: fit-content;
    left: 0;
    width: 100%;
    text-align: center;
    transition: top 0.5s, width 0.5s;
}

.aboutbtn{
  width: auto;
  /* height: 60px; */
  /* color: #fa7dad; */
  color: white;
  /* background-color: #edf3ff;
    background-color: #40cef6; */
  padding: 0px 15px 0px 15px;
  border: 2px solid white;
  border-radius: 45px;
  line-height: 50px;
  margin: 0px 5px;
  font-weight: 500;
  /* z-index: 1; */
  /* overflow: hidden; */
}

.borderheadtext{
  padding: 0px 250px 0px 20px;
  font-weight: 500;
}
.socialtbtn{
    width: auto;
  height: 80px;
  color: #fa7dad;
  background-color: #edf3ff;
    background-color: #ff00a0;
  padding: 0px 10px 0px 10px;
  border: 1px solid #ff00a0;
  border-radius: 45px;
    margin: 0px 5px;
    font-weight: 500;
  line-height: 80px;
}

.borderheader {
  width: auto;
  height: 80px;
  color: #2809e3;
  background-color: #edf3ff;
  /* padding: 0px 250px 0px 20px; */
  border: 1px solid #2809e3;
  border-radius: 45px;
  line-height: 80px;
  margin: 0px 5px;
  z-index: 1;
  /* overflow: hidden; */
}

.titleborderheader{
  width: auto;
  height: 80px;
  color: #808080;
  background-color: #F4F4F4;
  padding: 0px 20px 0px 20px;
  border: 1px solid #808080;
  border-radius: 10px;
  line-height: 80px;
  font-weight: 500;
  /* margin: 0px 5px; */
  z-index: 1;
  /* overflow: hidden; */
}

/* .interactive-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 1s;
} */

.square-grid {
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
  /* border: 1px solid black;  */
}

/* .square-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, transparent 5px, rgba(0, 0, 0, 0.2) 5px, rgba(0, 0, 0, 0.2) 50px, transparent 50px),
    linear-gradient(to bottom, transparent 5px, rgba(0, 0, 0, 0.2) 5px, rgba(0, 0, 0, 0.2) 50px, transparent 50px);
  background-size: 55px 55px; 
} */

svg {
  /* width: 50vw !important;
  height: 50vh !important; */
  /* scale: 1.2 !important; */
  z-index: 2;
}

/* .image-content:hover {
  filter: brightness(0.7); 
  transition: filter 0.3s ease; 
}

.image-content {
  transition: filter 0.3s ease; 
} */

.path-clicked {
  fill: white !important;
  /* filter: grayscale(0%) !important; */
  /* transition: fill 0.3s ease;  */
  /* opacity: .5; */
  /* opacity: 1 !important; */
}

/* #Layer_1-2 #path3:hover,
#Layer_1-2 #path4:hover,
#Layer_1-2 #path5:hover {
  fill: rgba(118, 114, 110, 0.51); 
  transition: fill 0.3s ease; 
} */


 /* #tooltip {
  display: none;
    position: absolute;
    background-color: #5f6f95;
    color: white !important;
    padding: 4px;
    border-radius: 5px;
    z-index: 10000000;
} */

.text-outline {
    /* -webkit-text-stroke: 1px #40cef6;  */
    /* text-stroke: 1px #40cef6; */
    /* text-shadow: 0px 0px 1px #40cef6, 2px 1px 1px #40cef6, 1px 1px 0 #40cef6, 1px 1px 0 #40cef6;    color: #fff; Set the fill color of the text */
  }



.bloom{
  /* fill: white; */
    /* transition: fill 3s ease; */
    opacity: 0.2;
}

.bloom:hover {
    opacity: 1;
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  /* transition: fill 3s ease; */
}

.chest{
   /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    /* filter: grayscale(100%); */
    opacity: 0.2;
}

.chest:hover {
    opacity: 1;
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}

.thorned{
     /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    /* filter: grayscale(100%); */
    opacity: 0.2;
}

.thorned:hover {
  opacity: 1;
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}

.forest{
     /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    /* filter: grayscale(100%); */
    opacity: 0.2;
}

.forest:hover {
    opacity: 1;
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}

.pickle{
    /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    /* filter: grayscale(100%); */
    opacity: 0.2;
}

.pickle:hover {
  opacity: 1;
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}

/* svg:hover + #tooltip {
  display: block  !important;
} */

.cls-3{

    /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    filter: grayscale(100%);
}

.cls-3:hover {
   filter: grayscale(0%);
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}

.cls-4{

    /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    filter: grayscale(100%);
}

.cls-4:hover {
   filter: grayscale(0%);
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}

.cls-5{

    /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    filter: grayscale(100%);
}

.cls-5:hover {
   filter: grayscale(0%);
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}
.cls-6{

    /* fill: yellow; */
    /* z-index: 100000; */
    transition: fill 3s ease;
    filter: grayscale(100%);
}

.cls-6:hover {
   filter: grayscale(0%);
  /* fill: rgba(118, 114, 110, 0.51);  */
  /* fill: red !important; */
  transition: fill 3s ease;
}



#Layer_1-2 #path2:hover {
  /* fill: rgba(118, 114, 110, 0.51);  */
  fill: rgba(118, 114, 110, 0.51);
  transition: fill 0.3s ease;
}

#Layer_1-2 #path3:hover {
  /* fill: rgba(118, 114, 110, 0.51);  */
  fill: hotpink;
  transition: fill 0.3s ease;
}

#Layer_1-2 #path4:hover {
  /* fill: rgba(118, 114, 110, 0.51);  */
  fill: lightblue;
  transition: fill 0.3s ease;
}

#Layer_1-2 #path5:hover {
  /* fill: rgba(118, 114, 110, 0.51);  */
  fill: green;
  transition: fill 0.3s ease;
}

@keyframes floatUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Adjust the floating height */
  }
  100% {
    transform: translateY(0);
  }
}

.cloud-animation {
  z-index: 0 !important;
  animation: floatUpDown 4s ease-in-out infinite; /* Adjust duration and timing as needed */
}

.overlay-button {
  /* Your button styles here */
  /* padding: 10px; */
  /* padding-right: 2.75rem; */
  text-gray: 100;
  /* background-color: transparent;
  border: none; */
  cursor: pointer !important;
  z-index: 300000 !important; /* Ensure it's above other elements */
}

.overlay {
    /* position: fixed;
    bottom: 0;
    left: 0; */
    position: absolute;
    top: 20vh;
    left: 5vw;
    /* width: -moz-fit-content; */
    width: 30vw;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 10px;
    padding: 15px;
    line-height: 1;
    letter-spacing: -.025em;
    font-size: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    transform: translateY(0);
    transition: margin .3s cubic-bezier(.87,0,.13,1);
    /* background-color: rgba(255, 255, 255, 0.5); */
    -webkit-backdrop-filter: blur(20px);
    /* backdrop-filter: blur(10px); */
    backdrop-filter: blur(20px);

    /* transition: -webkit-backdrop-filter 1.3s ease;
    transition: backdrop-filter 1.3s ease;
    transition: backdrop-filter 1.3s ease, -webkit-backdrop-filter 1.3s ease; */
    z-index: 200;
}

.overlay:hover{
  margin-top: 20.5px;
}

.overlay-content {
  /* Styles for the overlay content */
  width: 50vw;
  /* background-color: white; */
  padding: 20px;
  z-index: 200; /* Above the button */
  /* border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
}
</style>

  