<template>



  <div class='border-[#313131] bg-[#ededed] border-4 h-screen w-screen overflow-scroll overflow-x-hidden '>
    <!-- <div class="interactive-gradient "></div> -->
    <div class="square-grid z-[10] pointer-events-none opacity-20"></div>
    
    <div class='flex absolute z-[100000] w-screen justify-end p-5'>
          <a class="overlay-button" href="home">
              <div class="aboutbtn z-[2000]">Esc</div>
          </a>
    </div>

    <div class='flex flex-col justify-center h-screen w-screen  text-center'>
      <div class="headtextmb z-[2000] flex flex-col justify-center items-center text-6xl textmb capitalize font-light">
        <h1 class='leading-[1.1] tracking-tight w-4/6 text-[#686868]'>Meet the Organs, creatures and parasites of Longthorn Valley</h1>
        <!-- <span class="text-base pt-10 text-[#b5b5b5]">scroll down<span class="arrow">&#9660;</span></span> -->
        <span class="text-base pt-10 text-[#686868]"><span class="arrow">&#9660;</span></span>
      </div>
    </div>



    <div class='flex flex-col min-h-screen justify-center text-center'>

      <div class="z-[2000] flex flex-col justify-center items-center text-4xl font-light textmb capitalize ">
        <h1 class='leading-[1.1] headtextmb tracking-tight text-[#686868]  w-11/12 items-start flex'>Who you play</h1>
        <h1 class='leading-[1.1] subtextmb tracking-tight w-11/12 text-xl pt-7 items-start flex text-[#686868]'>Siphonophore - main character / protagonist SIPH</h1>
      </div>

      <div class="mobileimgpara paddingbmobile flex flex-row justify-center h-screen ">
        <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="siphonophore1.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
            </div>
            <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="siphonophore2.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
            </div>
            <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="siphonophore.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
            </div>
      </div>

      <div class="  flex flex-col justify-center  items-center text-4xl font-light capitalize ">
        <h1 class='leading-[1.1] headtextmb tracking-tight text-[#686868]'>Organs, creatures and parasites of Longthorn Valley</h1>
        <h1 class='subtextmb leading-[1.1] tracking-tight text-xl pb-16 pt-7 text-[#686868]'>Click on an Organ, creatures or parasites for more info</h1>
      </div>
     
      <!-- parasites 1 -->
      <div class="mobileimgpara flex flex-row justify-center h-2/4 text-[#686868] ">


        <div  v-on:click="toggleOverlay('heart')" class="logoo flex flex-col items-center  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                    <img
                      src="heart1.png"
                      alt="Your Logo"
                      class="logoo"
                      width="70%"
                      height="70%"
                      />
                      <p class=" capitalize flex justify-center">Arboricor heart (Organ)</p>
            
                <div v-show="activeOverlay === 'heart'" class="overlay text-[white] items-center bg-[#dc97b4d8] flex flex-row text-justify p-10">
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Arboricor heart</p>
                      <p class="pb-1">Location: Chest Grove</p>
                      <p class="">Arboricor is a heart-shaped creature living in symbiosis with ancient, Mother trees. Usually, the oldest trees in a grove, the origin of all other trees living in the area can be traced back to them.  The vein-like tendrils of the Arboricor intertwine with the protruding roots of these old giants and provide a constant flow of nourishment from the mother trees over to the children, especially the youngest saplings. In return, Mother trees provide shelter for the Arboricor in its cave-like hollow parts in their trunks. Snuggly encased inside these wooden ribcages, the Arboricor hums its ever-pulsating song that echoes through the healthy forest.</p>
                     </div>
                     <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
                      <p class=" text-4xl pb-1">Chest Grove</p>
                      <p class="">Fire</p>
                     </div>
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Chest Grove</p>
                      <p class="">Chest Grove is the centre of the Valley and is also where the portal to Langthorne Park - the Oval Passage is located. Surrounded by ancient Mother trees, the Chest Grove is the home of the Arboricore, a heart-like creature that forms a symbiotic relationship with the blood-red trees. Due to their high levels of iron,the trees and plants leaves of Chest Grove are bright, iridescent red and have a slight glow. Tree trunks and roots vary between indigo blue and deep iris purple.
                      </p>
                     </div>
               </div>

          </div>
          

            <div v-on:click="toggleOverlay('kidney')" class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="kidney.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize flex justify-center">Renalith kidney (Organ)</p>
                    
                    <div v-show="activeOverlay === 'kidney'" class="overlay text-[white] items-center bg-[#35357dec] flex flex-row text-justify p-10">
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Renalith ( Kidney-like creature)</p>
                      <p class="pb-1">Location: Limbic Forest</p>
                      <p class="">"Renalith" thrives in a remarkable symbiosis with the vibrant ecosystem. Resembling an intricate tapestry woven from the planet's indigenous flora, this kidney-like creature pulsates with an otherworldly luminescence that harmonizes with the lunar rhythms. Its crystalline chambers filter the tree’s energies, distilling them into potent life essences that form the crispest memories.</p>
                     </div>
                     <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
                      <p class=" text-4xl pb-1">Limbic Forest</p>
                      <p class="">Water</p>
                     </div>
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Limbic Forest</p>
                      <p class="">The Limbic Forest is a bright, swampy place, filled with colorful flowers and soft mossy undergrowth. It is the habitat of the Renalith ( Kidney), which lives in symbiosis with the trees and plants of the forest. The flora of the Limbic Forest is lush with pastel colours. Some say it is the colour of the rainbow, as it is the most colorful part of the valley due to the abundance of water in the habitat. It is where Beyond seeing Lake is located.
                      </p>
                     </div>
                      </div>
              </div>


            <div v-on:click="toggleOverlay('liver')" class="logoo flex flex-col items-center  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="liver2.png"
                      alt="Your Logo"
                      class="logoo"
                      width="85%"
                      height="85%"
                      />
                  <p class=" capitalize  flex justify-center">Chlora liver (Organ)</p>

                <div v-show="activeOverlay === 'liver'" class="overlay text-[white] items-center bg-[#35357dec] flex flex-row text-justify p-10">
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Chlora liver</p>
                      <p class="pb-1">Location: Limbic Forest</p>
                      <p class="">Prickle Back has lots of green hues. Home to the Liver, Prickle Back’s flora resides on a highly toxic soil, which they can endure thanks to the symbiotic relationship with the Chlora LIver. The Clora LIver filters the toxins out of the soil and takes food and energy from the flora in return. Not many creatures can survive in this harsh environment, unless they have developed survival mechanisms that can battle the toxic soil.</p>
                     </div>
                     <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
                      <p class=" text-4xl pb-1">Limbic Forest</p>
                      <p class="">Water</p>
                     </div>
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Limbic Forest</p>
                      <p class="">On a distant alien planet with two moons, an extraordinary symbiosis unfolds between the flora and a unique sentient organism known as the "Chlora Liver." Resembling a living liver, this organism harmoniously coexists with the alien plants, its iridescent, fluid-filled sacs interwoven among the roots and stems of the vibrant foliage. The Chlora Liver acts as a natural regulator, purifying the environment of the Valley by detoxifying harmful substances from the soil and converting them into vital nutrients for the flora. Its luminescent hues pulse with an ethereal glow, orchestrating a silent symphony of life within the ecosystem. In this foreign landscape, the Chlora lLver embodies the intricate balance that exists between the inhabitants and their surroundings, a testament to the wonder and interdependence that thrives in the Valle
                      </p>
                     </div>
               </div>
            </div>


            <div v-on:click="toggleOverlay('lung')" class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="lung3.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize  flex justify-center">Aerophyta lung (Organ)</p>


                <div v-show="activeOverlay === 'lung'" class="overlay text-[white] items-center bg-[#707070d8] flex flex-row text-justify p-10">
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Aerophyta lung</p>
                      <p class="pb-1">Location: Thorned Diafragm</p>
                      <p class="">The Aerophyta is a lung-like creature, its sinuous tendrils swaying gently in the wind, attached to ancient trees. The lung-like creature contracts, taking in the pollen expelled by the trees and plants around, only to expand and propel the tiny pollen seeds further, casting an ever wider net of trees and plants, allowing the forest to expand at a faster rate.</p>
                     </div>
                     <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
                      <p class=" text-4xl pb-1">Thorned Diafragm</p>
                      <p class="">Metal</p>
                     </div>
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Thorned Diafragm</p>
                      <p class="pb-1">Thorned Diafragm is the home of the Aerophyta - a lung-like creature. A dark, cosy place, filled with thick groves and soft mossy undergrowth. The flora of this place has a metallic sheen, due to its abundance in the element Metal. 
                      </p>
                      <p >Aerophyta live in symbiosis with the trees and plants of the forest. The flora of the silent forest is the dark colour and sheen of liquorice candy.</p>
                     </div>
               </div>

            </div>


      </div>

      <!-- parasites 2 -->
      <div class="mobileimgpara paddingbmobilelg flex flex-row justify-center h-2/4 text-[#686868] ">
        <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="Max.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize  flex justify-center">Max</p>
            </div>
            <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="Parasite.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize  flex justify-center">Two Headed Flower</p>
            </div>
            <div v-on:click="toggleOverlay('spleen')" class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="spleen2.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize  flex justify-center">Syvan spleen</p>
                      
                  <div v-show="activeOverlay === 'spleen'" class="overlay text-[white] items-center bg-[#dfe169f0] flex flex-row text-justify p-10">
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Syvan spleen</p>
                      <p class="pb-1">Location: Blooming Navel</p>
                      <p class="">Deep within the heart of the Blooming Navel, a remarkable sentient organism known as the "Sylvan Spleen" resides, its existence veiled in the mystique of nature's secrets. Resembling a pulsating, living spleen, this enigmatic entity thrives in perfect harmony with the mangrove's flora. Its tendrils delicately weave through the intricate networks of mycelium, fostering an extraordinary web of interconnected life. The Sylvan Spleen, with its tranquil presence, acts as a guardian of balance, filtering the forest's vital energies and recycling them back into the rich, fertile soil. It imparts a subtle wisdom to the ecosystem, sharing the essence of the Valley’s cyclical existence.</p>
                     </div>
                     <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
                      <p class=" text-4xl pb-1">Blooming Navel</p>
                      <p class="">Earth</p>
                     </div>
                     <div class="widthmbover text-justify w-2/6">
                      <p class="pb-1">Blooming Navel</p>
                      <p class="pb-1">(Mangroves)</p>
                      <p class="">A lush ocre, orange habitat made of short, mushroom-like flora. Plants at the Blooming Navel are every orange hue and are quite meaty in texture. The Navel is the habitat of the Spleen.
                      </p>
                     </div>
                </div>

            </div>
            <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="twins2.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize  flex justify-center">Nalu</p>
            </div>
            <div class="logoo  h-[35vh] md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="Violetta.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      <p class=" capitalize  flex justify-center">violetta</p>
            </div>
      </div>

    </div>
  </div>
 
