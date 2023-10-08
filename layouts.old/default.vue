<!-- <template>
  <main class="min-h-full">
    <LayoutHeader
      :class="
        $nuxt.$route.name == 'index' ||
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
        $nuxt.$route.name == 'index' ||
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
  </main>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapActions(['setTitle']),
    ...mapMutations(['SET_FOOTER', 'CLOSE_MENU']),
  },
  mounted() {


    // Start the requestAnimationFrame loop
    requestAnimationFrame(raf);
  },
  components: {
    TransitionComponent,
    AboutPage,
  },
  watch: {
    $route: function (value) {
      this.setTitle(false)
      this.SET_FOOTER(false)
      this.CLOSE_MENU()
    },
  },
}
</script> -->
