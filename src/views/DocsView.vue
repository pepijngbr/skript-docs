<template>
  <nav
    class="flex flex-wrap gap-4 mb-10 rounded-lg p-4 px-6 w-fit mx-auto bg-white dark:bg-d-bg-secondary border border-l-border dark:border-d-border"
  >
    <a
      href="#conditions"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Conditions</a
    >
    <a
      href="#effects"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Effects</a
    >
    <a
      href="#events"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Events</a
    >
    <a
      href="#expressions"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Expressions</a
    >
    <a
      href="#functions"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Functions</a
    >
    <a
      href="#sections"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Sections</a
    >
    <a
      href="#structures"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Structures</a
    >
    <a
      href="#types"
      class="text-black dark:text-white hover:text-white border border-skript font-medium text-[1.08rem] px-3 py-1 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-skript)_50%,transparent)]"
      >Types</a
    >
  </nav>

  <main class="bg-white dark:bg-d-bg text-black dark:text-white max-w-4xl px-4 py-8 mx-auto">
    <DocSidebar />

    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      title="Back to top"
      aria-label="Back to top"
      class="fixed right-9 bottom-9 z-[100] bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border text-black hover:text-white dark:text-white rounded-xl w-12 h-12 flex items-center justify-center text-2xl cursor-pointer shadow-lg transition duration-200 opacity-90 hover:bg-skript dark:hover:bg-skript dark:hover:text-white dark:hover:border-skript hover:border-skript hover:opacity-100"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
    <Suspense>
      <template #default>
        <DocSection
          title="Conditions"
          :items="docs.conditions"
          prefix="condition"
          id="conditions"
        />
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
        <DocSection
          title="Expressions"
          :items="docs.expressions"
          prefix="expression"
          id="expressions"
        />
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
        <DocSection
          title="Structures"
          :items="docs.structures"
          prefix="structure"
          id="structures"
        />
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
