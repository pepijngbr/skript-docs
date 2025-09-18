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
    <section id="conditions">
      <h2>Conditions</h2>
      <div v-for="(item, idx) in docs.conditions" :key="'cond-' + idx"
        :id="'condition-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#condition-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="effects">
      <h2>Effects</h2>
      <div v-for="(item, idx) in docs.effects" :key="'eff-' + idx"
        :id="'effect-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#effect-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="events">
      <h2>Events</h2>
      <div v-for="(item, idx) in docs.events" :key="'event-' + idx"
        :id="'event-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#event-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="expressions">
      <h2>Expressions</h2>
      <div v-for="(item, idx) in docs.expressions" :key="'expr-' + idx"
        :id="'expression-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#expression-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="functions">
      <h2>Functions</h2>
      <div v-for="(item, idx) in docs.functions" :key="'func-' + idx"
        :id="'function-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#function-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="sections">
      <h2>Sections</h2>
      <div v-for="(item, idx) in docs.sections" :key="'section-' + idx"
        :id="'section-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#section-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="structures">
      <h2>Structures</h2>
      <div v-for="(item, idx) in docs.structures" :key="'structure-' + idx"
        :id="'structure-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#structure-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="classes">
      <h2>Classes</h2>
      <div v-for="(item, idx) in docs.classes" :key="'class-' + idx"
        :id="'class-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#class-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="types">
      <h2>Types</h2>
      <div v-for="(item, idx) in docs.types" :key="'type-' + idx"
        :id="'type-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
        class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
        <h3>
          <a :href="'#type-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
            {{ item.name || 'Unknown name' }}
          </a>
        </h3>
        <ul class="list-none p-0 m-0">
          <li v-for="(val, key) in item" :key="key" class="mb-1">
            <strong class="text-blue-700">{{ key }}:</strong> <span v-if="typeof val === 'object' && val !== null">{{
              JSON.stringify(val) }}</span><span v-else>{{ val }}</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import docs from '../assets/docs/docs.json'

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