<template>
  <!-- mt-5 border-[#ff00a0] border-4-->

  <div> 
    <AboutPage />
    <main class="h-screen mobilelayout  flex content-container  w-screen text-[#ffffff] bg-[#dc97b4] overflow-hidden  " :style="contentContainerStyle">
    
      <div class="instrcuct w-[50vw] bg-[#38664d] text-[#ffffff] overflow-scroll  ">
      <div class="p-[1rem] ">
        <p class="leading-2 text-sm  pt-5 ">
            A place that exists in a <strong class="font-bold">parallel universe</strong> at the exact location of Langthorne Park. The flora and fauna of 
            <strong class="font-bold">Long Thorn Valley</strong> are suffering from memory loss caused by a terrible disaster known as 
            <strong class="font-bold">the Big Change</strong>.
        </p>
        <ol class="list-decimal text-sm p-10 pb-10 pt-10 custom-ol">
    <li>To play the game, look for passwords on the banners located around Langthorne Park.</li>
    <li>Select the environment on the map and enter the correlating password from the banner to begin your exploration. For example, to play the Chest Grove environment, click on this area on the map and enter the password: Fire.</li>
    <li>Find all five passwords around the park and play all five game environments to help fantastical creatures and piece the story together.</li>
</ol>

      </div> 
      </div>

      <div class="w-[50vw] orb p-10 bg-[#dc97b4] text-[#ffffff] overflow-scroll">
    <div class="gallery-container">
      <button class="gallery-arrow" @click="prevImage">&#8249;</button>
      <!-- <img
        v-if="currentImageIndex === 0"
        class="gallery-image"
        src="heart1.png"
        alt="Image 1"
      /> -->
      <div v-if="currentImageIndex === 0">
        <img
        class="gallery-image"
        src="heart1.png"
        alt="Image 1"
        />
        <p class=" border-[1px] border-white rounded-full capitalize flex justify-center">heart</p>
      </div>
      
      <div v-if="currentImageIndex === 1">
        <img
        class="gallery-image"
        src="kidney.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">kidney</p>
      </div>

      <div v-if="currentImageIndex === 2">
        <img
        class="gallery-image"
        src="liver2.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">liver</p>
      </div>
      
      

      <div v-if="currentImageIndex === 3">
        <img
        class="gallery-image"
        src="lung3.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">lung</p>
      </div>

      <div v-if="currentImageIndex === 4">
        <img
        class="gallery-image"
        src="Max.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">Max</p>
      </div>
     
      
      <div v-if="currentImageIndex === 5">
        <img
        class="gallery-image"
        src="Parasite.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">Parasite</p>
      </div>

      <div v-if="currentImageIndex === 6">
        <img
        class="gallery-image"
        src="spleen2.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">spleen</p>
      </div>
      
      <div v-if="currentImageIndex === 7">
        <img
        class="gallery-image"
        src="twins2.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">twins</p>
      </div>
     
      <div v-if="currentImageIndex === 8">
        <img
        class="gallery-image"
        src="violetta.png"
        alt="Image 2"
      />
        <p class=" capitalize border-[1px] border-white rounded-full flex justify-center">violetta</p>
      </div>
     
      <button class="gallery-arrow" @click="nextImage">&#8250;</button>
    </div>
  </div>

  <!-- bg-[#52a875] -->
      <div
        class=" w-[50vw] svgarea p-10  bg-[#c8bb57] text-[#ffffff] overflow-hidden  "
        ref="background"
      >

      <div>
      
        <div class="square-grid opacity-20 "></div>
      </div>

<div class=" relative flex flex-col justify-center content-center text-center overflow-scroll">


  <div class="   justify-center content-center flex">


    <svg class=" svgin h-fit md:w-[35vw] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
          
          <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
              <path d="m-142-328h1418v1419h-1418z"/>
            </clipPath>
          </defs> 

            <style>tspan{white-space:pre}.a{stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 14px;fill: #ffffff;font-weight: 500;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 14px;line-height: 14px;fill: #ffffff;font-weight: 500;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 14px;text-transform: uppercase;fill: #ffffff;font-weight: 500;font-family: "Poppins-Medium", "Poppins"}</style>
            
            <g clip-path="url(#cp1)">
              
              <!-- world one blooming nevel -->
              <a href="../password" >
              
              <path fill-rule="evenodd"  id="myPath1"  class="a bloom" d="m1134.8 575.9l-22.3 5.6c-5.9 2.4-57.5-26.6-57.5-26.6-5.6-3.1-10.8-10.7-11.5-17.1l-18.9-162.3c-0.6-4.5-4.1-8-8.6-8.5-13.8-1.4-43.8-4.2-73.2-4.2-41.8 0-50.3 19.7-62.1 47q0 0 0 0c-17.6 40.4-27 94.3-70.8 116.2q0 0 0 0c-35 17.5-72.4-2.6-98.3-25.1-18.3-15.8-32.6-57.5-53-60.3-12.1-1.4-18.2 13.5-21.6 23.6-4 11.6-6.8 23-9.9 34.9-6 23.2-19.7 44.7-33.6 63.9-2.9 4-2.3 9.5 1.4 12.8 22.2 19.9 37.9 33 44.4 34.8 30.2 8.2 418.9 34.4 418.9 34.4 1.6 0.1 3.4 1.5 3.9 2.9l4.1 10.9c1.7 4.5 5.3 7.3 8 6.4l3.9-1.4c0.5-0.2 1.4-0.4 1.9-0.4l8.9-0.6c3.2-0.2 5.6-3 5.3-6.2l-0.6-5.8c-0.2-2.2 1-4.9 2.8-6.1 0 0 22.7-11.3 27.4-10.7l6.5 0.8c1.5 0.2 3.2-0.9 3.6-2.4l8.5-49.8c1.8-6.1-1.7-9.2-7.6-6.7z"/>
              <path fill-rule="evenodd" id="myPath2"  class="a bloom" d="m1134.8 575.9l-22.3 5.6c-5.9 2.4-57.5-26.6-57.5-26.6-5.6-3.1-10.8-10.7-11.5-17.1l-18.9-162.3c-0.6-4.5-4.1-8-8.6-8.5-13.8-1.4-43.8-4.2-73.2-4.2-41.8 0-50.3 19.7-62.1 47q0 0 0 0c-17.6 40.4-27 94.3-70.8 116.2q0 0 0 0c-35 17.5-72.4-2.6-98.3-25.1-18.3-15.8-32.6-57.5-53-60.3-12.1-1.4-18.2 13.5-21.6 23.6-4 11.6-6.8 23-9.9 34.9-6 23.2-19.7 44.7-33.6 63.9-2.9 4-2.3 9.5 1.4 12.8 22.2 19.9 37.9 33 44.4 34.8 30.2 8.2 418.9 34.4 418.9 34.4 1.6 0.1 3.4 1.5 3.9 2.9l4.1 10.9c1.7 4.5 5.3 7.3 8 6.4l3.9-1.4c0.5-0.2 1.4-0.4 1.9-0.4l8.9-0.6c3.2-0.2 5.6-3 5.3-6.2l-0.6-5.8c-0.2-2.2 1-4.9 2.8-6.1 0 0 22.7-11.3 27.4-10.7l6.5 0.8c1.5 0.2 3.2-0.9 3.6-2.4l8.5-49.8c1.8-6.1-1.7-9.2-7.6-6.7z"/>
               
              </a>

              <!-- priclke-->
              <a href="../PrickleBack" >
              <path fill-rule="evenodd" id="pickle" class="a pickle" d="m570.6 552.9c4.2 3.8 10.8 3.2 14.3-1.3 14.4-19 26.2-37.9 30.4-64.5q0.2-1.3 0.4-2.6c0 0 4-20.1 4.3-28.6 0.3-8.9 0-15.8 0-25.8-1-36.4-12.2-69.4-50.2-77.3-12.7-2.6-25.7-4.1-38.2-5.6-19.2-2.3-38.9-4.7-58.4-10.8-34-10.9-103.7-52.2-106.1-51.9-2.8 0.4-163.1-96.9-163.1-96.9-5.5-3.3-14.4-3.2-19.8 0.1 0 0-71.4 44.2-84.1 55.7-23.6 21.4-49.2 42.2-39.5 53.4l18.3 23.1c4.9 4.1 23.5 4.8 55.6 4.8 32.1 0 52.7 5.5 52.7 5.5 6.3 0.7 11.8-3.8 12.2-10l0.5-7.3c0.2-2.1 2-3.9 4.1-3.9 14.1 0 47 12.6 47 12.6 2 0.5 4.4-0.7 5.1-2.7l2-4.9c0.6-1.5 2.3-2.2 3.7-1.5 95.6 46.4 270.2 204.7 308.8 240.4z"/>
              </a>
              <text style="transform:matrix(.695,.719,-0.719,.695,10.922,299.37)" >
                <tspan x=".3" y="16.3" class="b">Entrance</tspan>
              </text>

              <path fill-rule="evenodd" class="c" d="m59.1 335.4l0.3-20.2-20.2-0.4"/>
              
              <!-- world two chest-->
              <a href="../password2" >
                  <path fill-rule="evenodd" id="myPath3" class="a chest" d="m478 328c18.5 5.9 37 8.1 56.5 10.4 12.8 1.6 26 3.1 39 5.8 29.9 6.2 48.5 26.4 55.2 60q0 0 0 0c1 5 1.1 11.6 3.2 16.1 3.5 7.5 9.4 5.4 16.6 5.8 20.3 1.1 38.3-20 49.5-34.8q0 0 0 0c8.4-11 25.8-34.5 46.1-62.2 3.5-4.9 1.8-11.9-3.7-14.4-8.8-4.2-21.1-10.8-35.2-21.1-13.8-10.1-22.8-23.4-32.3-37.5-10-14.9-20.4-30.3-37.6-43.6-23.4-17.9-44-11.8-75.2-2.4-11.1 3.3-23.7 7.1-37.9 10.2-45.9 9.9-64.3 3.4-81.8-9.7-4.3-3.2-10.4-2.2-13.5 2.1-17.8 24.4-33 45.3-41.7 57.2-3.2 4.4-2.1 10.6 2.4 13.7 29.2 19.7 59.5 34.6 90.4 44.4z"/>
              </a>


              <!-- thorned forest -->
              <a href="../FinalMetallic" >
              <path fill-rule="evenodd" id="myPath4" class="a thorned" d="m767.4 313.4c-23.8 32.9-66.4 89.6-78.2 105.2 0 0-3.7 6.2-3.7 6.2q0 0 0 0c-11 14.6 13.7 40.9 22.6 51.6 12.5 15.2 27.4 29.8 45.7 37.6 25.6 11 47.2 2.5 66.6-15.5q0 0 0 0 0 0 0 0c27.2-25 35.3-62.7 49.4-95.3 11.8-27.2 22.9-52.8 71-52.8 30.4 0 52.3 1.8 67.7 3.5 6.2 0.6 11.4-4.6 10.6-10.8l-13-111.3c-0.7-6.4-6.5-11.1-12.9-10.7l-164.3 12.3c-3 0.2-5.6 1.7-7.3 4.1-14.2 20.7-38.2 53.9-54.2 75.9z"/>
              </a>

              <!-- limbic forest -->
              <a class=" forest" href="../LimbicForest">
              <path id="myPath" fill-rule="" class="a forest" d="m800.1 251.4c-10.1 14.3-23.2 32.5-38.6 53.7-4.3 1.2-7.2 2-11.5 3.2-8.2-3.4-22.4-10.3-39.1-22.5-12.4-9.1-20.9-21.7-29.9-35.1-10-14.8-21.4-31.6-39.9-45.8-27.3-21-52.2-13.5-83.8-4.1-10.9 3.3-23.3 7-37.1 10-41.9 9.1-58.2 3.8-74.1-8-4.3-3.2-5.3-9.2-2.1-13.5 44.2-60.9 95.3-131.8 101.5-143 11.2-20.2 31.4-5.1 31.4-5.1 0 0 19.4 9.6 31.4 21.5 11.9 12 22.4 7.5 38.1 0.8 15.6-6.8 23.5-9.7 23.5-9.7 4.3-1.7 9.3 1.9 11.1 8.1l49.4 167.4c1.9 6.2 8.5 10.8 14.9 10.3l46.2-3.5c8.2-0.6 13.4 8.6 8.6 15.3zm-186.4-152.8c-6.8-8.5-33.1-15.3-40.8-15.3-7.6 0-34.8 14.5-39.8 21.7-5.1 7.2 7.5 20.4 10.9 25.9 3.4 5.5 16.2 22.5 16.2 22.5 5.1 4.3 5.9 9.5 16.9 9.8 9.8 0.3 9.2-13.6 9.2-20 0-6.4 7-17.8 11.2-21.7 4.3-3.9 9.4-3.8 19.6-4.2 10.2-0.4 3.4-10.2-3.4-18.7z"/>
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

  </div>
  <!-- cloud-animation -->
  


 

</div>
      </div>

      
      <nuxt />
    </main>
    

  </div>
</template>

<script>

// import { checkAuthentication } from '~/auth.js';
import AboutPage from '~/components/layout/AboutPage.vue';



export default {
  name: "IndexPage",
  components: {
    AboutPage,
  },

  mounted() {
    if(localStorage.getItem('authenticated'))
    {
      const path1 = document.getElementById('myPath1');
      const path2 = document.getElementById('myPath2');
      if (path1 && path2) {
          path1.setAttribute('class', 'a bloom authenticated-color');
          path2.setAttribute('class', 'a bloom authenticated-color');
      }
    } else{
      const path1 = document.getElementById('myPath1');
      const path2 = document.getElementById('myPath2');
      path1.setAttribute('class', 'a bloom');
      path2.setAttribute('class', 'a bloom');
    }

    if(localStorage.getItem('authenticated2'))
    {
      const path3 = document.getElementById('myPath3');

      if (path3) {
        path3.setAttribute('class', 'a chest authenticated-color');
      }
    } else{
      const path3 = document.getElementById('myPath3');
      path3.setAttribute('class', 'a chest');
    }

    if(localStorage.getItem('authenticated3'))
    {
      const path4 = document.getElementById('myPath4');

      if (path4) {
        path4.setAttribute('class', 'a thorned authenticated-color');
      }
    } else{
      const path4 = document.getElementById('myPath4');
      path4.setAttribute('class', 'a thorned');
    }

    if(localStorage.getItem('authenticatedforest'))
    {
      const path = document.getElementById('myPath');

      if (path) {
        path.setAttribute('class', 'a forest authenticated-color');
      }
    } else{
      const path = document.getElementById('myPath');
      path.setAttribute('class', 'a forest');
    }

    if(localStorage.getItem('authenticatedpickle'))
    {
      const pickle = document.getElementById('pickle');

      if (pickle) {
        pickle.setAttribute('class', 'a pickle authenticated-color');
      }
    } else{
      const pickle = document.getElementById('pickle');
      pickle.setAttribute('class', 'a pickle');
    }
   






    // this.background = this.$refs.background;
    // this.gradient = this.$el.querySelector(".interactive-gradient");

    // Add mousemove event listener
    // this.background.addEventListener("mousemove", this.updateGradient);

      // Add event listeners
    window.addEventListener("scroll", this.updateTitlePosition);
    window.addEventListener("resize", this.updateTitleWidth);

    // Initial calculations (optional)
    this.updateTitlePosition();
    this.updateTitleWidth();

        // Get the path element by its ID
        const path = document.getElementById('myPath');

},

  
  beforeDestroy() {
    // Remove event listener to prevent memory leaks
    // this.background.removeEventListener("mousemove", this.updateGradient);

    window.removeEventListener("scroll", this.updateTitlePosition);
    window.removeEventListener("resize", this.updateTitleWidth);
  },

  data() {
    return {
      mapPath: "/toplayer.png",
      titleTop: 0, // Initial top position
      titleWidth: "100%", // Initial width
      contentContainerStyle: {},
      currentImageIndex: 0,
      totalImages: 8,
      // rotation: '',
    };
  },
  methods: {
     updateTitlePosition() {
    // Calculate new top position based on scroll position
    this.titleTop = window.scrollY + "px";
  },
  updateTitleWidth() {
    // Calculate new width based on the screen size
     this.titleWidth = window.innerWidth + "px";
  },
  handleAuthentication() {
      if (this.password.toLowerCase() === 'earth') {
        // Authentication is successful
        this.$root.$emit('authentication-success');
      }
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
    },

    // updateGradient(event) {
    //   // Calculate gradient colors based on mouse position
    //   const x = (event.clientX / window.innerWidth) * 255;
    //   const y = (event.clientY / window.innerHeight) * 255;
    //   const color1 = `rgb(255,${81 - y},81, 0.6)`;
    //   const color2 = `rgb(${255 - x}, ${81 - y}, 81,  0.3)`;
 
    //   // Update the gradient background
    //   this.gradient.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    // },
    updateContentContainerPosition() {
      const isMobile = window.innerWidth <= 768;
      // Calculate the offset based on blue box height
      const offset = isMobile ? (this.isBlueBoxActive ? "100vw" : "0") : (this.isBlueBoxActive ? "50vw" : "0");

      // Calculate the offset based on whether it's a mobile screen or not

      // Set the content container position
      this.contentContainerStyle = {
        transform: `translateX(${offset})`,
      };
    },
  },
  
};
</script>

<style scoped>
.gallery-container {
  position: relative;
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
}

.gallery-arrow:first-child {
  left: 0;
}

.gallery-arrow:last-child {
  right: 0;
}
.instrcuct{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.svgarea{
  display: flex;
    flex-direction: column;
    justify-content: center;
}
/* Initial path style */
.content-container{
  /* width: 100vw !important; */
  width: 100vw;
  /* height: 100vw !important; */
}

.content-container {
  /* transition: transform 1s ease;  */
  /* Add smooth transition for content movement */
  padding-top: 35vh;
  transition: transform .5s linear;
}

.text-stroke{
    -webkit-text-stroke: 2px #aa213f; /* Adjust the color and size as needed */
   
}

.logo {
    position: absolute;
    top: 10px; /* Adjust the top position as needed */
    left: 10px; /* Adjust the left position as needed */
    max-width: 100px; /* Adjust the maximum width as needed */
    height: auto;
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
                  justify-content: center;
              margin-top: 20px;
          }
  
          /* Style for each image */
          .image-container img {
              width: 7vw; 
               width: auto; 
              height: 3vw; /* Maintain aspect ratio */
              margin: 10px; /* Margin between images */
          }

.list-decimal li{
padding-bottom:2vh;
}

.svg-container{
    height: 100vh;
        z-index: 1;
            position: relative;
}



@media (max-width: 760px) {

  .content-container{
    position: fixed;
    width: 100vw !important;
    background-color: #94c298;
    border-bottom: 0.8px solid #000;
    /* border-top: 1px solid #11ff00; */
  }

   .mobile-flex{
    display: block;
   }

   .mobile-text{
    font-size: 1rem;
    line-height: normal;
   }

   .svg-container{
width: 90vw;
    height: auto;
    padding-top: 10vh;
        padding-bottom: 10vh;
        z-index: 1;
            position: relative;
}

.mobilelayout{
  flex-direction: column;
  overflow: scroll;
}

.content-container {
    padding-top: 26vh;
    padding-top: 8vh;
    transition: transform .5s linear;
}


.svgin {
    width: 86vw;
    height: auto;
    padding-top: 0vh;
}

.instrcuct{
  width: 100vw;
  overflow: visible;
}

.orb{
  width: 100vw;
  overflow: visible;
}

.svgarea{
  width: 100vw;
  overflow: visible;
}
   .svgin{
      width: 86vw;
    height: auto;
    /* padding-top: 10vh; */
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
  border: 1px solid #2809e3;
  border-radius: 45px;
  line-height: 80px;
  margin: 0px 5px;
  z-index: 1;
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
  z-index: 1;
}

/* Style list markers with circle border */
.custom-ol {
    list-style-type: none; 
    /* Remove the default numbers */
    padding-left: 0;
    counter-reset: custom-counter; 
}

.custom-ol li::before {
  content: counter(custom-counter);
    counter-increment: custom-counter;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border: 0.5px solid white;
    border-radius: 50%;
    text-align: center;
    margin-right: 0.5em;
    font-weight: bold;
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

.instrcuct{
  z-index: 10;
}

.orb{
  z-index: 10;
  display: flex;
  align-items: center;
}

.svgarea{
  z-index: 1;
}

.square-grid {
  position: absolute;
  top: 0;
 pointer-events: none;
  left: 0;
  width: 100%;
  height: 100%;
  /* width: 100%;
  height: 50vw; */
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
}



svg {
  z-index: 2;
}



.path-clicked {
  fill: yellow !important;
}


a {
    fill: #fea7c8;
    /* fill: inherit; */
    text-decoration: inherit;
    transition: opacity 1s ease;
}

/* a:hover {
    fill: #fea7c8;
    text-decoration: inherit;
    opacity: 0.7;
    transition: opacity 1s ease;
} */

a:visited {
display: none;
}



.bloom{
    fill: #dfe169;
}
.bloom.authenticated-color{
  fill:rgb(168, 168, 30);
  opacity: 0.2;
}

.bloom:hover {
  opacity: 0.7;
}

.chest{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #dc97b4;
}

.chest.authenticated-color{
  fill: #dd367b;
  opacity: 0.2;
}

.chest:hover {
  opacity: 0.7;
  transition: opacity 3s ease;
}

.thorned{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #707070;
}

.thorned.authenticated-color{
  fill: #c0b9b9;
  opacity: 0.2;
}

.thorned:hover {
  opacity: 0.7;
  transition: opacity 3s ease;
}

.forest{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #35357d;
}

.forest:hover {
  opacity: 0.7;
  transition: opacity 3s ease;
}
.forest.authenticated-color{
  opacity: 0.2;
  fill: #3c3c6b;
}

.pickle{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #52a875;
}

.pickle:hover {
  opacity: 0.7;
  transition: opacity 3s ease;
}
.pickle.authenticated-color{
  opacity: 0.2;
  fill: #76a589;
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

</style>
