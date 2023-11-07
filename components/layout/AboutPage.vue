<template>

    <div>
    
    <header
    :class="{ active: isBlueBoxActive } "
        class=" absolute pointer-events-none top-0 left-0 z-[20000]  p-0  text-lg leading-snug uppercase  md:pb-2  "
      >
    
        <!-- desk -->
        <div class="headposition overflow-hidden  resize-animation ">
        <div
          class="content-container hidden  md:flex w-screen justify-between"
          :style="contentContainerStyle"
        >
     <!-- bg to header -->
<!-- opacity-30 -->
        <div class="  h-[35vh] fixed overflow-hidden pointer-events-none z-[0] ">
            <img
                          class="   "
                          src="hometop.png"
                          width="100%"
                          height="100%"
                          alt="Your Image Alt Text"
                      />
        </div>
      
          <nav class="flex-row md:justify-center   top-0 hidden w-1/16 md:flex">
    
        <!-- big logo -->
            <!-- Add an SVG icon here -->
            <div class="navele h-[35vh] flex justify-between ">
              <NuxtLink class="buttonlogo w-[20vw]  h-auto" :to="isBlueBoxActive ? $route.path : '/'">
                <img
                    src="ww.png"
                    alt="Your Logo"
                    class="logo fixed md:w-[30vw] sm:w-[15vw]"
                    />
              </NuxtLink>
    
              <!-- <div   class="logoo h-[35vh] md:w-[25vw] sm:w-[15vw]">
                <img
                    src="octo.png"
                    alt="Your Logo"
                    class="logoo"
                    width="100%"
                    height="100%"
                    />
              </div> -->

              <div class="flex justify-center h-[35vh]  w-[17vw] flex-col textlook z-[100] text-[white]  text-left">
    <p class="textlook  text-2xl text-[#38664d]">Rewilding Encounters of     <span class="textlook  text-2xl text-[white]">Langthorne Park.</span> </p>

      <!-- <h1 class="textlook  text-xs  w-[10vw]  ">Long Thorn Valley</h1> -->
  </div>
           

     <!-- links all and foot -->
            <div class="linksstuff p-10 ">
                <!-- links pages -->
                    <button class="button border-2 border-zinc-50 pointer-events-auto flex items-end pl-2 uppercase" @click="toggleBlueBox">
                        About
                    </button>



                        <!--  footer -->
                    <div class="">
            <div class="image-container z-[2]">
                        
                        <img
                                class=" h-[2vw] "
                                src="logo1.png"
                                width="100%"
                                height="100%"
                                alt="Your Image Alt Text"
                            />
                            <img
                                class=" w-1/4 "
                                src="logo2.png"
                                width="100%"
                                height="100%"
                                alt="Your Image Alt Text"
                            />
                            <img
                                class=" w-1/4 "
                                src="logo3.png"
                                width="100%"
                                height="100%"
                                alt="Your Image Alt Text"
                            />
                            <img
                                class=" w-1/4 "
                                src="logo4.jpg"
                                width="100%"
                                height="100%"
                                alt="Your Image Alt Text"
                            />
                                <img
                                class=" w-1/4 "
                                src="logo5.jpg"
                                width="100%"
                                height="100%"
                                alt="Your Image Alt Text"
                            />

            </div> 
            <p class="text-[0.55rem] text-[#38664d]">&copy; 2023 Wild Wired! Rewilding Encounters of Langthorne Park. All rights reserved.</p>
                    </div>
            </div>

           
    
      </div>


        </nav>
    
     
        </div>
    
     
      </div>
    
        <!-- mobile -->
        <div
          class="content-container mobile lg:hidden sm:contents md:contents  "
          :style="contentContainerStyle"
        >
          <nav class="navelemb mobile flex-row w-1/16 ">
    
    
            <!-- Add an SVG icon here -->
            <div class="flex justify-between mobilemenu">
              <NuxtLink class="w-[11vw] mobilemenupad h-auto" to="/">
                <img
          src="ww.png"
          alt="Your Logo"
          class="logo"
        >
              </NuxtLink>
    
              
              <button class="pl-2 uppercase flex items-end mobilemenupad " @click="toggleBlueBox">
        About
      </button>
            </div>
        </nav>
        </div>
    
        <!-- in box -->
        <div class="blue-box z-[100002] " :class="{ active: isBlueBoxActive } ">
          <div class="  ">
    
         
            <div
            v-if="isBlueBoxActive"
            @click="toggleBlueBox"
      class=""
            >
            <p class=" absolute z-[10000000] p-10 text-[white] w-[7vw]" @click="toggleBlueBox"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%"  viewBox="0 0 357 357" xml:space="preserve" class="close-button__svg fill-white" style="overflow: visible;"><defs></defs><g><g id="close_1_"><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"></polygon></g></g></svg></p>
            <About />
           
            </div>
          </div>
        </div>
      
     
      </header>
      
    
    
    
    </div>
    
    </template>
    
    
    
    
    
    <script>
    import { groq } from '@nuxtjs/sanity'
    import { mapState, mapActions } from 'vuex'
    import About from '~/components/About.vue'
    
    export default {
      components: {
        About,
      },
      name: 'IndexPage',
      data() {
        return {
          project: false,
          abouts: [],
          index: 1,
          realIndex: 0,
          step: 0,
          isBlueBoxActive: false,
          contentContainerStyle: {},
          back: false,
          abouts: [],
          activeStyle: { textDecoration: "none" },
        }
      },
    
    
      
      methods: {
        ...mapActions(['setTitle']),
        setProject(reference) {
          this.project = reference
        },
        toggleBlueBox() {
          // Toggle the blue box visibility
          this.isBlueBoxActive = !this.isBlueBoxActive;
    
          // Update the content container position
          this.updateContentContainerPosition();
    
          if (this.isBlueBoxActive) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        },
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
    }
    </script>
    
    
    
    
    <style scoped>
    .linksstuff{
        display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-transform: none;
    justify-content: space-between;
    /* padding: .5vw; */
    z-index: 10;
    height: 35vh;
    }
    
    .textlook{
        text-transform: none !important;
    }
    
    .text-stroke{
        -webkit-text-stroke: 2px #aa213f; /* Adjust the color and size as needed */
       
    }
    
    .logo {
        position: absolute;
        /* position: relative; */
        z-index: 10;
        top: 10px; /* Adjust the top position as needed */
        left: 10px; /* Adjust the left position as needed */
        /* max-width: 100px; */
         /* Adjust the maximum width as needed */
        height: auto;
      }
    
      .logoo {
        /* position: absolute; */
        position: relative;
        z-index: 5;
        top: 10px; /* Adjust the top position as needed */
        left: 10px; /* Adjust the left position as needed */
        /* max-width: 100px; */
         /* Adjust the maximum width as needed */
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
    
    .interactive-gradient {
      position: absolute;
      pointer-events: none;
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
    }
    
    
    
    svg {
      z-index: 2;
    }
    
    
    
    .path-clicked {
      fill: yellow !important;
    }
    
    
    .a {
        fill: #fea7c8;
        /* fill: inherit; */
        text-decoration: inherit;
        transition: opacity 1s ease;
    }
    
    .a:hover {
        fill: #fea7c8;
        text-decoration: inherit;
        opacity: 0.2;
        transition: opacity 1s ease;
    }
    
    .a:visited {
    display: none;
    }
    
    
    
    .bloom{
        fill: yellow;
    }
    
    .bloom:hover {
      opacity: 0.2;
    }
    
    .chest{
      opacity: 1;
        transition: opacity 3s ease;
        fill: rgb(173, 42, 92);
    }
    
    .chest:hover {
      opacity: 0.2;
      transition: opacity 3s ease;
    }
    
    .thorned{
      opacity: 1;
        transition: opacity 3s ease;
        fill: rgb(33, 58, 33);
    }
    
    .thorned:hover {
      opacity: 0.2;
      transition: opacity 3s ease;
    }
    
    .forest{
      opacity: 1;
        transition: opacity 3s ease;
        fill: rgb(53, 53, 125);
    }
    
    .forest:hover {
      opacity: 0.2;
      transition: opacity 3s ease;
    }
    
    .pickle{
      opacity: 1;
        transition: opacity 3s ease;
        fill: green;
    }
    
    .pickle:hover {
      opacity: 0.2;
      transition: opacity 3s ease;
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
    
    .item {
      width: 33.3333%;
    }
    
    .date{
      display: flex;
        align-items: center;
        font-family: Helvetica,Arial,sans-serif !important;
    }
    
    .content-container{
      /* width: 100vw !important; */
      width: 100vw;
      /* height: 100vw !important; */
    }
    
    /* header{
      background-color: #94c298;
      height: fit-content !important;
    } */
    
    .resize-animation {
      transition: width 0.3s ease-in-out, height 0.3s ease-in-out !important;
    }
    
    .headposition{
         display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* width: 100vw !important; */
        justify-content: center;
        height: 35vh;
            /* padding-top: 1vh; */
        background-color: #94c298;
        position: fixed;
        position: absolute;
    }
    
    .navele{
       display: flex;
        flex-direction: row;
        flex-wrap: wrap;
            /* width: 98vw !important; */
            width: 100vw ;
        justify-content: space-between;
    
      }
    
    .button{
       padding: .5vw;
       font-size: 1.25rem ;
       /* color: #39674e; */
       color: white;
       display: flex;
        align-items: center;
    }
    
    .buttonlogo{
        padding: .5vw;
      }
    
    /* .content-container{
          justify-content: center;
    } */
    
    
    
    
    
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    
    .fade-enter-active, .fade-leave-active {
      transition: opacity 10.5s;
      transition: width 1s ease, opacity 0.5s ease; /* Add smooth transitions */
    }
    .fade-enter, .fade-leave-to {
      opacity: 0 10s;
      transition: width 1s ease, opacity 0.5s ease; /* Add smooth transitions */
    }
    
    
    /* Add styles for the blue box */
    .blue-box {
      position: relative;
      top: -1vh;
      /* width: 100%;
      height: 0; */
      width: 0%;
      height: 100%;
      background-color: #ffaf62;
      transition: width .5s linear, opacity 0.5s ease; /* Add smooth transitions */
      pointer-events: none; /* Disable pointer events when hidden */
      z-index: 100002;
      overflow: hidden;
    }
    
    .blue-box div {
      position: relative;
      /* transition: height 1s ease, opacity 0.5s ease;  */
          transition: width .5s linear, opacity 0.5s ease; 
      /* Add smooth transitions */
      font-size: 1.125rem;
      z-index: 100002;
      line-height: 1.375rem;
      /* height: 50vw; */
      height: 100vw;
      will-change: auto;
      /* min-height: 50vw; */
      min-height: 100vw;
    }
    
    .text {
      color:  #212121;
      font-size: 1.125rem;
      line-height: 1.375rem;
      transition: width 1s ease, opacity 0.5s ease; /* Add smooth transitions */
    }
    /* .white-box {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      width: 100vw;
      height: 200vh !important;
      max-height: 200vh;
      opacity: 0;
      pointer-events: none;
      background: rgba(255, 255, 255, 0.82);
      transition: opacity 1s ease; 
      z-index: -10;
    } */
    
    
    
    /* Add styles for the active blue box */
    .blue-box.active {
      /* height: 50vw; */
      height: 100vw;
      min-height: fit-content;
      background-color: #d2d2d2;
      z-index: 100002;
      pointer-events: auto; /* Enable pointer events when visible */
            font-size: 1.1vw;
            will-change: auto;
          overflow: hidden;
          /* width: 100vw;
          max-width: 100vw; */
          width: 50vw;
        /* max-width: 50vw; */
     }
    
     .mobile{
        display: none;
      }
    
    @media (max-width: 768px) {
      .mobile{
        display:contents;
      }
    
      .content-container{
        position: fixed;
        width: 100vw !important;
        background-color: #94c298;
        border-bottom: 0.8px solid #000;
        /* border-top: 1px solid #11ff00; */
      }
      .blue-box.active {
      height: fit-content;
      height: 100vh;
      height: 103vh;
      width: 100vw;
    }
    
    .blue-box {
        position: relative;
        top: 0 !important;
        left: 0 !important;
        width: 110%;
        height: 0;
        /* background-color: #212121; */
    }
    
    svg{
      width: 17vw;
    }
    /* .white-box {
      position: fixed;
    } */
    .headposition {
        padding-top: 0vh;
    }
    
    .blue-box {
      top: 0vh;
      width: 110%;
      height: 0;
    }
    
    .blue-box div {
      height:100vh;
    }
    
    .navelemb{
    padding: 1.25rem;
    width: 100vw;
    }
    
    .mobilemenu{
      padding: 1.25rem;
      /* border-bottom: 0.8px solid #000; */
    }
    
    header{
      position: fixed;
      width: 100vw;
      background-color: #94c298;
    }
    
    }
    
    @media screen and (max-width: 1023px) {
      /* Your CSS styles for screens smaller than 1024px go here */
      /* For example, you can change the font size or layout */
      .blue-box.active{
        height: 100vh;
      }
    
      svg{
      width: 14vw;
    }
      .blue-box{
        top:0;
      }
      .mobile{
        display:contents;
      }
    
      .headposition{
        display: none;   
    }
    
    .mobilemenu{
      /* border-bottom-width: 0.95px;
        border-color: rgba(28, 25, 23); */
        padding-left: 1.5vw;
        padding-right: 1.5vw;
    }
    
    .mobilemenupad{
      padding: 0.5vw;
    }
    }
    
    
    
    
    
    /* .white-box.active {
      height: 100vh; 
      width: 100vw;
      opacity: 1;
      pointer-events: auto; 
    } */
    
    /* Add styles for the content container */
    .content-container {
      /* transition: transform 1s ease;  */
      /* Add smooth transition for content movement */
      transition: transform .5s linear;
    }
    
    /* Add this style to your CSS */
    .underline {
      text-decoration: none;
      position: relative;
      overflow: hidden;
    }
    
    .underline:after {
      content: "";
      position: absolute;
      left: 0.55rem;
      bottom: 0px; /* Adjust the distance from the text as needed */
      width: 0;
      height: 1.5px; /* Adjust the underline thickness as needed */
      background-color: rgb(0, 0, 0); /* Adjust the underline color as needed */
      transition: width 0.3s ease-in-out; /* You can adjust the duration and timing function as needed */
    }
    
    .underline:hover:after,
    .underline:focus:after {
      width: 90%;
    }
    </style>