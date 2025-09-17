<template>
  <Header />
  <RouterView />
  <MainFooter />
</template>

<script>
  import { RouterView } from 'vue-router'
  import Header from '@/components/header/Header.vue'
  import MainFooter from '@/components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      RouterView,
      Header,
      MainFooter,
    },
  }
</script>
