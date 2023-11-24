<template>



  <div class='border-[#313131] bg-[#cdb7ef] border-4 h-screen w-screen overflow-scroll overflow-x-hidden '>
    <!-- <div class="interactive-gradient ">bg-[#ededed]</div> -->
    <div class="square-grid z-[10] pointer-events-none opacity-20"></div>
    
    <div class='flex absolute z-[100000] w-screen justify-end p-5'>
          <a class="overlay-button" href="home">
              <div class="aboutbtn z-[2000]">Esc</div>
          </a>
    </div>

    <div class='flex flex-col justify-center h-screen w-screen  text-center'>
      <div class="headtextmb z-[2000] flex flex-col justify-center items-center text-6xl textmb capitalize font-light">
        <h1 class='mbwidth leading-[1.1] tracking-tight w-4/6 text-[white]'>Meet the Organs, creatures and parasites of Longthorn Valley</h1>
        <!-- <span class="text-base pt-10 text-[#b5b5b5]">scroll down<span class="arrow">&#9660;</span></span> -->
        <span class="text-base pt-10 text-[white]"><span class="arrow">&#9660;</span></span>
      </div>
    </div>



    <div class='flex flex-col min-h-screen justify-center text-center'>

      <div class="z-[2000] flex flex-col justify-center items-center text-4xl font-light textmb capitalize ">
        <h1 class='leading-[1.1] headtextmb tracking-tight text-[white]  w-11/12 items-start flex'>Who you play</h1>
        <h1 class='leading-[1.1] subtextmb tracking-tight w-11/12 text-xl pt-7 items-start flex text-[white]'>A Siphonophores / Siph</h1>
      </div>

      <div class="mobileimgpara paddingbmobile flex flex-row justify-center  ">
        <div class="logoo  h-fit md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="siphonophore1.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
            </div>
            <div class="logoo  h-fit md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="siphonophore2.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
            </div>
            <div class="logoo  h-fit md:w-[35vw] sm:w-[25vw]">
                  <img
                      src="siphonophore.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
            </div>
      </div>

      <!-- <div class="z-[2000] flex flex-col pb-[20vh] pt-[5vh] justify-center items-center text-lg font-light textmb  ">
        <p class='textmbsizep leading-[1.1] subtextmb tracking-tight w-3/6  items-start flex text-[white]'>The Guardian of Long Thorn Valley is a siphonophorous, a multi-cultured worm-like creature that used to live in deep waters, but had to adapt to life on land due to the natural devastation caused by the now-extinct Volgi. A Guardian protects natural habitats on Other Earth. Their job is to interfere in the ecosystem as little as possible while collecting precious flora and fauna memories, preserving them for wildlife’s protection. 
          Last of their kind, Siph became a Guardian . Although a collection of many organisms, it also had a best friend - a siphonophorous called Mora in the deep oceans on Other Earth. A particularly strong nuclear ray experiment carried out by the Volgi ended up drying out the Beyond Seeing Sea, and separating Siph and Mora in the process. The sea turned into Beyond Seeing lake, Deaf pond and other small water basins scattered across the valley, 
          The Guardian can travel through dimensions. 
        </p>
      </div> -->

      <div class="z-[2000] flex flex-col pb-[25vh] pt-[5vh] justify-center items-center text-lg font-light textmb  ">
        <p class='textmbsizep leading-[1.1] subtextmb tracking-tight w-3/6  items-start flex text-[white]'>Long Thorn Valley is a place that exists in the exact location of Langthorne Park. It is a well-known fact for multidimensional creatures, as Long Thorn resides in a parallel universe, only 5000 to the nth from Earth’s universe in the Mirrored Sequence. 
          <br/><br/>
          Under the double glow of twin moons Na and Lu, on a planet that we will call Other Earth, there is a wild natural habitat called Long Thorn Valley, where creatures and nature thrive in symbiotic relationships. Creatures and plants are connected in the Valley, drawing a great circle where no animal or plant ends or begins. It is one of the last bastions of untouched nature, protected by the watchful eye of the Guardian. Creatures and plants are connected by long, transparent tentacles, stretching above the ground like huge highways for nourishment and information. Bound in hunger and in well-being, in draughts and times of fecundity, the sinuous tendrils breathe life into one big, magnificent organism cradled by the Valley.
        </p>
      </div>




      <div class="  flex flex-col justify-center  items-center text-4xl font-light capitalize ">
        <h1 class='leading-[1.1] headtextmb tracking-tight text-[white]'>Organs, creatures and parasites of Longthorn Valley</h1>
        <h1 class='subtextmb leading-[1.1] tracking-tight text-xl pb-16 pt-7 text-[white]'>Click on an Organ, creatures or parasites for more info</h1>
      </div>
     
    <div class="min-h-fit">
        <!-- parasites 1 -->
        <div class="mobileimgpara flex flex-row justify-center h-2/4 text-[white] ">


        <div  v-on:click="toggleOverlay('heart')" class="logoo flex flex-col items-center justify-center  h-[35vh] md:w-[35vw] sm:w-[25vw]">
            <img
              src="heart1.png"
              alt="Your Logo"
              class="logoo"
              width="65%"
              height="65%"
              />
              <p class=" capitalize flex justify-center">Arboricor heart (Organ)</p>
    

        <!-- overlay -->
        <div v-show="activeOverlay === 'heart'" class="overlay text-[white] items-center bg-[#dc97b4d8] flex flex-row text-left p-10">
             <div class="widthmbover padovermb text-left w-2/6">
              <p class="pb-1 text-4xl">Arboricor heart</p>
              <p class="pb-1">Location: Chest Grove</p>
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="heart1.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">“Arboricor” is a heart-shaped creature living in symbiosis with ancient, Mother trees. Usually, the oldest trees in a grove, the origin of all other trees living in the area can be traced back to them.  The vein-like tendrils of the Arboricor intertwine with the protruding roots of these old giants and provide a constant flow of nourishment from the mother trees over to the children, especially the youngest saplings. In return, Mother trees provide shelter for the Arboricor in its cave-like hollow parts in their trunks. Snuggly encased inside these wooden rib cages, the Arboricor hums its ever-pulsating song that echoes through the healthy forest.
              </p>
             </div>

             <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
              <p class=" text-4xl pb-1">Chest Grove</p>
              <!-- <p class="">Fire</p> -->
              <svg class="svgoverlay chestsvg svgin h-fit md:w-[100%] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
                      <defs>
                        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                          <path d="m-142-328h1418v1419h-1418z"/>
                        </clipPath>
                      </defs> 

                        <style>tspan{white-space:pre}.a{stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 19px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 14px;line-height: 14px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 19px;text-transform: uppercase;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}</style>
                        <g clip-path="url(#cp1)">

                            <!-- world two chest-->
                              <path fill-rule="evenodd" id="myPath3" class="a chest" d="m478 328c18.5 5.9 37 8.1 56.5 10.4 12.8 1.6 26 3.1 39 5.8 29.9 6.2 48.5 26.4 55.2 60q0 0 0 0c1 5 1.1 11.6 3.2 16.1 3.5 7.5 9.4 5.4 16.6 5.8 20.3 1.1 38.3-20 49.5-34.8q0 0 0 0c8.4-11 25.8-34.5 46.1-62.2 3.5-4.9 1.8-11.9-3.7-14.4-8.8-4.2-21.1-10.8-35.2-21.1-13.8-10.1-22.8-23.4-32.3-37.5-10-14.9-20.4-30.3-37.6-43.6-23.4-17.9-44-11.8-75.2-2.4-11.1 3.3-23.7 7.1-37.9 10.2-45.9 9.9-64.3 3.4-81.8-9.7-4.3-3.2-10.4-2.2-13.5 2.1-17.8 24.4-33 45.3-41.7 57.2-3.2 4.4-2.1 10.6 2.4 13.7 29.2 19.7 59.5 34.6 90.4 44.4z"/>
                              
                              
                              <text style="transform:matrix(1,0,0,1,357.495,231.624)" >
                              <tspan x="54.7" y="17.9" class="e">
                                CHEST 
                              </tspan>
                              <tspan x="51.9" y="46.9" class="e">
                                GROVE
                              </tspan>
                              </text>
                        </g>
              </svg>

             </div>
             <div class="widthmbover text-left w-2/6">
              <p class="pb-1">Chest Grove</p>
              <p class="">Chest Grove is the centre of the Valley and is also where the portal to Langthorne Park - the Oval Passage is located. Surrounded by ancient Mother trees, the Chest Grove is the home of the Arboricore, a heart-like creature that forms a symbiotic relationship with the blood-red trees. Due to their high levels of iron,the trees and plants leaves of Chest Grove are bright, iridescent red and have a slight glow. Tree trunks and roots vary between indigo blue and deep iris purple.
              </p>
             </div>
       </div>

  </div>
  

    <div v-on:click="toggleOverlay('kidney')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="kidney.png"
              alt="Your Logo"
              class="logoo"
              width="90%"
              height="90%"
              />
              <p class=" capitalize flex justify-center">Renalith kidney (Organ)</p>
            
              <!-- overlay -->
            <div v-show="activeOverlay === 'kidney'" class="overlay text-[white] items-center bg-[#35357dec] flex flex-row text-left p-10">
             <div class="widthmbover padovermb text-left w-2/6">
              <p class="pb-1 text-4xl">Renalith ( Kidney-like creature)</p>
              <p class="pb-1">Location: Limbic Forest</p>
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="kidney.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">“Renalith” thrives in a remarkable symbiosis with the vibrant ecosystem. Resembling an intricate tapestry woven from the planet's indigenous flora, this kidney-like creature pulsates with an otherworldly luminescence that harmonizes with the lunar rhythms. Its crystalline chambers filter the tree’s energies, distilling them into potent life essences that form the crispest memories.</p>
             </div>
             <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
              <p class=" text-4xl pb-1">Limbic Forest</p>
              <!-- <p class="">Water</p> -->
              <svg class="svgoverlay forestsvg svgin h-fit md:w-[100%] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
                      <defs>
                        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                          <path d="m-142-328h1418v1419h-1418z"/>
                        </clipPath>
                      </defs> 

                        <style>tspan{white-space:pre}.a{stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 19px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 14px;line-height: 14px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 19px;text-transform: uppercase;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}</style>
                        <g clip-path="url(#cp1)">

                            <!-- limbic forestt-->
                            <path id="myPath" fill-rule="" class="a forest" d="m800.1 251.4c-10.1 14.3-23.2 32.5-38.6 53.7-4.3 1.2-7.2 2-11.5 3.2-8.2-3.4-22.4-10.3-39.1-22.5-12.4-9.1-20.9-21.7-29.9-35.1-10-14.8-21.4-31.6-39.9-45.8-27.3-21-52.2-13.5-83.8-4.1-10.9 3.3-23.3 7-37.1 10-41.9 9.1-58.2 3.8-74.1-8-4.3-3.2-5.3-9.2-2.1-13.5 44.2-60.9 95.3-131.8 101.5-143 11.2-20.2 31.4-5.1 31.4-5.1 0 0 19.4 9.6 31.4 21.5 11.9 12 22.4 7.5 38.1 0.8 15.6-6.8 23.5-9.7 23.5-9.7 4.3-1.7 9.3 1.9 11.1 8.1l49.4 167.4c1.9 6.2 8.5 10.8 14.9 10.3l46.2-3.5c8.2-0.6 13.4 8.6 8.6 15.3zm-186.4-152.8c-6.8-8.5-33.1-15.3-40.8-15.3-7.6 0-34.8 14.5-39.8 21.7-5.1 7.2 7.5 20.4 10.9 25.9 3.4 5.5 16.2 22.5 16.2 22.5 5.1 4.3 5.9 9.5 16.9 9.8 9.8 0.3 9.2-13.6 9.2-20 0-6.4 7-17.8 11.2-21.7 4.3-3.9 9.4-3.8 19.6-4.2 10.2-0.4 3.4-10.2-3.4-18.7z"/>
                              
                            
                            <text style="transform:matrix(1,0,0,1,561.156,129.116)" >
                            <tspan x="53.7" y="17.9" class="e">
                              LIMBIC 
                            </tspan>
                            <tspan x="49.2" y="46.9" class="e">
                              FOREST
                            </tspan>
                            </text>
                        </g>
              </svg>
             </div>
             <div class="widthmbover text-left w-2/6">
              <p class="pb-1">Limbic Forest</p>
              <p class="">The Limbic Forest is a bright, swampy place, filled with colorful flowers and soft mossy undergrowth. It is the habitat of the Renalith (Kidney), which lives in symbiosis with the trees and plants of the forest. The flora of the Limbic Forest is lush with pastel colours. Some say it is the colour of the rainbow, as it is the most colorful part of the valley due to the abundance of water in the habitat. It is where Beyond seeing Lake is located.
              </p>
             </div>
              </div>
      </div>


    <div v-on:click="toggleOverlay('liver')" class="logoo flex flex-col items-center justify-center  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="liver2.png"
              alt="Your Logo"
              class="logoo"
              width="75%"
              height="75%"
              />
          <p class=" capitalize  flex justify-center">Chlora liver (Organ)</p>

          <!-- overlay -->
        <div v-show="activeOverlay === 'liver'" class="overlay text-[white] items-center bg-[#52a875ec] flex flex-row text-left p-10">
             <div class="widthmbover padovermb text-left w-2/6">
              <p class="pb-1 text-4xl">Chlora liver</p>
              <p class="pb-1">Location: Prickle Back</p>
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="liver2.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">Prickle Back has lots of green hues. Home to the Liver, Prickle Back’s flora resides on a highly toxic soil, which they can endure thanks to the symbiotic relationship with the “Chlora LIver”. The Clora LIver filters the toxins out of the soil and takes food and energy from the flora in return. Not many creatures can survive in this harsh environment, unless they have developed survival mechanisms that can battle the toxic soil.</p>
             </div>
             <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
              <p class=" text-4xl pb-1">Prickle Back</p>
              <!-- <p class="">Water</p> -->
              <svg class="svgoverlay picklesvg svgin h-fit md:w-[100%] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
                      <defs>
                        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                          <path d="m-142-328h1418v1419h-1418z"/>
                        </clipPath>
                      </defs> 

                        <style>tspan{white-space:pre}.a{stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 19px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 14px;line-height: 14px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 19px;text-transform: uppercase;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}</style>
                        <g clip-path="url(#cp1)">

                            <!-- world two chest-->
                            <path fill-rule="evenodd" id="pickle" class="a pickle" d="m570.6 552.9c4.2 3.8 10.8 3.2 14.3-1.3 14.4-19 26.2-37.9 30.4-64.5q0.2-1.3 0.4-2.6c0 0 4-20.1 4.3-28.6 0.3-8.9 0-15.8 0-25.8-1-36.4-12.2-69.4-50.2-77.3-12.7-2.6-25.7-4.1-38.2-5.6-19.2-2.3-38.9-4.7-58.4-10.8-34-10.9-103.7-52.2-106.1-51.9-2.8 0.4-163.1-96.9-163.1-96.9-5.5-3.3-14.4-3.2-19.8 0.1 0 0-71.4 44.2-84.1 55.7-23.6 21.4-49.2 42.2-39.5 53.4l18.3 23.1c4.9 4.1 23.5 4.8 55.6 4.8 32.1 0 52.7 5.5 52.7 5.5 6.3 0.7 11.8-3.8 12.2-10l0.5-7.3c0.2-2.1 2-3.9 4.1-3.9 14.1 0 47 12.6 47 12.6 2 0.5 4.4-0.7 5.1-2.7l2-4.9c0.6-1.5 2.3-2.2 3.7-1.5 95.6 46.4 270.2 204.7 308.8 240.4z"/>
                              
                              
                            <text style="transform:matrix(1,0,0,1,100.785,231.624)" >
                            <tspan x="46.3" y="17.9" class="e">
                              PRICKLE 
                            </tspan>
                            <tspan x="60" y="46.9" class="e">
                              BACK
                            </tspan>
                            </text>
                        </g>
              </svg>
             </div>
             <div class="widthmbover text-left w-2/6">
              <p class="pb-1">Prickle Back</p>
              <p class="">On a distant alien planet with two moons, an extraordinary symbiosis unfolds between the flora and a unique sentient organism known as the "Chlora Liver." Resembling a living liver, this organism harmoniously coexists with the alien plants, its iridescent, fluid-filled sacs interwoven among the roots and stems of the vibrant foliage. The Chlora Liver acts as a natural regulator, purifying the environment of the Valley by detoxifying harmful substances from the soil and converting them into vital nutrients for the flora. Its luminescent hues pulse with an ethereal glow, orchestrating a silent symphony of life within the ecosystem. In this foreign landscape, the Chlora Liver embodies the intricate balance that exists between the inhabitants and their surroundings, a testament to the wonder and interdependence that thrives in the Valley.

              </p>
             </div>
       </div>
    </div>


    <div v-on:click="toggleOverlay('lung')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="lung3.png"
              alt="Your Logo"
              class="logoo"
              width="100%"
              height="100%"
              />
              <p class=" capitalize  flex justify-center">Aerophyta lung (Organ)</p>

<!-- overlay -->
        <div v-show="activeOverlay === 'lung'" class="overlay text-[white] items-center bg-[#707070d8] flex flex-row text-left p-10">
             <div class="widthmbover padovermb text-left w-2/6">
              <p class="pb-1 text-4xl">Aerophyta lung</p>
              <p class="pb-1">Location: Thorned Diafragm</p>
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="lung3.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">The “Aerophyta” is a lung-like creature, its sinuous tendrils swaying gently in the wind, attached to ancient trees. The lung-like creature contracts, taking in the pollen expelled by the trees and plants around, only to expand and propel the tiny pollen seeds further, casting an ever wider net of trees and plants, allowing the forest to expand at a faster rate.</p>
             </div>
             <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
              <p class=" text-4xl pb-1">Thorned Diafragm</p>
              <!-- <p class="">Metal</p> -->
              <svg class="svgoverlay thornedsvg  svgin h-fit md:w-[100%] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
                      <defs>
                        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                          <path d="m-142-328h1418v1419h-1418z"/>
                        </clipPath>
                      </defs> 

                        <style>tspan{white-space:pre}.a{stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 19px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 14px;line-height: 14px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 19px;text-transform: uppercase;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}</style>
                        <g clip-path="url(#cp1)">

                            <!-- world two chest-->
                            <path fill-rule="evenodd" id="myPath4" class="a thorned" d="m767.4 313.4c-23.8 32.9-66.4 89.6-78.2 105.2 0 0-3.7 6.2-3.7 6.2q0 0 0 0c-11 14.6 13.7 40.9 22.6 51.6 12.5 15.2 27.4 29.8 45.7 37.6 25.6 11 47.2 2.5 66.6-15.5q0 0 0 0 0 0 0 0c27.2-25 35.3-62.7 49.4-95.3 11.8-27.2 22.9-52.8 71-52.8 30.4 0 52.3 1.8 67.7 3.5 6.2 0.6 11.4-4.6 10.6-10.8l-13-111.3c-0.7-6.4-6.5-11.1-12.9-10.7l-164.3 12.3c-3 0.2-5.6 1.7-7.3 4.1-14.2 20.7-38.2 53.9-54.2 75.9z"/>
                              
                              
                            <text style="transform:matrix(1,0,0,1,789.223,251.271)" >
                            <tspan x="61" y="17.9" class="e">
                              THORNED 
                            </tspan>
                            <tspan x="45.1" y="46.9" class="e">
                              DIAPHRAGM
                            </tspan>
                            </text>
                        </g>
              </svg>
             </div>
             <div class="widthmbover text-left w-2/6">
              <p class="pb-1">Thorned Diafragm</p>
              <p class="pb-1">Thorned Diaphragm is the home of the Aerophyta - a lung-like creature. A dark, cosy place, filled with thick groves and soft mossy undergrowth. The flora of this place has a metallic sheen, due to its abundance in the element Metal.
              
              </p>
              <p >Aerophyta live in symbiosis with the trees and plants of the forest. The flora of the silent forest is the dark colour and sheen of liquorice candy.</p>
             </div>
       </div>

    </div>


</div>

<!-- parasites 2 -->
<div class="mobileimgpara paddingbmobilelg flex flex-row justify-center h-2/4 text-[white] ">
<div v-on:click="toggleOverlay('max')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="Max.png"
              alt="Your Logo"
              class="logoo"
              width="100%"
              height="100%"
              />
              <p class=" capitalize  flex justify-center">Max (Creature)</p>
    
            <!-- overlay -->
              <div v-show="activeOverlay === 'max'" class="overlay text-[white] items-center bg-[#9474c3d8] flex flex-row text-left p-10">
             <div class="widthmbover padovermbless text-left w-2/6">
              <p class="pb-1 text-4xl  flex">Max  “Creature”</p>
              <!-- <p class="pb-1">Location: Chest Grove</p> -->
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="Max.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">Max appear in swarms and share memories. <br/>
Max can glow in the night and steal pollen stars created by the Two-headed flower. The main thing the Max are after is the pollen’s glow. A glowing creature, Max’s glow serves as a beacon for creatures that are looking for food in the dark parts of the Valley’s undergrowth, and a deadly trap for winged insects drawn to the light. The pollen stars enable Max to glow in the dark, a feature that Max lets other, bigger creatures exploit for their own feeding. In return, Max is spared and gets to roam the Valley, lighting the way to creatures’ advantage or detriment.  
</p>
             </div>

            
             
              </div>
    
            </div>


    <div v-on:click="toggleOverlay('parasite')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="Parasite.png"
              alt="Your Logo"
              class="logoo"
              width="100%"
              height="100%"
              />
              <p class=" capitalize  flex justify-center">Two Headed Flower (Parasite)</p>
    
                <!-- overlay -->
        <div v-show="activeOverlay === 'parasite'" class="overlay text-[white] items-center bg-[#9474c3d8] flex flex-row text-left p-10">
          <div class="widthmbover padovermblessh text-left w-[60]">
              <p class="pb-1 text-4xl justify-center flex">The Two-headed Flower (Parasite) </p>
              <!-- <p class="pb-1">Location: Chest Grove</p> -->
              <div class="logoo flex justify-center  h-3/6 w-[100%]">
                  <img
                      src="Parasite.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">Two-headed flower lives in swarms, they share memories with the swarm, creating a collective being. Lives in the Thorned Diaphragm, responds to element Metal. 
                <br/>
Part creature part plant, the Two-headed flower is a parasite which has the power to live forever. The flower has translucent tendrils that carry an enzyme that can make a creature live forever. It dwells in the Valley, latched onto trees and plants alike, taking food and drawing energy from them. In return, Two-headed flower bestows them with a lengthy life, sharing its enzyme making plants and trees resilient to the harsh climate. When frost is biting, the plants would freeze, preserving their life under the ice and when it’s dry they will dry up and live in animated suspension until the next rain. It also produces glowing, star-shaped pollen which is often stolen by the creatures Max. 
<br/>
The Volgi have hunted for this elusive parasite, wanting to conquer death, acquiring the last coveted item on their technology-induced world - eternal life. However, the Volgi didn’t know that the eternal life is only a half-life, as any Volgi taking the pollen will instantly shrivel and dry up, becoming a husk of their selves. The Volgi that tried the enzyme have met their peril by crumbling under the harsh sun of Other Earth
</p>
             </div>

            
       </div>
    
            </div>


    <div v-on:click="toggleOverlay('spleen')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="spleen2.png"
              alt="Your Logo"
              class="logoo"
              width="100%"
              height="100%"
              />
              <p class=" capitalize  flex justify-center">Syvan spleen (Organ)</p>
              
              <!-- overlay -->
          <div v-show="activeOverlay === 'spleen'" class="overlay text-[white] items-center bg-[#dfe169f0] flex flex-row text-left p-10">
             <div class="widthmbover padovermb text-left w-2/6">
              <p class="pb-1 text-4xl">Syvan spleen</p>
              <p class="pb-1">Location: Blooming Navel</p>
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="spleen2.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">Deep within the heart of the Blooming Navel, a remarkable sentient organism known as the Sylvan Spleen resides, its existence veiled in the mystique of nature's secrets. Resembling a pulsating, living spleen, this enigmatic entity thrives in perfect harmony with the mangrove flora. Its tendrils delicately weave through the intricate networks of mycelium, fostering an extraordinary web of interconnected life. The Sylvan Spleen, with its tranquil presence, acts as a guardian of balance, filtering the forest's vital energies and recycling them back into the rich, fertile soil. It imparts a subtle wisdom to the ecosystem, sharing the essence of the Valley’s cyclical existence.</p>
             </div>
             <div class="widthmbover p-[6vw] text-xl text-center w-2/6">
              <p class=" text-4xl pb-1">Blooming Navel</p>
              <!-- <p class="">Earth</p> -->
              <svg class="svgoverlay  bloomsvg  svgin h-fit md:w-[100%] w-screen  flex flex-row justify-center items-center" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 724" width="1145" height="724">
                      <defs>
                        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                          <path d="m-142-328h1418v1419h-1418z"/>
                        </clipPath>
                      </defs> 

                        <style>tspan{white-space:pre}.a{stroke:#fff;stroke-miterlimit:100;stroke-width:3}.b{font-size: 19px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.c{fill:none;stroke:#fff;stroke-miterlimit:100;stroke-width:3.2}.d{font-size: 14px;line-height: 14px;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}.e{font-size: 19px;text-transform: uppercase;fill: #ffffff;font-weight: 100;font-family: "Poppins-Medium", "Poppins"}</style>
                        <g clip-path="url(#cp1)">

                            <!-- world two chest-->
                            <path fill-rule="evenodd"  id="myPath1"  class="a bloom" d="m1134.8 575.9l-22.3 5.6c-5.9 2.4-57.5-26.6-57.5-26.6-5.6-3.1-10.8-10.7-11.5-17.1l-18.9-162.3c-0.6-4.5-4.1-8-8.6-8.5-13.8-1.4-43.8-4.2-73.2-4.2-41.8 0-50.3 19.7-62.1 47q0 0 0 0c-17.6 40.4-27 94.3-70.8 116.2q0 0 0 0c-35 17.5-72.4-2.6-98.3-25.1-18.3-15.8-32.6-57.5-53-60.3-12.1-1.4-18.2 13.5-21.6 23.6-4 11.6-6.8 23-9.9 34.9-6 23.2-19.7 44.7-33.6 63.9-2.9 4-2.3 9.5 1.4 12.8 22.2 19.9 37.9 33 44.4 34.8 30.2 8.2 418.9 34.4 418.9 34.4 1.6 0.1 3.4 1.5 3.9 2.9l4.1 10.9c1.7 4.5 5.3 7.3 8 6.4l3.9-1.4c0.5-0.2 1.4-0.4 1.9-0.4l8.9-0.6c3.2-0.2 5.6-3 5.3-6.2l-0.6-5.8c-0.2-2.2 1-4.9 2.8-6.1 0 0 22.7-11.3 27.4-10.7l6.5 0.8c1.5 0.2 3.2-0.9 3.6-2.4l8.5-49.8c1.8-6.1-1.7-9.2-7.6-6.7z"/>
                            <path fill-rule="evenodd" id="myPath2"  class="a bloom" d="m1134.8 575.9l-22.3 5.6c-5.9 2.4-57.5-26.6-57.5-26.6-5.6-3.1-10.8-10.7-11.5-17.1l-18.9-162.3c-0.6-4.5-4.1-8-8.6-8.5-13.8-1.4-43.8-4.2-73.2-4.2-41.8 0-50.3 19.7-62.1 47q0 0 0 0c-17.6 40.4-27 94.3-70.8 116.2q0 0 0 0c-35 17.5-72.4-2.6-98.3-25.1-18.3-15.8-32.6-57.5-53-60.3-12.1-1.4-18.2 13.5-21.6 23.6-4 11.6-6.8 23-9.9 34.9-6 23.2-19.7 44.7-33.6 63.9-2.9 4-2.3 9.5 1.4 12.8 22.2 19.9 37.9 33 44.4 34.8 30.2 8.2 418.9 34.4 418.9 34.4 1.6 0.1 3.4 1.5 3.9 2.9l4.1 10.9c1.7 4.5 5.3 7.3 8 6.4l3.9-1.4c0.5-0.2 1.4-0.4 1.9-0.4l8.9-0.6c3.2-0.2 5.6-3 5.3-6.2l-0.6-5.8c-0.2-2.2 1-4.9 2.8-6.1 0 0 22.7-11.3 27.4-10.7l6.5 0.8c1.5 0.2 3.2-0.9 3.6-2.4l8.5-49.8c1.8-6.1-1.7-9.2-7.6-6.7z"/>
               
                              
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
             <div class="widthmbover text-left w-2/6">
              <p class="pb-1">Blooming Navel</p>
              <p class="pb-1">(Mangroves)</p>
              <p class="">A lush ocre, orange habitat made of short, mushroom-like flora. Plants at the Blooming Navel are every orange hue and are quite meaty in texture. The Navel is the habitat of the Spleen.
              </p>
             </div>
        </div>

    </div>


    <div  v-on:click="toggleOverlay('twins')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="twins2.png"
              alt="Your Logo"
              class="logoo"
              width="110%"
              height="110%"
              />
              <p class=" capitalize  flex justify-center">Nalu (Creature)</p>
    
    
                 <!-- overlay -->
        <div v-show="activeOverlay === 'twins'" class="overlay text-[white] items-center bg-[#9474c3d8] flex flex-row text-left p-10">
          <div class="widthmbover padovermbless text-left w-2/6">
              <p class="pb-1 text-4xl justify-center flex">Nalu (Non racial twins) swarm</p>
              <!-- <p class="pb-1">Location: Chest Grove</p> -->
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="twins2.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">Can teleport to a better place. </p>
              <p class="">Nalu are winged creatures with one eye and clawed extremities. Nalu are always born as twins and are able to teleport to other places in the Valley. They also live in swarms and share memories with the swarm, making the swarm a collective memory vessel. 
If twin Nalu get separated, the swarm is not able to teleport until they are reunited. <br/>
An old Volgi legend says we Nalu twins are the children of Na and Lu - the two moons of Other Earth. Like the two moons, when they meet, they release a great power - teleport to any place we imagine. 
</p>
             </div>

             
       </div>
            </div>


    <div  v-on:click="toggleOverlay('violetta')" class="logoo flex flex-col  h-[35vh] md:w-[35vw] sm:w-[25vw]">
          <img
              src="Violetta.png"
              alt="Your Logo"
              class="logoo"
              width="110%"
              height="110%"
              />
              <p class=" capitalize  flex justify-center">Violetta (Creature)</p>
   
                <!-- overlay -->
        <div v-show="activeOverlay === 'violetta'" class="overlay text-[white] items-center bg-[#9474c3d8] flex flex-row text-left p-10">
          <div class="widthmbover padovermbless text-left w-2/6">
              <p class="pb-1 text-4xl justify-center flex">Violetta</p>
              <!-- <p class="pb-1">Location: Chest Grove</p> -->
              <div class="logoo  h-3/6 w-[100%]">
                  <img
                      src="Violetta.png"
                      alt="Your Logo"
                      class="logoo md:w-[35vw] sm:w-[25vw]"
                      width="100%"
                      height="100%"
                      />
              </div>
              <p class="">Making plants bloom </p>
              <p class="">
                    A great ally to plants of the Valley, Violetta is a creature that makes plants bloom. Wherever its tendrils touch, the blooming of the plants is activated, resulting in the most lush environments. Although most plants welcome Violetta’s help, some plants remain hidden when this beautiful creature is in their midst. The ones that remain in hiding are seasonal plants, they know that if they bloom too soon, their saplings won’t thrive due to the wrong conditions. 
                    Violetta feeds <br/> on the nectars from plants that it made blossom, and in return, carries the pollen around to other plants. Star pollen from Two-headed flower is deadly for Violetta. 
                    </p>
             </div>

             
       </div>
   
            </div>
</div>
    </div>


         <!-- parasites 3 sec -->
    <div class="mobileimgpara  paddingbmobilelg flex flex-col items-center justify-between text-left h-screen  text-[white] ">
        
        <div class="w-[55vw] withmbbot ">
            <div class="logoo mobileimgpara p-10 flex justify-center h-fit pb-10 ">
                 
                      <div class="flex flex-col  w-[40vw] withmbbot"> 
                        <p class=" capitalize text-xl pb-10  flex text-left">Fernbell (Parasite)</p>
                        <p class=" text-[1vw] withmbbot textmbsmp flex justify-center ">Fernbell is a parasite living in a swarm, attracted to water environments. Lives in symbiosis with flora from the Limbic Forest. It lives beneath the Renalith ( Kidney) and breaks down the crystals the Renlith makes into memories. These are rich fertilizer for the soil of Limbic Forest.</p>
                      </div>
                    
                     <div class="logoo imgcenterbot h-fit w-5/6">
                     <img
                      src="parasite3.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                    </div>
            </div>
            <div class="logoo mobileimgpara p-10 flex justify-center h-fit pb-10 ">
                 
                      <div class="flex flex-col w-[40vw] withmbbot"> 
                        <p class=" capitalize text-xl pb-10  flex text-left">Leeverd (Parasite)</p>
                        <p class=" text-[1vw] withmbbot textmbsmp flex justify-center ">Leeverd dwells in the Prickle Back, responding to the earth element. It lives in harmony with the green flora of Prickle Back, hiding in the wet undergrowth. It is often found attached to seasonal plants, as it suppresses the instant blooming effect that Violetta can have on them. This way, the plants are protected from an early bloom and in return, the plants give Leeverd the Earth energy it needs to be able to photosynthesize and get its nourishment from the sun.
                        </p>
                      </div>

                      <div class="logoo imgcenterbot  h-fit w-5/6">
                       <img
                      src="parasite1.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                      </div>
            </div>
            <div class="logoo mobileimgpara p-10 flex justify-center h-fit pb-10">
                 
                      <div class="flex flex-col w-[40vw] withmbbot"> 
                        <p class=" capitalize text-xl pb-10  flex text-left">Barrus (Parasite)</p>
                        <p class=" text-[1vw] withmbbot textmbsmp flex justify-center ">Lives in both Blooming Navel (Earth) and Prickle Back (wood). Although its element is earth, it can be found roaming Prickle Back due to its ability to withstand and purify toxins. It is attracted to Leeverd, but Leeverd is not interested. 
                        </p>
                      </div> 

                      <div class="logoo imgcenterbot  h-fit w-5/6">
                      <img
                      src="parasite2.png"
                      alt="Your Logo"
                      class="logoo"
                      width="100%"
                      height="100%"
                      />
                    </div>

            </div>
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

.chest{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #dc97b4;
}

.thorned{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #707070;
}

.pickle{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #52a875;
}

.forest{
  opacity: 1;
    transition: opacity 3s ease;
    fill: #35357d;
}
.bloom{
    fill: #dfe169;
}


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