</template>
  
  <script>
  import { setAuthentication } from '~/auth.js';
  
  export default {
    data() {
      return {
        password: '',
        activeOverlay: null,
      };
    },
    created() {
    // Listen for the custom event
    this.$root.$on('authentication-success', this.handleAuthenticationSuccess);
  },
    methods: {
      checkPassword() {
        // You can perform your password validation here
        // For simplicity, let's assume 'password123' is the correct password
   
          if (this.password.toLowerCase() === 'earth') {
          // Password is correct (case-insensitive); set authentication to true
          setAuthentication(true);
           
          // Set a flag in local storage to remember the authentication
            localStorage.setItem('authenticated', 'true');
           

           // Emit the custom event for authentication success
           this.$root.$emit('authentication-success');

          // Redirect to a protected page
        //   this.$router.push('/protected-page');
        this.$router.push('../world1');
        } else {
              // Password is incorrect, show an error message
        alert("Incorrect password. Please try again.");
        }
      },
      handleAuthenticationSuccess() {
  // Change the path fill color when authentication is successful
  const path1 = document.getElementById('myPath1');
  const path2 = document.getElementById('myPath2');

  if (path1 && path2) {
    path1.setAttribute('class', 'a bloom authenticated-color');
    path2.setAttribute('class', 'a bloom authenticated-color');
  }
},
      goBack() {
      // Use Vue Router's go method to navigate back
      this.$router.go(-1);
    },
    toggleOverlay(overlay) {
      if (this.activeOverlay === overlay) {
        this.activeOverlay = null;
      } else {
        this.activeOverlay = overlay;
      }
    },
    },
  };
  </script>
  

  <style scoped>
