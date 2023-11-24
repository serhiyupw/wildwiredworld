<template>
  <!-- mt-5 border-[#ff00a0] border-4-->

  <div class='bg-[#ffaf62]'>
    <!-- <AboutPage /> -->
    <main class='textlook text-base overflow-hidden '>
      <div
        class="z-[2] h-screen  text-[#ffffff]  overflow-hidden  "
        ref="background"
      >
        <!-- <div class="interactive-gradient "></div> -->
        <div class="square-grid opacity-20"></div>
        
        <div
        class="title-sec absolute z-[2]  text-xl  left-0 w-full text-center flex flex-col justify-center z-2"
        :style="{ top: `${titleTop}px`, width: titleWidth }"
      >
        <!-- text-[#fff496] italic Wild Wired! -->
                  <div class='flex items-start justify-between'>
                  <div class=" font-medium text-6xl w-3/4 justify-start text-left leading-[1.1] tracking-tight  text-[#ffffff]">
                      <div class=" flex mobile-flex text-3xl ">
                      <!-- <div class=" w-2/5 p-0">
                          <img
                              src="group.png"
                              width="100%"
                              height="100%"
                              alt="logo"
                              /> 
                      </div> -->
                      
                                  
                      </div>
                  </div>
                  <!-- <div class='flex'>
                       
                          <a class="overlay-button" href="./">
                              <div class="aboutbtn z-[2000]">Back</div>
                          </a>
                  </div> -->
                  </div>
              </div>
     
      



<!-- Teams/Collaborators Section -->
<section class=" pt-10 relative z-[100]   overflow-scroll h-screen text-white">
              <!-- <section class="pt-[40rem]  overflow-scroll  relative z-[1000000] flex h-screen justify-start teams-section flex-wrap content-center py-10 text-white"> -->
  <div class="container mx-auto p-10 pt-0 text-left">
    <h2 class="text-3xl font-semibold mb-4 text-center">Collaborators</h2>
    <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
      <!-- Collaborator 1 -->
      <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="cell.png"
            alt="Collaborator 2"
            class="w-full h-auto rounded-lg"
          /> -->
         
          <a target="_blank" href="https://kristinapulejkova.com/"><h3 class="text-xl font-semibold mt-2">Kristina Pulejkova</h3></a>
          <p class="text-[#38664d]">(Game Narrative, Map, Mosaic Monuments)</p>
          <p>is a London-based visual artist whose interdisciplinary practice is informed by science and technology. Kristina’s work explores how the use of technology might lead to greater forms of sustainability in human-nature relationships. Working across moving image, sound and installation, she aims to build subjective narratives based on scientific data and principles. In her work, she tends to imagine voices from creatures, objects and even atoms to inhabit non-human perspectives. Through the use of immersive technology, her works often deal with environmental issues, telling personal stories that place audiences at the centre of the scene, allowing for a protagonist’s perspective and a different way of seeing.
          </p>
        </div>
      </div>

      <!-- Collaborator 2 -->
      <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="fish.png"
            alt="Collaborator 2"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://melissaschwarz.com/"><h3 class="text-xl font-semibold mt-2">Melissa Schwarz</h3></a>
          <p class="text-[#38664d]"> (Game Environment, Portal)</p>
          <p> is a German interdisciplinary artist, designer and researcher based in London. Her research and practice is mainly concerned with topics around ecology, environments and speculative futures. As such, she examines socio-political narratives, nature concepts and multiverse theories. She creates work which uses different media for her poetic storytelling, from more traditional mediums to 3D. Melissa is an Associate Lecturer at The University of the Arts London and Goldsmith’s, University of London.</p>
        </div>
      </div>

      <!-- Collaborator 3 -->
      <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://www.instagram.com/sundachun/"><h3 class="text-xl font-semibold mt-2">Chun Sun</h3></a>
          <p class="text-[#38664d]">(Game Characters: Arboricor - Heart, Sylvan - Spleen, Aerophyta - Lung, Renalith - Kidney, Chlora - Liver, Violetta, Max, Nalu, Two-headed Flower)</p>
          <p> is a multi-disciplinary artist from China. Her work incorporates various media such as digital art, installation, painting, and film, and her recent work revolves around Taoist theory and science fiction storytelling. Recent projects include collaborations and exhibitions with The Power Station of Art (PSA), Shanghai Himalayas Museum, CICA Museum, Genoa Biennial, Aranya Theatre Festival, SXSW, William Morris Gallery, Onkaos and HERVISIONS.
          </p>
        </div>
      </div>


       <!-- Collaborator 3 -->
       <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://shonee.space/"><h3 class="text-xl font-semibold mt-2">Bianca Shonee Arroyo-Kreimes</h3></a>
          <p class="text-[#38664d]">(Game Characters: Siphnonophore, Fernbell, Leeverd, Barrus, Cnidaria)</p>
          <p>is a Montreal-based Costa Rican-Canadian digital media artist. Growing up on the edge of a rainforest in Costa Rica nourishes her creative practice as her work strives to resurrect the meaning of nature’s place in her own life now as both an urbanite and multidisciplinary artist. Within the virtual worlds she creates, 3D embodiments of organisms
            borrow shapes, colours, and stories from plants and animals within our own world, while
            remaining singular. This conscious decision is intended to inspire a newly discovered
            appreciation of the endangered, non-human world that humanity often takes for granted as her
            portrayals seek to embody humankind’s seemingly objective and narrow misunderstanding of
            nature in this time of ecological crisis.
            </p>
        </div>
      </div>

       <!-- Collaborator 3 -->
       <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://www.instagram.com/eternal.enginee/"><h3 class="text-xl font-semibold mt-2">Eternal Engine</h3></a>
          <p class="text-[#38664d]"> (Game Developer and Visual Artist)</p>
          <p>are an artistic queer duo of Jagoda Wójtowicz (she/her) and Martix Navrot (he/him). Their experimental research combines audio-visual praxis and prototypes of virtuality which explore the performativity of virtual spaces and intermedium anomalies (3D, AI, VR, XR). Eternal Engine use speculation and queer methodologies in their artistic praixs, to investigate the Future/s of technology and quantum reality. To achieve this they push the boundaries of the Real and the Virtual with seemingly unnoticeable steps – by a millimeter, by an atom, by a pixel.
          </p>
        </div>
      </div>

       <!-- Collaborator 3 -->
       <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://alessiaarcuri.com/"><h3 class="text-xl font-semibold mt-2">Alessia Arcuri</h3></a>
          <p class="text-[#38664d]">(Graphic Design)</p>
          <p> is an independent designer working in the fields of arts, culture and education. Within the cultural sector, she develops projects and resources that facilitate and inform visitor's experience and recent clients include: Tate, Natural History Museum, the British Museum and Mozilla. She is also a lecturer at Kingston School of Art, Department of Graphic Design; a member of Evening Class, a collective exploring forms of self- organised learning at their intersection with design practice and labour; and, alongside John Philip Sage, she developed and run the workshop series DRAMA.
            </p>
        </div>
      </div>

       <!-- Collaborator 3 -->
       <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://www.neriankey.me/"><h3 class="text-xl font-semibold mt-2">Nerian Keywan</h3></a>
          <p class="text-[#38664d]">(Animation and Motion Design)</p>
          <p>is a Palestinian visual artist currently based in London. She comes from a background in Visual communication, Philosophy, and History of Art. In June 2023, she obtained her master's degree in Animation from the Royal College of Art (RCA). She has over 5 years of experience in illustration, animation both in 2D and 3D, as well as graphic design. In addition to her independent practice, she works as a Unity resident tutor at Kingston University.
          </p>
        </div>
      </div>




       <!-- Collaborator 3 -->
       <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://www.instagram.com/hervisions_/"><h3 class="text-xl font-semibold mt-2">Zaiba Jabbar</h3></a>
          <p class="text-[#38664d]">(Founder of HERVISIONS, Creative director, Curator and Creative Producer)</p>
          <p> is an award-winning director, moving image artist, commissioner, independent curator and Founder of HERVISIONS. She’s interested in the democratisation and accessibility by how we experience art outside the white cube. Her curatorial project HERVISIONS is an investigation into how people in the margins are using technology to create art outside of traditional formats, making space for themselves through the experience of expanded moving image. She is a leader in augmented reality and digital art exhibitions online and offline working with partners and institutes that include Tate Modern, LUX, i-D, Google Arts and Culture, IAMSOUND, The London College of Fashion, Loom Festival, Spectacles, arebyte, Furtherfield and The Photographers Gallery. Zaiba was curator in residence at LUX in (2018) and a board member of Abandon Normal Devices.</p>
        </div>
      </div>


       <!-- Collaborator 3 -->
       <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://tanyaboyarkina.com/"><h3 class="text-xl font-semibold mt-2">Tanya Boyarkina</h3></a>
          <p class="text-[#38664d]">(Curator and Creative Producer)</p>
          <p>is a London-based curator and creative/digital producer aiming to demystify complex technological processes through playful, collaborative and participative formats. She has been working with museums, galleries, independent art institutions (including Tate, Furtherfield and Mediale) and diverse artists for over a decade, curating and producing online and real-life events which connect audiences of all ages and abilities with evolving digital cultures. Tanya is a co-Founder of Compiler.zone, a platform for digital art, curation, and critical technical practice addressing contemporary socio-political challenges.
          </p>
        </div>
      </div>




     <!-- Collaborator 3 -->
     <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <!-- <img
            src="octo.png"
            alt="Collaborator 3"
            class="w-full h-auto rounded-lg"
          /> -->
          <a target="_blank" href="https://wmgallery.org.uk/whats-on/radical-landscapes-events-and-activities-programme/"><h3 class="text-xl font-semibold mt-2">Christine Lai</h3></a>
          <p class="text-[#38664d]">(Public Programme Curator at the William Morris Gallery)</p>
          <p>is a British-born Chinese cultural producer/curator. Her role at the William Morris Gallery is founded upon making the museum a useful resource for Waltham Forest residents and translating Morris’ core values around access to creative arts, environmentalism and socialist ideologies into an ambitious and relevant public programme. Christine has previously worked at a wide range of cultural institutions including Serpentine, Tate, National Galleries of Scotland, Kakilang (formerly Chinese Arts Now). She is also 1/7 of the collective Baesianz, a London-based collective and platform dedicated to celebrating artists of Asian heritage.
          </p>
        </div>
      </div>



     <!-- Collaborator 3 -->
     <div class="col-span-1">
        <div class="collaborator-card p-4 border border-[#455baf] rounded-lg">
          <a target="_blank" href="https://instagram.com/ndelap?igshid=OGQ5ZDc2ODk2ZA==">
            <h3 class="text-xl font-semibold mt-2">Nicholas Delap</h3></a>
          <p class="text-[#38664d]">(Game Developer and Visual Artist)</p>
          <p>is a digital artist, posthumanism or post-humanism who explores wilderness, Post Humanism and re-wilding as themes within his artworks, creating immersive and other worldly virtual environments, sculptures and video installations. His work seeks to undermine the traditional boundaries between the Human, The Natural and the Technological.
          </p>
        </div>
      </div>



        <!-- <footer> -->
        <!-- Footer content -->
        <div class="col-span-1 container mx-auto text-center w-3/4  ">

<!-- <div class="image-container z-[2]">
        
        <img
                class=" w-4/4 p-3"
                src="logos.png"
                width="100%"
                height="100%"
                alt="Your Image Alt Text"
            />

    </div> -->
    <p>&copy; 2023 Wild Wired! Rewilding Encounters of Langthorne Park. All rights reserved.</p>

</div>
<!-- </footer> -->


    </div>
  </div>
</section>





      </div>
      <nuxt />
    </main>
  </div>
</template>

<script>
import AboutPage from '~/components/layout/AboutPage.vue';

export default {
  name: "IndexPage",
  components: {
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
 .textlook{
        text-transform: none !important;
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
            /* width: 20vw;  */
            height: auto; /* Maintain aspect ratio */
            margin: 10px; /* Margin between images */
        }



.svg-container{
padding-top: 13.5rem !important;
/* z-index: 0 !important; */
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
