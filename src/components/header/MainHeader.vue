<template>
  <header
    class="flex sticky z-999 top-0 justify-center items-center bg-white text-black dark:bg-d-nav-bg dark:text-white border-b-2 border-l-border dark:border-d-border"
  >
    <div class="flex flex-col m-auto">
      <div class="flex justify-between items-center px-2 gap-6">
        <!-- Logo -->
        <RouterLink :to="{ name: 'home' }" title="SkriptLang" class="max-w-[80px]">
          <img :src="logoSrc" alt="SkriptLang Logo" />
        </RouterLink>

        <!-- Version -->
        <a
          :href="'https://github.com/SkriptLang/Skript/releases/tag/' + version"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold hover:underline"
        >
          {{ version }}
        </a>

        <!-- Searchbar -->
        <div class="input" @click="$refs.searchInput.focus()">
          <i class="bi bi-search text-d-search-border mr-2 text-lg"></i>
          <input
            ref="searchInput"
            type="text"
            placeholder="Search"
            class="flex-1 outline-none bg-transparent cursor-pointer"
          />
        </div>

        <!-- External links and other buttons -->
        <div class="flex gap-2">
          <HeaderButton click="https://discord.com/invite/skript">
            <i class="bi bi-discord text-3xl"></i>
          </HeaderButton>
          <HeaderButton click="https://github.com/SkriptLang">
            <i class="bi bi-github text-3xl"></i>
          </HeaderButton>
          <HeaderButton @click="toggleDarkMode" title="Toggle dark mode">
            <i :class="isDark ? 'bi bi-moon text-3xl' : 'bi bi-sun text-3xl'"></i>
          </HeaderButton>
          <HeaderButton class="btn-search" title="Search" @click="toggleFullscreenSearchbar">
            <i class="bi bi-search text-3xl"></i>
          </HeaderButton>
        </div>
      </div>

      <!-- Navigation menu -->
      <ul class="flex gap-2 sm:gap-4 pt-2 pb-4 justify-center">
        <li>
          <RouterLink :to="{ name: 'docs' }" class="page bg-docs" exact-active-class="font-bold">
            Docs
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'tutorials' }"
            class="page bg-tutorials"
            :class="{ 'font-bold': $route.path.startsWith('/tutorials') }"
          >
            Tutorials
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tools' }" class="page bg-tools" exact-active-class="font-bold">
            Tools
          </RouterLink>
        </li>
      </ul>

      <!-- Fullscreen Search Overlay for Tablet/Mobile -->
      <transition name="fade">
        <div
          v-if="showFullscreenSearch"
          class="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white/75 dark:bg-black/75 backdrop-blur-md"
        >
          <!-- Close button -->
          <button
            class="absolute top-4 right-4 text-3xl text-black/75 dark:text-white/75 hover:text-black dark:hover:text-white transition cursor-pointer"
            @click="toggleFullscreenSearchbar"
          >
            <i class="bi bi-x-lg"></i>
          </button>

          <!-- Search input -->
          <div
            class="flex items-center w-[90%] max-w-2xl bg-l-search-fill dark:bg-d-search-fill text-black dark:text-white rounded-lg px-4 py-3 ring-2 ring-l-search-border dark:ring-d-search-border focus-within:ring-skript transition-all duration-200 ease-in-out"
            @click="$refs.fullscreenSearchInput.focus()"
          >
            <i class="bi bi-search text-d-search-border mr-3 text-xl"></i>
            <input
              ref="fullscreenSearchInput"
              type="text"
              placeholder="Search..."
              class="flex-1 outline-none bg-transparent text-lg"
              v-model="searchQuery"
            />
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import HeaderButton from './HeaderButton.vue'
import docs from '@/assets/docs/docs.json'
import { useThemeStore } from '@/stores/theme'

export default {
  name: 'MainHeader',
  components: {
    RouterLink,
    HeaderButton,
  },
  data() {
    return {
      version: docs.skriptVersion,
      theme: useThemeStore(),
      showFullscreenSearch: false,
      searchQuery: '',
    }
  },
  mounted() {
    this.theme.initTheme()
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  computed: {
    isDark() {
      return this.theme.isDark
    },
    logoSrc() {
      return this.isDark ? '/sk-logo.svg' : '/sk-logo-dark.svg'
    },
  },
  methods: {
    toggleDarkMode() {
      this.theme.toggleDark()
    },
    toggleFullscreenSearchbar() {
      this.showFullscreenSearch = !this.showFullscreenSearch
      if (this.showFullscreenSearch) {
        document.body.style.overflow = 'hidden'
        this.$nextTick(() => this.$refs.fullscreenSearchInput.focus())
        this.searchQuery = ''
      } else {
        document.body.style.overflow = ''
      }
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.showFullscreenSearch) {
        this.toggleFullscreenSearchbar()
      }
    },
  },
}
</script>

<style scoped>
@reference "../../styles/app.css";

.input {
  @apply hidden md:flex items-center w-[500px] bg-l-search-fill dark:bg-d-search-fill text-black dark:text-white rounded-lg px-3 py-2 cursor-pointer ring-2 ring-l-search-border dark:ring-d-search-border focus-within:ring-skript transition-all duration-200 ease-in-out;
}

.page {
  @apply text-white text-xl px-4 sm:px-6 md:px-8 py-1.5 rounded-lg font-outfit;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
