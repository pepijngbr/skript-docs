<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
  import { RouterView } from 'vue-router'
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'

  export default {
    name: 'App',
    components: {
      RouterView,
      Header,
      Footer,
    },
  }
</script>
