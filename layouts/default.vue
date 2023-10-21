<template>
  <main class="min-h-full">
    <!-- <LenisComponent /> -->
    <!-- <TransitionComponent /> -->
    <!-- <AboutPage /> -->
    <LayoutHeader
      :class="
        $nuxt.$route.name != 'index' ||
        $nuxt.$route.name == 'index-bak' ||
        $nuxt.$route.name == 'about' ||
        $nuxt.$route.name == 'contact' ||
        $nuxt.$route.name != 'project-slug' ||
        $nuxt.$route.name != 'archive-slug' ||
        $nuxt.$route.name == 'work'
          ? ''
          : ' md:hidden'
      "
    ></LayoutHeader>  
    <LayoutHeaderMin
      :class="
        $nuxt.$route.name != 'index' ||
        $nuxt.$route.name == 'index-bak' ||
        $nuxt.$route.name == 'about' ||
        $nuxt.$route.name == 'contact' ||
        $nuxt.$route.name != 'project-slug' ||
        $nuxt.$route.name != 'archive-slug' ||
        $nuxt.$route.name == 'work'
          ? 'hidden'
          : 'hidden md:flex'
      "
    ></LayoutHeaderMin>
    <Nuxt />
    <!-- <LayoutFooter
      class="fixed"
      v-if="
        $nuxt.$route.name != 'index' &&
        $nuxt.$route.name != 'project-slug' &&
        $nuxt.$route.name == 'archive-slug' &&
        $nuxt.$route.name != 'slug'
      "
    ></LayoutFooter> -->
  </main>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
// import TransitionComponent from '~/components/TransitionComponent.vue';
// import Lenis from '@studio-freight/lenis'; 
// import AboutPage from '~/components/AboutPage.vue'

export default {
  methods: {
    ...mapActions(['setTitle']),
    ...mapMutations(['SET_FOOTER', 'CLOSE_MENU']),
  },
  components: {
    // TransitionComponent,
    // AboutPage,
  },
  watch: {
    $route: function (value) {
      this.setTitle(false)
      this.SET_FOOTER(false)
      this.CLOSE_MENU()
    },
  },
}
</script>
