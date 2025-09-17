<template>
  <header
    class="hidden sticky top-0 md:flex justify-center items-center bg-d-nav-bg text-white border-b-2 border-gray-500">
    <div class="flex flex-col m-auto">
      <div class="flex justify-between items-center px-2 gap-6">
        <!-- Logo -->
        <RouterLink :to="{ name: 'home' }" title="SkriptLang" class="max-w-[80px]">
          <img src="/sk-logo.svg" alt="SkriptLang Logo" />
        </RouterLink>

        <!-- Version -->
        <a :href="'https://github.com/SkriptLang/Skript/releases/tag/' + version" target="_blank"
          rel="noopener noreferrer" class="font-bold hover:underline">
          {{ version }}
        </a>

        <!-- Searchbar -->
        <div class="input" @click="$refs.searchInput.focus()">
          <i class="bi bi-search text-gray-500 mr-2 text-lg"></i>
          <input ref="searchInput" type="text" placeholder="Search"
            class="flex-1 outline-none bg-transparent cursor-pointer" />
        </div>

        <!-- External links / Darkmode toggle -->
        <div class="flex gap-2">
          <Button click="https://discord.com/invite/skript">
            <i class="bi bi-discord text-3xl"></i>
          </Button>
          <Button click="https://github.com/SkriptLang">
            <i class="bi bi-github text-3xl"></i>
          </Button>
          <Button>
            <i class="bi bi-sun text-3xl"></i>
          </Button>
        </div>
      </div>

      <!-- Navigation menu -->
      <ul class="flex gap-4 pt-2 pb-4 justify-center">
        <li>
          <RouterLink :to="{ name: 'docs' }" class="page bg-docs" exact-active-class="font-bold">
            Docs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tutorials' }" class="page bg-tutorials" exact-active-class="font-bold">
            Tutorials
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tools' }" class="page bg-tools" exact-active-class="font-bold">
            Tools
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import Button from './Button.vue'
  import docs from '@/assets/docs/docs.json'

  export default {
    name: 'Header',
    data() {
      return {
        version: docs.skriptVersion
      }
    },
    components: {
      RouterLink,
      Button,
    },
  }
</script>

<style scoped>
  @reference "../../styles/app.css";

  .input {
    @apply flex items-center w-[500px] bg-d-search-fill text-white rounded-lg px-3 py-2 cursor-pointer 
         ring-2 ring-d-search-border focus-within:ring-skript
         transition-all duration-200 ease-in-out;
  }

  .page {
    @apply text-white text-xl px-8 py-1.5 rounded-lg font-outfit;
  }
</style>
