<template>
  <!-- mt-5 border-[#ff00a0] border-4-->

  <div>
    <main class="h-screen  w-screen text-[#ffffff] bg-[#f46a7d] overflow-hidden  ">
      <div
        class="h-screen w-screen text-[#ffffff] overflow-scroll  "
        ref="background"
      >
        <div class="interactive-gradient "></div>
        <div class="square-grid opacity-20"></div>
        
     
        <!-- <img
          overflow-hidden
                class="cloud-animation p-0"
                src="siphonophore2.png"
                width="50%"
                height="50%"
                alt="Your Image Alt Text"
              /> -->
   
              <!-- page instructions text-[#aa213f] text-[#40cef6] -->
              <!-- <div class="z-[2] relative  p-0 md:p-10 flex flex-col h-screen text-sm  text-center justify-center items-center mt-auto mb-auto">
    <div class="mobile-text w-screen md:w-3/5 p-0"> pt-10 -->
      <div class='p-5  md:flex md:flex-col overflow-scroll h-screen w-screen  text-center justify-center items-center '>
       
        <!-- <div class='md:w-[60vw]'> -->
        <!-- <span class=" text-outline md:text-6xl text-2xl font-bold md:text-stroke">You are invited to visit</span>
        <h1 class="md:text-6xl text-2xl font-bold text-yellow-400 md:text-stroke">Long Thorn Valley</h1> -->
        <!-- <p class="leading-2   ">
            a place that exists in a <strong class="font-bold">parallel universe</strong> at the exact location of Langthorne Park. The flora and fauna of 
            <strong class="font-bold">Long Thorn Valley</strong> are suffering from memory loss caused by a terrible disaster known as 
            <strong class="font-bold">the Big Change</strong>.
        </p> -->
        <!-- <div class=" md:w-[60vw]  text-center justify-center items-center ">
        <p class=" p-5 pb-0 ">This is a mobile-friendly site-specific game with five environments.</p>
        <ol class="list-decimal p-0 md:p-10">
            <li>To play the game, look for passwords on the banners located around Langthorne Park.</li>
            <li>Select the environment on the map and enter the correlating password from the banner to begin your exploration. For example, to play the Chest Grove environment, click on this area on the map and enter the password: Fire.</li>
            <li>Find all five passwords around the park and play all five game environments to help fantastical creatures and piece the story together.</li>
        </ol>
        </div> -->
        <!-- </div> -->
    <!-- <br> -->
    <!-- <hr speechify-initial-font-family="Montserrat, sans-serif" speechify-initial-font-size="16px"> -->
  





    <div id="map" class="svg-container w-screen lg:p-20 md:p-20 sm:p-0 flex flex-col justify-center items-center">
          <!-- <div class='  w-screen flex justify-center'>
            <img
                      class="cloud-animation w-1/4 p-0"
                      src="title.png"
                      width="50%"
                      height="50%"
                      alt="Your Image Alt Text"
                    />
          </div> -->
          <span class=" pt-10 text-outline md:text-4xl text-xl font-bold md:text-stroke">You are invited to visit</span>
        <h1 class="md:text-4xl text-xl  font-bold text-yellow-400 md:text-stroke">Long Thorn Valley</h1>
        <p class="leading-2 text-sm  pt-5 ">
            a place that exists in a <strong class="font-bold">parallel universe</strong> at the exact location of Langthorne Park. The flora and fauna of 
            <strong class="font-bold">Long Thorn Valley</strong> are suffering from memory loss caused by a terrible disaster known as 
            <strong class="font-bold">the Big Change</strong>.
        </p>
        <ol class="list-decimal text-xs md:w-2/4 p-0 pb-10 pt-5">
            <li>To play the game, look for passwords on the banners located around Langthorne Park.</li>
            <li>Select the environment on the map and enter the correlating password from the banner to begin your exploration. For example, to play the Chest Grove environment, click on this area on the map and enter the password: Fire.</li>
            <li>Find all five passwords around the park and play all five game environments to help fantastical creatures and piece the story together.</li>
        </ol>

        <svg  class="cloud-animation svgin h-fit md:w-[40vw] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
          
          <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
              <path d="m-142-328h1418v1419h-1418z"/>
            </clipPath>
          </defs>

            <style>tspan{white-space:pre}.a{fill:#fd9cca;stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 21px;fill: #ffffff;font-weight: 500;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 21px;line-height: 24px;fill: #ffffff;font-weight: 500;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 24px;text-transform: uppercase;fill: #ffffff;font-weight: 500;font-family: "Poppins-Medium", "Poppins"}</style>
            
            <g clip-path="url(#cp1)">
              
              <!-- world one blooming nevel -->
              <a href="../password" @click="linkClicked = true" >
                  <path fill-rule="evenodd" :class="['a bloom', { 'path-clicked': linkClicked }]" class="a bloom" d="m1134.8 575.9l-22.3 5.6c-5.9 2.4-57.5-26.6-57.5-26.6-5.6-3.1-10.8-10.7-11.5-17.1l-18.9-162.3c-0.6-4.5-4.1-8-8.6-8.5-13.8-1.4-43.8-4.2-73.2-4.2-41.8 0-50.3 19.7-62.1 47q0 0 0 0c-17.6 40.4-27 94.3-70.8 116.2q0 0 0 0c-35 17.5-72.4-2.6-98.3-25.1-18.3-15.8-32.6-57.5-53-60.3-12.1-1.4-18.2 13.5-21.6 23.6-4 11.6-6.8 23-9.9 34.9-6 23.2-19.7 44.7-33.6 63.9-2.9 4-2.3 9.5 1.4 12.8 22.2 19.9 37.9 33 44.4 34.8 30.2 8.2 418.9 34.4 418.9 34.4 1.6 0.1 3.4 1.5 3.9 2.9l4.1 10.9c1.7 4.5 5.3 7.3 8 6.4l3.9-1.4c0.5-0.2 1.4-0.4 1.9-0.4l8.9-0.6c3.2-0.2 5.6-3 5.3-6.2l-0.6-5.8c-0.2-2.2 1-4.9 2.8-6.1 0 0 22.7-11.3 27.4-10.7l6.5 0.8c1.5 0.2 3.2-0.9 3.6-2.4l8.5-49.8c1.8-6.1-1.7-9.2-7.6-6.7z"/>
                  <path fill-rule="evenodd" :class="['a bloom', { 'path-clicked': linkClicked }]" class="a bloom" d="m1134.8 575.9l-22.3 5.6c-5.9 2.4-57.5-26.6-57.5-26.6-5.6-3.1-10.8-10.7-11.5-17.1l-18.9-162.3c-0.6-4.5-4.1-8-8.6-8.5-13.8-1.4-43.8-4.2-73.2-4.2-41.8 0-50.3 19.7-62.1 47q0 0 0 0c-17.6 40.4-27 94.3-70.8 116.2q0 0 0 0c-35 17.5-72.4-2.6-98.3-25.1-18.3-15.8-32.6-57.5-53-60.3-12.1-1.4-18.2 13.5-21.6 23.6-4 11.6-6.8 23-9.9 34.9-6 23.2-19.7 44.7-33.6 63.9-2.9 4-2.3 9.5 1.4 12.8 22.2 19.9 37.9 33 44.4 34.8 30.2 8.2 418.9 34.4 418.9 34.4 1.6 0.1 3.4 1.5 3.9 2.9l4.1 10.9c1.7 4.5 5.3 7.3 8 6.4l3.9-1.4c0.5-0.2 1.4-0.4 1.9-0.4l8.9-0.6c3.2-0.2 5.6-3 5.3-6.2l-0.6-5.8c-0.2-2.2 1-4.9 2.8-6.1 0 0 22.7-11.3 27.4-10.7l6.5 0.8c1.5 0.2 3.2-0.9 3.6-2.4l8.5-49.8c1.8-6.1-1.7-9.2-7.6-6.7z"/>
              </a>

              <!-- priclke-->
              <a href="../PrickleBack" @click="linkClicked = true" >
              <path fill-rule="evenodd" class="a pickle" d="m570.6 552.9c4.2 3.8 10.8 3.2 14.3-1.3 14.4-19 26.2-37.9 30.4-64.5q0.2-1.3 0.4-2.6c0 0 4-20.1 4.3-28.6 0.3-8.9 0-15.8 0-25.8-1-36.4-12.2-69.4-50.2-77.3-12.7-2.6-25.7-4.1-38.2-5.6-19.2-2.3-38.9-4.7-58.4-10.8-34-10.9-103.7-52.2-106.1-51.9-2.8 0.4-163.1-96.9-163.1-96.9-5.5-3.3-14.4-3.2-19.8 0.1 0 0-71.4 44.2-84.1 55.7-23.6 21.4-49.2 42.2-39.5 53.4l18.3 23.1c4.9 4.1 23.5 4.8 55.6 4.8 32.1 0 52.7 5.5 52.7 5.5 6.3 0.7 11.8-3.8 12.2-10l0.5-7.3c0.2-2.1 2-3.9 4.1-3.9 14.1 0 47 12.6 47 12.6 2 0.5 4.4-0.7 5.1-2.7l2-4.9c0.6-1.5 2.3-2.2 3.7-1.5 95.6 46.4 270.2 204.7 308.8 240.4z"/>
              </a>
              <text style="transform:matrix(.695,.719,-0.719,.695,10.922,299.37)" >
                <tspan x=".3" y="16.3" class="b">Entrance</tspan>
              </text>

              <path fill-rule="evenodd" class="c" d="m59.1 335.4l0.3-20.2-20.2-0.4"/>
              
              <!-- world two chest-->
              <a href="../password2" @click="linkClicked = true" >
                  <path fill-rule="evenodd" class="a chest" d="m478 328c18.5 5.9 37 8.1 56.5 10.4 12.8 1.6 26 3.1 39 5.8 29.9 6.2 48.5 26.4 55.2 60q0 0 0 0c1 5 1.1 11.6 3.2 16.1 3.5 7.5 9.4 5.4 16.6 5.8 20.3 1.1 38.3-20 49.5-34.8q0 0 0 0c8.4-11 25.8-34.5 46.1-62.2 3.5-4.9 1.8-11.9-3.7-14.4-8.8-4.2-21.1-10.8-35.2-21.1-13.8-10.1-22.8-23.4-32.3-37.5-10-14.9-20.4-30.3-37.6-43.6-23.4-17.9-44-11.8-75.2-2.4-11.1 3.3-23.7 7.1-37.9 10.2-45.9 9.9-64.3 3.4-81.8-9.7-4.3-3.2-10.4-2.2-13.5 2.1-17.8 24.4-33 45.3-41.7 57.2-3.2 4.4-2.1 10.6 2.4 13.7 29.2 19.7 59.5 34.6 90.4 44.4z"/>
              </a>


              <!-- thorned forest -->
              <a href="../FinalMetallic" @click="linkClicked = true" >
              <path fill-rule="evenodd" class="a thorned" d="m767.4 313.4c-23.8 32.9-66.4 89.6-78.2 105.2 0 0-3.7 6.2-3.7 6.2q0 0 0 0c-11 14.6 13.7 40.9 22.6 51.6 12.5 15.2 27.4 29.8 45.7 37.6 25.6 11 47.2 2.5 66.6-15.5q0 0 0 0 0 0 0 0c27.2-25 35.3-62.7 49.4-95.3 11.8-27.2 22.9-52.8 71-52.8 30.4 0 52.3 1.8 67.7 3.5 6.2 0.6 11.4-4.6 10.6-10.8l-13-111.3c-0.7-6.4-6.5-11.1-12.9-10.7l-164.3 12.3c-3 0.2-5.6 1.7-7.3 4.1-14.2 20.7-38.2 53.9-54.2 75.9z"/>
              </a>

              <!-- limbic forest -->
              <a href="../LimbicForest" @click="linkClicked = true" >
              <path fill-rule="evenodd" class="a forest" d="m800.1 251.4c-10.1 14.3-23.2 32.5-38.6 53.7-4.3 1.2-7.2 2-11.5 3.2-8.2-3.4-22.4-10.3-39.1-22.5-12.4-9.1-20.9-21.7-29.9-35.1-10-14.8-21.4-31.6-39.9-45.8-27.3-21-52.2-13.5-83.8-4.1-10.9 3.3-23.3 7-37.1 10-41.9 9.1-58.2 3.8-74.1-8-4.3-3.2-5.3-9.2-2.1-13.5 44.2-60.9 95.3-131.8 101.5-143 11.2-20.2 31.4-5.1 31.4-5.1 0 0 19.4 9.6 31.4 21.5 11.9 12 22.4 7.5 38.1 0.8 15.6-6.8 23.5-9.7 23.5-9.7 4.3-1.7 9.3 1.9 11.1 8.1l49.4 167.4c1.9 6.2 8.5 10.8 14.9 10.3l46.2-3.5c8.2-0.6 13.4 8.6 8.6 15.3zm-186.4-152.8c-6.8-8.5-33.1-15.3-40.8-15.3-7.6 0-34.8 14.5-39.8 21.7-5.1 7.2 7.5 20.4 10.9 25.9 3.4 5.5 16.2 22.5 16.2 22.5 5.1 4.3 5.9 9.5 16.9 9.8 9.8 0.3 9.2-13.6 9.2-20 0-6.4 7-17.8 11.2-21.7 4.3-3.9 9.4-3.8 19.6-4.2 10.2-0.4 3.4-10.2-3.4-18.7z"/>
              </a>

<text style="transform:matrix(1,0,0,1,694.586,444.289)" >
  <tspan x="21.7" y="16.3" class="d">The Sports</tspan>
  <tspan x="52.9" y="40.3" class="d">Zone</tspan>
</text>

<text style="transform:matrix(1,0,0,1,486.258,287.412)" >
<tspan x="9.8" y="16.3" class="b">
  The Amphitheatre
</tspan>
</text>

<text style="transform:matrix(1,0,0,1,438.9,363.778)" >
<tspan x="19.4" y="16.3" class="b">
  The Pavillion
</tspan>
</text>

<text style="transform:matrix(1,0,0,1,483.817,51.594)" >
  <tspan x="63.3" y="16.3" class="b">
    Lake
  </tspan>
</text>

<text style="transform:matrix(.755,.656,-0.656,.755,446.137,498.133)" >
  <tspan x="7.3" y="16.3" class="b">
    Entrance
  </tspan>
</text>

<text style="transform:matrix(1,0,0,1,574.601,-0.097)" >
  <tspan x="7.3" y="16.3" class="b">
    Entrance
  </tspan>
</text>

<text style="transform:matrix(1,0,0,1,289.774,202.685)" >
  <tspan x="7.3" y="16.3" class="b">
    Entrance
  </tspan>
</text>

<path fill-rule="evenodd" class="c" d="m507.9 535l-1.4-20.2-20.1 1.5"/>
<path fill-rule="evenodd" class="c" d="m612.6 34.1l14.3 14.2 14.3-14.2"/>
<path fill-rule="evenodd" class="c" d="m327.8 236.1l14.3 14.3 14.3-14.3"/>
<text style="transform:matrix(1,0,0,1,100.785,231.624)" >
<tspan x="46.3" y="17.9" class="e">
  PRICKLE 
</tspan>
<tspan x="60" y="46.9" class="e">
  BACK
</tspan>
</text>

<text style="transform:matrix(1,0,0,1,357.495,231.624)" >
<tspan x="54.7" y="17.9" class="e">
  CHEST 
</tspan>
<tspan x="51.9" y="46.9" class="e">
  GROVE
</tspan>
</text>

<text style="transform:matrix(1,0,0,1,561.156,129.116)" >
<tspan x="53.7" y="17.9" class="e">
  LIMBIC 
</tspan>
<tspan x="49.2" y="46.9" class="e">
  FOREST
</tspan>
</text>

<text style="transform:matrix(1,0,0,1,789.223,251.271)" >
<tspan x="61" y="17.9" class="e">
  THORNED 
</tspan>
<tspan x="45.1" y="46.9" class="e">
  DIAPHRAGM
</tspan>
</text>


<path fill-rule="evenodd" class="a" d="m641.3 278.8h-17.9c0-15.1-12.2-27.3-27.2-27.3-15.1 0-27.3 12.2-27.3 27.3h-17.8c0-24.9 20.2-45.1 45.1-45.1 24.8 0 45.1 20.2 45.1 45.1z"/>
<path fill-rule="evenodd" class="a" d="m617.1 117.3c-10.2 0.4-15.3 0.3-19.6 4.2-4.2 3.9-11.2 15.3-11.2 21.7 0 6.4 0.6 20.3-9.2 20-11-0.3-11.8-5.5-16.9-9.8 0 0-12.8-17-16.2-22.5-3.4-5.5-16-18.7-10.9-25.9 5-7.2 32.2-21.7 39.8-21.7 7.7 0 34 6.8 40.8 15.3 6.8 8.5 13.6 18.3 3.4 18.7z"/>
<path fill-rule="evenodd" class="c" d="m1093.8 690.2l-15.3-13.3-13.2 15.3"/>
<text style="transform:matrix(.998,-0.07,.07,.998,1027.522,707.557)" >
  <tspan x="7.3" y="16.3" class="b">
      Entrance
  </tspan>
</text>

<text style="transform:matrix(1,0,0,1,862.192,512.211)" >
  <tspan x="29.2" y="17.9" class="e">
    BLOOMING 
  </tspan>

  <tspan x="55.8" y="46.9" class="e">
    NAVEL
  </tspan>
</text>


</g>
</svg>
    
          </svg>
        </div>
    <!-- <a href="#map" class="text-2xl text-yellow-400 cursor-pointer mt-5 border border-solid rounded-lg border-yellow-400">
       <p class='p-5'> Enter </p>
    </a> -->
</div>

           
            
       

        <div></div>
  
 

    




      

      </div>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    this.background = this.$refs.background;
    this.gradient = this.$el.querySelector(".interactive-gradient");

    // Add mousemove event listener
    this.background.addEventListener("mousemove", this.updateGradient);

      // Add event listeners
    window.addEventListener("scroll", this.updateTitlePosition);
    window.addEventListener("resize", this.updateTitleWidth);

    // Initial calculations (optional)
    this.updateTitlePosition();
    this.updateTitleWidth();
  },
  beforeDestroy() {
    // Remove event listener to prevent memory leaks
    this.background.removeEventListener("mousemove", this.updateGradient);

    window.removeEventListener("scroll", this.updateTitlePosition);
    window.removeEventListener("resize", this.updateTitleWidth);
  },

  data() {
    return {
      mapPath: "/toplayer.png",
      showOverlay: false,
      linkClicked: false,
      titleTop: 0, // Initial top position
      titleWidth: "100%", // Initial width
      // rotation: '',
    };
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
     updateTitlePosition() {
    // Calculate new top position based on scroll position
    this.titleTop = window.scrollY + "px";
  },
  updateTitleWidth() {
    // Calculate new width based on the screen size
     this.titleWidth = window.innerWidth + "px";
  },

    updateGradient(event) {
      // Calculate gradient colors based on mouse position
      const x = (event.clientX / window.innerWidth) * 255;
      const y = (event.clientY / window.innerHeight) * 255;
      const color1 = `rgb(255,${81 - y},81, 0.6)`;
      const color2 = `rgb(${255 - x}, ${81 - y}, 81,  0.3)`;
 
      // Update the gradient background
      this.gradient.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    },
  },
  
};
</script>

<style scoped>

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

.list-decimal li{
padding-bottom:2vh;
}

.svg-container{
/* padding-top: 3.5rem !important;
padding-bottom: 3.5rem !important;
z-index: 0 !important; */
width: 80vw;
    height: auto;
    padding-top: 10vh;
        z-index: 1;
            position: relative;
}



@media (max-width: 760px) {
   .mobile-flex{
    display: block;
   }

   .mobile-text{
    font-size: 1rem;
    line-height: normal;
   }

   .svg-container{
/* padding-top: 3.5rem !important;
padding-bottom: 3.5rem !important;
z-index: 0 !important; */
width: 90vw;
    height: auto;
    padding-top: 10vh;
        padding-bottom: 10vh;
        z-index: 1;
            position: relative;
}

   .svgin{
      width: 86vw;
    height: auto;
    padding-top: 10vh;
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
  position: fixed;
  top: -100px; /* Initially off-screen */
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
  background-color: #edf3ff;
    background-color: #40cef6;
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

.interactive-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 1s;
    z-index: 0;
}

.square-grid {
  position: absolute;
  top: 0;
 pointer-events: none;
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
