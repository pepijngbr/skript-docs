<template>
  <nav class="docs-category-nav w-fit mx-auto bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border">
    <a href="#conditions">Conditions</a>
    <a href="#effects">Effects</a>
    <a href="#events">Events</a>
    <a href="#expressions">Expressions</a>
    <a href="#functions">Functions</a>
    <a href="#sections">Sections</a>
    <a href="#structures">Structures</a>
    <a href="#types">Types</a>
  </nav>

  <DocSidebar />

  <main class="bg-white dark:bg-d-bg text-black dark:text-white max-w-4xl mx-auto px-4 py-8">
    <button v-if="showBackToTop" @click="scrollToTop" title="Back to top" aria-label="Back to top"
      class="fixed right-9 bottom-9 z-[100] bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border text-white dark:text-white rounded-xl w-12 h-12 flex items-center justify-center text-2xl cursor-pointer shadow-lg transition duration-200 opacity-90 hover:bg-skript hover:border-gray-300 dark:hover:bg-skript dark:hover:text-white dark:hover:border-skript hover:opacity-100">
    <i class="bi bi-arrow-up"></i>
    </button>
    <Suspense>
      <template #default>
        <DocSection title="Conditions" :items="docs.conditions" prefix="condition" id="conditions" />
      </template>
      <template #fallback>
        <div>Loading Conditions...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Effects" :items="docs.effects" prefix="effect" id="effects" />
      </template>
      <template #fallback>
        <div>Loading Effects...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Events" :items="docs.events" prefix="event" id="events" />
      </template>
      <template #fallback>
        <div>Loading Events...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Expressions" :items="docs.expressions" prefix="expression" id="expressions" />
      </template>
      <template #fallback>
        <div>Loading Expressions...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Functions" :items="docs.functions" prefix="function" id="functions" />
      </template>
      <template #fallback>
        <div>Loading Functions...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Sections" :items="docs.sections" prefix="section" id="sections" />
      </template>
      <template #fallback>
        <div>Loading Sections...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Structures" :items="docs.structures" prefix="structure" id="structures" />
      </template>
      <template #fallback>
        <div>Loading Structures...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <DocSection title="Types" :items="docs.types" prefix="type" id="types" />
      </template>
      <template #fallback>
        <div>Loading Types...</div>
      </template>
    </Suspense>
  </main>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, Suspense } from 'vue'
  import docs from '@/assets/docs/docs.json'
  import DocSection from '@/components/docs/DocSection.vue'
  import DocSidebar from '@/components/docs/DocSidebar.vue'

  const showBackToTop = ref(false)

  function handleScroll() {
    showBackToTop.value = window.scrollY > 0
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
  .docs-category-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2.5rem;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
  }

  .docs-category-nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.08rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
  }

  .docs-category-nav a:hover {
    background: color-mix(in srgb, var(--color-skript) 50%, transparent);
  }
</style>