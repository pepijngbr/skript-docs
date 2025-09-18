<template>
  <nav class="docs-category-nav bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border">
    <a href="#conditions">Conditions</a>
    <a href="#effects">Effects</a>
    <a href="#events">Events</a>
    <a href="#expressions">Expressions</a>
    <a href="#functions">Functions</a>
    <a href="#sections">Sections</a>
    <a href="#structures">Structures</a>
    <a href="#classes">Classes</a>
    <a href="#types">Types</a>
  </nav>

  <main class="bg-white dark:bg-d-bg text-black dark:text-white max-w-4xl mx-auto px-4 py-8">
    <button v-if="showBackToTop" @click="scrollToTop" title="Back to top" aria-label="Back to top"
      class="fixed right-9 bottom-9 z-[100] bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border text-white dark:text-white rounded-xl w-12 h-12 flex items-center justify-center text-2xl cursor-pointer shadow-lg transition duration-200 opacity-90 hover:bg-skript hover:border-gray-300 dark:hover:bg-skript dark:hover:text-white dark:hover:border-skript hover:opacity-100">
    <i class="bi bi-arrow-up"></i>
    </button>
    <h1>Docs</h1>
    <DocsSection title="Conditions" :items="docs.conditions" prefix="condition" id="conditions" />
    <DocsSection title="Effects" :items="docs.effects" prefix="effect" id="effects" />
    <DocsSection title="Events" :items="docs.events" prefix="event" id="events" />
    <DocsSection title="Expressions" :items="docs.expressions" prefix="expression" id="expressions" />
    <DocsSection title="Functions" :items="docs.functions" prefix="function" id="functions" />
    <DocsSection title="Sections" :items="docs.sections" prefix="section" id="sections" />
    <DocsSection title="Structures" :items="docs.structures" prefix="structure" id="structures" />
    <DocsSection title="Classes" :items="docs.classes" prefix="class" id="classes" />
    <DocsSection title="Types" :items="docs.types" prefix="type" id="types" />
  </main>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import docs from '../assets/docs/docs.json'
  import DocsSection from '../components/docs/DocsSection.vue'

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