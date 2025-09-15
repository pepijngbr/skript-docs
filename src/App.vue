<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>

<script>
// import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
// import { useUserStore } from '@/stores/user.js';
// import { useSiteThemeStore } from '@/stores/siteTheme.js';
// import { useHead } from '@vueuse/head';

export default {
  name: 'App',
  components: {
    RouterView,
    MainHeader,
    MainFooter,
  },
}
</script>
