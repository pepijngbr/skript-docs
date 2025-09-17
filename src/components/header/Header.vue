<template>
  <header class="hidden md:flex justify-center items-center bg-[#1a1a1a] text-white">
    <div class="w-full flex justify-between items-center max-w-[1024px] px-2">
      <!-- Logo -->
      <RouterLink :to="{ name: 'home' }" title="Skriptlang" class="max-w-[80px]">
        <img src="/sk-logo.svg" alt="Skriptlang Logo" />
      </RouterLink>

      <!-- Latest release version -->
      <a v-if="latestRelease" href="https://github.com/SkriptLang/Skript/releases/latest" target="_blank"
        rel="noopener noreferrer" class="hover:underline">
        {{ latestRelease }}
      </a>
      <span v-else>Loading…</span>

      <!-- Searchbar -->
      <div class="flex items-center bg-white text-black rounded-lg px-3 py-2 cursor-pointer 
         ring-2 ring-transparent focus-within:ring-[var(--color-skript)] 
         transition-all duration-200 ease-in-out" @click="$refs.searchInput.focus()">
        <i class="bi bi-search text-gray-500 mr-2 text-lg"></i>
        <input ref="searchInput" type="text" placeholder="Search..."
          class="flex-1 outline-none bg-transparent text-black cursor-pointer" />
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

      <!-- Navigation menu -->
      <ul class="flex gap-4">
        <li>
          <RouterLink :to="{ name: 'docs' }" class="hover:underline" exact-active-class="font-bold">Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tutorials' }" class="hover:underline" exact-active-class="font-bold">Tutorials
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tools' }" class="hover:underline" exact-active-class="font-bold">Tools</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import Button from './Button.vue'

  export default {
    name: 'Header',
    data() {
      return {
        latestRelease: '',
        isFocused: false
      }
    },
    components: {
      RouterLink,
      Button,
    },
    mounted() {
      this.retrieveLatestRelease()
    },
    methods: {
      async retrieveLatestRelease() {
        try {
          const response = await fetch(
            'https://api.github.com/repos/SkriptLang/Skript/releases/latest',
          )
          const data = await response.json()

          this.latestRelease = data.tag_name
        } catch (error) {
          console.error('Error fetching release: ', error)
          this.latestRelease = 'Error'
        }
      },
    },
  }
</script>