@media (max-width: 760px) {
  .overlay {
    display: flex;
    flex-direction: column;
}

.widthmbover{
  width: 90vw;
}

  .textmb{
    font-size: 4rem
  }

  .headtextmb{
    font-size: 2.75rem;
    display: flex;
    justify-content: center;
  }

  .mobileimgpara{
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    /* padding-bottom: 10vh; */
  }

  .paddingbmobile{
    padding-bottom: 10vh;
  }

  .paddingbmobilelg{
    padding-bottom: 15vh;
  }

  .logoo{
    height: auto;
  }

  .subtextmb{
    width: 90vw;
  }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(255, 255, 255, 0.7); */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease;
    z-index: 1000000;
}

.logoo:hover .overlay {
    opacity: 1; /* Show the overlay on hover */
}

.logoo {
    cursor: pointer;
}

.aboutbtn{
  width: auto;
  /* height: 60px; */
  /* color: #fa7dad; */
  color: rgb(31, 31, 31);
  /* background-color: #edf3ff; */
    /* background-color: #40cef6; */
  padding: 0px 15px 0px 15px;
  border: 2px solid rgb(31, 31, 31);
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


.back-button {
  width: 100%;
  padding: 10px;
  /* background-color: #fff69d; */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
}

.back-button:hover {
  /* background-color: #fff69d; */
}

.interactive-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 1s;
}

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
}


/* Add your CSS styles here */
.password-page {
  text-align: center;
  margin: 100px auto;
  padding: 20px;
  max-width: 300px;
  background-color: #40cef6;
  /* border: 1px solid #ccc; */
  /* border-color: rgba(255, 0, 160, var(--tw-border-opacity)); */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index:1000000;
}

.enter {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.enter-button {
  width: 100%;
  padding: 10px;
  background-color:#4a74e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  color: white;
}

.enter-button:hover {
  background-color: #fc9bc9;
}
</style>



