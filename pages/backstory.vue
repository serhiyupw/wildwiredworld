<template>
    <!-- mt-5 border-[#ff00a0] border-4   <div class='flex'>
                        
                            <a class="overlay-button" href="./">
                                <div class="postbtn z-[2000]">Back</div>
                            </a>
                    </div>-->
  
    <div class='bg-[#ffaf62]'>
      <AboutPage />
      <!-- bg svg -->
        <svg class='fixed  z-[1]' version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 1418" width="1418" height="1418"><defs><clipPath clipPathUnits="userSpaceOnUse" id="cp1"><path d="m0 0h1418v1418h-1418z"/></clipPath></defs><style>.a{fill:none;stroke:#fd9cca;stroke-miterlimit:100;stroke-width:64.6}</style><g clip-path="url(#cp1)"><path fill-rule="evenodd" class="a" d="m1182.4 119.7c0 28.7 0.6 57.5-0.6 86.1 33.6 9.1 70.3 11.5 103.7-0.5-40.7 65.4-122.2 105.1-151.5 177 41.2-7.2 85.9-46 120-71.7-65.3 46.3-131.9 131-163.1 205.3 82.9-74.8 161-131.7 206.1-241.4-33.9 59.2-104 178.5-91.8 240.2 5.2-3 6.2-7.1 11.3-9.1-30.4 69.1-109.4 126.8-157.5 186.3q0.5-5.4 0.2-10.8c48.2-13.4 115.1-17 100.1 42.7-10.8 43.3-73.9 61.2-97.6 96.2 47.6 11 118.8-9.5 157.8 23.8-85.8 27.8-177.8 41.3-263.3 67.9-10.7 111.1 172.1 71.8 218.1 26.5-106.1 29.9-196.9 34.7-218.5-103.2-44 90.2-29.2 196.1-25 294.2 1.6 38.6 9 87-44.6 87.7-12.1-20.1-18.5-44.6-18.1-67.9-32.1 62-47.2 143.6-42.9 213.2-5.5-43.3 19-86.6 47.8-117.6 27.3-29.2 51.4-25.1 77.3-41.1 72.6-45.1 102.4-126 183-162.1-57.7 17.7-144.9 77.7-148.2 145.9 94.1 9.6 147-117.6 209.4-167.8 30.4 38.4 57.9 149.1-2.9 172.6 38.9 0.9 100.6 3.5 139.9-12.8 62.6-26.1 56.1-79.5 85.8-129.1 36.4-61 99.3-47 143.5-90.4-68.4 45.2-91.1 260.7-20.1 302.8 21.3-60.4 11.3-258 104.5-265.5 1.5 57.5-30.8 130.8-7.3 183.8 53.4 3.8 72-63.1 85.5-102.4 35.8 25.6 151.7 157.1 156.8 20.9-80.9 37.2-128.4-8.4-185.7-66.8 127.2 4.4 162.9-65.7 218.7-169.1-18.7 14.3-35.6 30.7-45.3 51.8 29.4-64.3 102.8-173 161.1-217.2 38.6 17.6 153.1 1 179.9-34.1 29.3-38.2 12.1-24.2 3.3-61.4-11-46.7-44.1-122.9 15.4-152.8-16.3 21.3-26.8 45.8-45 64.7-20.1-45.8-22.2-104.2-23.8-153.7-1.7-51.8 23.4-164.7-14.8-202.8-56.8 65-112.3 131.9-170 195.3-65.9 72.5-119.1 82.5-154.5-12-12.5-33.3-13.2-129.6-49-144.8-42.6-18.2-118.6 66.2-142.9 92.7-53.7 58.5-36.8 79.3-53 148.2-90.1-65.5 83.2-115.2 64.8-169.4-15.1-44.7-135.4 6.8-170.9 10.9-6.9-49.5 15-113 65.7-126.2"/><path fill-rule="evenodd" class="a" d="m-675.2 1305c113.1-6.4 149.7-104.4 241.3-143.9 52.5-22.5 155.5-36.4 137.1-120-74.7-15.6-166-19.3-152.1-116.7 40.6 52.8 34.5 128.9 129.5 112.3 29.1-91.2-80.3-46.8-106.5-85.5-30.2-44.5 83.5-79.4 94.8-116.5-26.2-15.3-60.2-8.9-87.4-15.1 50.1-65.6 177.7-98.4 259.3-95.3-45.2-4.6-123.3 11.8-125.4 66.7 38.8 3.6 75-13.9 112.6-22.2-47.7 58-44 184.2-107.8 218.9-39.8-95.6 280.3-374.8 367-368.2-30.9 17.8-64.9 50.9-81.9 85.4 50.2-2.4 86.8-56.4 137.4-59.5-2.6 7.6-1.6 20.6-3.6 28.6 46.9 4.5 89.1-8.6 132.1-26.5-2.2 15.4 1.9 32.4-1.4 47.4 46.4-75.5 61-120.2-38-120.2 28-11.6 54-43.5 87.3-28.8 1.5 33.4 1.8 67-6 99.7 49.6 19.7 113.5 2.8 165.5 3.3 11.1 101.5-77.4 176-152.6 235.8-18.3-53.7-14.2-75.7-73.2-97.7-64.2-23.9-126.1-28-187.9 3.5-55 27.9-68.6 87.7-116.6 114.8-111.2 62.8-80.3-96.3-72.3-155.6-31.4 40.6-17.7 122.7-34.8 172.4-23 66.7-76.7 110.7-116.6 165.8-38.9 53.7-63.1 105.4-73 168.8-5.4 34.4-3.7 73.2-32.7 94.8 33.3-62.2 101.2-167.8 185.1-161.2 19.1 50.2 24.3 106.5 24.6 160.3 10.4-108.6 55.6-186.9 138.4-241.1 4.7 62.8 102.6 29.3 138.3 11.3-38.3 45.5-97.2 74.7-129.9 124.9 54.4-25.6 102.5-71.3 160.2-86.7 1.3 41.6-14.8 86.5-23.7 126.3 37.3-16.2 72.8-41.5 115.6-40.2 10.8 49.6-2.1 92.2 50 90.4 39.2-1.4 109.9-57.4 130.3-88.5-87.3-4.7-301.3-11.8-219.9-166.1q5.3-1.7 10.2 0.7c21.5 112.9 276.4 66.6 357 60.1-34.6 1.7-169-23.3-175.9-64.6-9.2-55.9 225.4-111.1 274.9-140-21.7 30.7-19.3 68.1-26.8 104.1"/><path fill-rule="evenodd" class="a" d="m-362 674.8c23.6 82.1 86.8-71.3 90.3-94.2 8.9-59.8-6.4-266.3 106.3-246.4 25.2 54.4-3.3 131.6-14 187.1 38.7-58.1 56.2-200.7 27.4-262.3-27.2 53.2-35.3 91-102.6 48.3-50.4-32-86.5-92.5-26.8-126 44.1-24.8 142.8 6.3 188.9 18.3 53.4 13.8 147.2 67.8 201 28.1 48.1-35.5-66-61.4-61.5-131 39.5-13.8 127.4-4.5 159.5 27 26.8 26.2 18.8 39.2 24.7 73.6 17.8 104.2 96.2 85.8 191.1 87.6-35.3-9.4-81.4-44-91.3-75.6 31.6 19.7 93.7 70.7 129 75.1 68.8 8.5 104.3-93.2 101.8-153.3-67.8-16.5-97.8 28.2-154.6 49.6 40.6-35 119.6-114.7 182.1-86.8 55.4 24.7 14.3 88.8 34.9 129.4 44 86.7 161.3 23.8 222.3 7.5-53.6 45.5-90.7 113.6-148.7 151.2-18.9 12.3-40.6 12.6-59.5 29"/></g></svg>
      <main class='overflow-hidden w-screen pt-10'>
        <div
          class="z-[2] h-screen w-screen text-[#ffffff]  overflow-hidden  "
          ref="background"
        >
         
          <div class="square-grid opacity-20"></div>
          
       
       
        
  

                <section class="relative z-[1] flex h-screen  justify-start teams-section flex-wrap content-center py-10 text-white overflow-scroll">
    
    <div class="   absolute text-justify  justify-center">
                  <div class="container mx-auto  w-3/4  ">
                    <h2 class="text-3xl font-semibold text-center mb-4">Backstory</h2>
                  <div>
      
    </div>
    </div>



    <!-- <div v-for="post in posts" :key="post._id">
              <h2>{{ post.title }}</h2>
              <img :src="post.mainImage" width="100%" height="100%" :alt="post.title" />
              <Richtext :blocks="post.body" v-if="post.body">d</Richtext>
    </div> -->

    <div class=" pb-10 flex flex-col items-center  justify-center">
   
    <div class='md:w-2/3 w-screen  ' >
      
      <div class="p-[1.25rem]">
      <div class=' flex justify-center pb-3'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/q53xy5T/Wiled-Wired-Backstory-1.jpg"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>

              <Richtext class=''>In a series of artist-led workshops in collaboration with Leytonstone Toy Library and the Youth Club at Worth Unlimited held over the summer of 2023, HERVISIONS together with three digital artists (Kristina Pulejkova, Melissa Schwarz, Chun Sun), invited local residents to imagine the future of Langthorne Park set in a parallel universe and collaboratively create a narrative, landscapes and characters for a site-specific game. 

During the workshops, participants collaged words and images of local wildlife into stories and visual narratives with the help of image-generating AI systems such as Midjourney and ChatGPT while deliberating on their unperfectness and speculating on how the park could look in hundreds of years. Drawing inspiration from local plants and their medicinal properties and imagining the land of the park as a living ‘body’ inspired by Taoism (an ancient Chinese tradition of philosophy), the groups began to wonder what superpowers its ‘organs’ could harness.

The results of the workshops have since been re-interpreted by the artists into an interactive site-specific game.

            </Richtext>

      </div>

    </div>


    <div class='md:w-2/3 w-screen ' >
    
      <div class="p-[1.25rem]">
      <h2 class=" pt-20 pl-0 font-semibold mb-4">Game environment-building workshop with Melissa Schwarz</h2>

        <Richtext class=''>
            Participants were invited to take photographs of their favourite places in Langthorne Park. Together with artist Melissa Schwarz, they discussed why they liked them, what the park meant to them and how they envisioned the park to look in the future - hundreds of years from now. They then uploaded their images to Midjourney, a generative artificial intelligence program. Here, with Melissa’s help, participants crafted text-based prompts to enhance the images and add various future-like elements to them. Melissa used these images to develop the gaming environment and landscapes of Long Thorn Valley.
            </Richtext>
</div>

<br/>
<br/>

<div class="p-[1.25rem]">
    <Richtext class=''>
        See some examples of the photographs participants took and the resulting AI-enhanced images:
    </Richtext>
    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5  "
                      src="https://i.ibb.co/svh5LNC/Wiled-Wired-Backstory-2.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/KyybN3Z/Wiled-Wired-Backstory-3.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
      <div class='mobileimgpart md:flex-row flex-col  flex justify-center pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/RykBwck/Wiled-Wired-Backstory-4.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/CvsRysX/Wiled-Wired-Backstory-5.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
      <div class='mobileimgpart md:flex-row flex-col  flex justify-center pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/JnF1j63/Wiled-Wired-Backstory-6.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/Jp4cDPG/Wiled-Wired-Backstory-7.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
      <div class='mobileimgpart md:flex-row flex-col  flex justify-center pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/bs4MG3V/Wiled-Wired-Backstory-8.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/3hjVr0p/Wiled-Wired-Backstory-9.png" 
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
      <div class='mobileimgpart md:flex-row flex-col  flex justify-center pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/jGLs4JS/Wiled-Wired-Backstory-10.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/60hrctZ/Wiled-Wired-Backstory-11.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
</div>



    <div class="p-[1.25rem]">
      <h2 class=" pt-20 pl-0 font-semibold mb-4">Game character-building workshop with Chun Sun</h2>

      <Richtext class=''>
        As part of creating the characters that would inhabit Long Thorn Valley, participants randomly picked an organ or organism from a box to collage. They used dried flowers and leaves, local vegetation from the park and digitally printed flora and fauna to create their futuristic organs and organisms. Following this, they were invited to name their creation and assign a superpower to them. The result of which can be seen below on the left, and AI-enhanced images on the right:  
    </Richtext>
    </div>
    

    <div class="p-[1.25rem]">
    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/X71YJBz/Wiled-Wired-Backstory-12.jpg"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/CzT1QtK/Wiled-Wired-Backstory-13.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>    
    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/v3TH3Mm/Wiled-Wired-Backstory-14.jpg"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/6r37KWd/Wiled-Wired-Backstory-15.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>    
    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/c2xmLkW/Wiled-Wired-Backstory-16.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/Lzq3ysh/Wiled-Wired-Backstory-17.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>

    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/9qwrhwF/Wiled-Wired-Backstory-18.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/s6wNcDd/Wiled-Wired-Backstory-19.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
 
    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/Y0b6wQs/Wiled-Wired-Backstory-20.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/4f0yshg/Wiled-Wired-Backstory-21.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>
</div>


<div class="p-[1.25rem]">
    <h2 class=" pt-20 pl-0 font-semibold mb-4">Game narrative-building workshop with Kristina Pulejkova</h2>


    <Richtext class=''>
        To round off the worldbuilding for the game, participants engaged in a self-guided creative writing activity exploring other elements of Long Thorn Valley using an Exquisite Corpse format to answer questions, fill in the gaps in the story, and pass it around. How would Long Thorn Valley smell? What kind of plants would grow there? What colour would the sky be?
    </Richtext>
    <!-- <Richtext class=''>
        As part of creating the characters that would inhabit Long Thorn Valley, participants randomly picked an organ or organism from a box to collage. They used dried flowers and leaves, local vegetation from the park and digitally printed flora and fauna to create their futuristic organs and organisms. Following this, they were invited to name their creation and assign a superpower to them. The result of which can be seen below on the left, and AI-enhanced images on the right:  
    </Richtext> -->

    <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/bbqn8d3/Wiled-Wired-Backstory-25.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/B2CHKvJ/Wiled-Wired-Backstory-23.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div>     
      <div class='mobileimgpart md:flex-row flex-col flex justify-center pt-10 pb-5'>
            <img
                      class="  w-4/4 md:w-2/4  p-0 pr-5 "
                      src="https://i.ibb.co/z6RSsSr/Wiled-Wired-Backstory-22.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
                    <img
                      class="  w-4/4 md:w-2/4  p-0 "
                      src="https://i.ibb.co/bbqn8d3/Wiled-Wired-Backstory-25.png"
                      width="100%"
                      height="100%"
                      alt="loading img"
                    />
      </div> 
  <!-- <h2 class=" p-40 pl-0 font-semibold mb-4">Game environment-building workshop with Melissa Schwarz</h2> -->
</div>


</div>



    <!-- <div class="container mx-auto  md:w-1/4 w-3/4 p-[1.25rem] "> -->

        <div class="image-container z-[2] ">
                  
                  <!-- <img
                          class=" w-4/4 p-3"
                          src="logos.png"
                          width="100%"
                          height="100%"
                          alt="loading img"
                      /> -->

              </div>
              <p class="p-[1.25rem] ">&copy; 2023 Wild Wired! Rewilding Encounters of Langthorne Park. All rights reserved.</p>

    <!-- </div> -->
  
  </div>
</div>

 

  </section>





  <!-- <footer>
                <div class="image-container z-[2]">
                  
                    <img
                            class=" w-4/4 p-0"
                            src="logos.png"
                            width="100%"
                            height="100%"
                            alt="loading img"
                        />

                </div>
  
                <p>&copy; 2023 Wild Wired! All rights reserved.</p>
          </footer> -->
  
        </div>
        <nuxt />
      </main>
    </div>
  </template>
  
  <script>
  // Import the Sanity client
// import sanityClient from '@sanity/client';
// import { groq } from '@nuxtjs/sanity'
import AboutPage from '~/components/layout/AboutPage.vue';


  export default {
    name: "IndexPage",
    components: {
    AboutPage,
  },


  // async asyncData({ params, $sanity }) {
  //   const postQuery = groq`*[_type == "post"]{
  //       title, slug,_id, mainImage,body,
  //   }`;
  //   const posts = await $sanity.fetch(postQuery);
  //   return { posts };
  // },


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
        posts: [], // Initialize the posts array
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
              /* width: 20vw; */
              height: auto; /* Maintain aspect ratio */
              margin: 10px; /* Margin between images */
          }

 
  
  
  .svg-container{
  padding-top: 13.5rem !important;
  /* z-index: 0 !important; */
  }
  
  @media (max-width: 760px) {
    .mobileimgpart img{
    padding-right: 0rem;
  }
     .mobile-flex{
      display: block;
     }
  
     .mobile-text{
      font-size: 1rem;
      line-height: normal;
     }
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
  
  .postbtn{
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
    /* z-index: 1; */
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
    /* z-index: 1; */
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
    /* z-index: 2; */
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
  