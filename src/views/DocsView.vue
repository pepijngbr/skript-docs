<template>
  <nav class="docs-category-nav">
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

  <main>
    <button v-if="showBackToTop" @click="scrollToTop" title="Back to top" aria-label="Back to top"
      class="fixed right-9 bottom-9 z-[100] bg-black/30 text-white border-none rounded-xl w-12 h-12 flex items-center justify-center text-2xl cursor-pointer shadow-lg transition duration-200 opacity-90 hover:bg-[var(--color-skript)] hover:opacity-100">
      <i class="bi bi-arrow-up"></i>
    </button>
    <h1>Docs</h1>
    <DocsSection title="Conditions" :items="docs.conditions" prefix="condition" />
    <DocsSection title="Effects" :items="docs.effects" prefix="effect" />
    <DocsSection title="Events" :items="docs.events" prefix="event" />
    <DocsSection title="Expressions" :items="docs.expressions" prefix="expression" />
    <DocsSection title="Functions" :items="docs.functions" prefix="function" />
    <DocsSection title="Sections" :items="docs.sections" prefix="section" />
    <DocsSection title="Structures" :items="docs.structures" prefix="structure" />
    <DocsSection title="Classes" :items="docs.classes" prefix="class" />
    <DocsSection title="Types" :items="docs.types" prefix="type" />
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
    background: #f6f8fa;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    border: 2px solid #e0e0e0;
  }

  .docs-category-nav a {
    color: #0077cc;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.08rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
  }

  .docs-category-nav a:hover {
    background: #e0eaff;
    color: #005999;
  }
</style>