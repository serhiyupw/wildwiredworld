<template>

  <div>
    <AboutPage />
    <main class="h-screen  w-screen  ">
      <div
        class="h-screen w-screen text-[#ffffff] overflow-scroll  "
        ref="background"
      >
        <!-- <div class="interactive-gradient "></div>
        <div class="square-grid opacity-20"></div> -->

        <BackgroundVideo />
    


        <!-- <div class="dropdown">
          
        </div> -->
        <!-- <div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 56.25%; padding-top: 120px;"><a href="https://www.dropbox.com/scl/fi/za7tbr3r8bvxca0icz919/VERSION-1_1_low-res.mp4?rlkey=9ms303webvcrdbk4te77vvr89" data-iframely-url="//iframely.net/tPlQiBm"></a></div></div><script async src="//iframely.net/embed.js"></script> -->

        <div class="centered-text p-5">
          <div class="dropdown w-screen md:w-3/5 lg:w-4/5">
            <!-- <span  class=' text-2xl   '>"Wild Wired! Rewilding Encounters of Langthorne Park" by <a class="underline" href="https://www.instagram.com/hervisions_/">HERVISIONS</a> has experienced a power surge causing technical issues with the mobile-friendly site-specific game.
              <br/> <br/>
              Come back here to help the plants, creatures and parasites of Long Thorn Valley to recover their memories on the 10th November 2023. 
            </span> -->
            <!-- <div class="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div> -->
            <br/> <br/>
          <a  href="./home" class="custom-button">Enter
            <span :class="{ 'arrow-up': !isDropdownActive, 'arrow-down': isDropdownActive }"></span>
          </a>
          
          </div>

        </div>

      

      </div>
      <nuxt />
    </main>
  </div>
</template>

<script>

import BackgroundVideo from '@/components/BackgroundVideo.vue';
import AboutPage from '~/components/layout/AboutPage.vue';

export default {
  name: "IndexPage",

    components: {
    BackgroundVideo,
    AboutPage,
  },
  

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
      isOpen: false,
      isDropdownActive: false,
      titleTop: 0, // Initial top position
      titleWidth: "100%", // Initial width
      // rotation: '',
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
      this.isOpen = !this.isOpen;
    },
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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown.active .dropdown-content {
  display: block;
}

.centered-text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Adjust to center within the desired vertical space */
      text-align: center;
      padding-top: 30vh;
    }

     /* Style for the dropdown */
     .dropdown {
      position: relative;
      display: inline-block;
    }

    /* Dropdown content (hidden by default) */
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    /* Show the dropdown content when hovering over the dropdown container */
    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdownbtn {
      position: relative;
      display: inline-block;
      /* min-width: 160px; */
      /* width: 160px; */
      display: flex;
      justify-content: center;
      /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
      z-index: 1;
    }

    .custom-button {
  /* background-color: #3498db; Background color */
  color: #fff; /* Text color */
  padding: 10px 20px; /* Padding to adjust the button size */
  border: 1px solid white;
  border-radius: 4px; /* Rounded corners */
  cursor: pointer;
  font-size: 16px; /* Text size */
  /* padding-bottom: 5px; */
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


.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it below other content */
}

.video {
  object-fit: cover; /* Cover the entire container */
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
