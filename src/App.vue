<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-d-bg text-black dark:text-white">
    <MainHeader />
    <div class="flex flex-1">
      <TutorialsNavigation v-if="showTutorialsNav" />
      <div class="flex-1 md:m-4 px-4 py-4">
        <RouterView />
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute, RouterView } from 'vue-router'
  import MainHeader from '@/components/header/MainHeader.vue'
  import MainFooter from '@/components/footer/MainFooter.vue'
  import TutorialsNavigation from '@/components/tutorials/TutorialsNavigation.vue'

  const route = useRoute()
  const showTutorialsNav = computed(() => route.path.startsWith('/tutorials'))
</script>