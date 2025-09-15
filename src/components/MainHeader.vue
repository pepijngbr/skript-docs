<template>
  <header class="hidden md:flex justify-center items-center bg-[#1a1a1a] text-white">
    <div class="w-full flex justify-between items-center max-w-[1330px]">
      <!-- Logo -->
      <a href="https://beta-docs.skriptlang.org/" title="Skriptlang" class="max-w-[80px]">
        <img src="/sk-logo.svg" alt="Skriptlang Logo" />
      </a>

      <!-- Latest release version -->
      <a href="#">{{ $latestRelease }}</a>

      <!-- Searchbar -->
      <input type="text" class="border border-white" />

      <!-- External links / Darkmode toggle -->
      <a href="https://discord.com/invite/skript" title="Join the Discord!">Discord</a>
      <a href="https://github.com/SkriptLang" title="GitHub Organisation">GitHub</a>
      <button @click="toggleTheme()" title="Toggle Theme">Toggle Darkmode</button>

      <!-- Navigation menu -->
      <ul class="flex gap-4">
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:underline">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'docs' }" class="hover:underline">Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tutorials' }" class="hover:underline">Tutorials</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tools' }" class="hover:underline">Tools</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MainHeader',
  // default: {
  //     setThemeState()
  // },
  components: {
    RouterLink,
  },
  methods: {
    toggleTheme() {
      // Logic here
    },
    setThemeState() {
      // Sets the theme state, based off cookies on page load
    },
  },
}
</script>
