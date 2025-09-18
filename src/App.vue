<template>
  <div class="flex flex-col min-h-screen dark:bg-d-bg">
    <Header />
    <div class="flex flex-1">
      <TutorialsNavigation v-if="showTutorialsNav" />
      <div class="flex-1 md:m-4 px-4 md:pl-24 py-4">
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute, RouterView } from 'vue-router'
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import TutorialsNavigation from '@/components/tutorials/TutorialsNavigation.vue'

  const route = useRoute()
  const showTutorialsNav = computed(() => route.path.startsWith('/tutorials'))
</script>