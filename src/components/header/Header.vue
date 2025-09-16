<template>
  <header class="hidden md:flex justify-center items-center bg-[#1a1a1a] text-white">
    <div class="w-full flex justify-between items-center max-w-[1330px]">
      <!-- Logo -->
      <a href="/" title="Skriptlang" class="max-w-[80px]">
        <img src="/sk-logo.svg" alt="Skriptlang Logo" />
      </a>

      <a href="https://github.com/SkriptLang/Skript/releases/latest" class="hover:underline">
        2.12.2
      </a>

      <!-- Latest release version -->
      <a href="#">{{ $latestRelease }}</a>

      <!-- Searchbar -->
      <input type="text" class="border border-white" />

      <!-- External links / Darkmode toggle -->
      <Button click="https://discord.com/invite/skript">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="fill-white">
          <path d="M25.6933 7.10667C23.92 6.28 22 5.68 20 5.33333C19.9648 5.33383 19.9313 5.34821 19.9067 5.37333C19.6667 5.81333 19.3867 6.38667 19.2 6.82667C17.0786 6.50687 14.9213 6.50687 12.8 6.82667C12.6133 6.37333 12.3333 5.81333 12.08 5.37333C12.0667 5.34667 12.0267 5.33333 11.9867 5.33333C9.98666 5.68 8.07999 6.28 6.29333 7.10667C6.27999 7.10667 6.26666 7.12 6.25333 7.13333C2.62666 12.56 1.62666 17.84 2.11999 23.0667C2.11999 23.0933 2.13333 23.12 2.15999 23.1333C4.55999 24.8933 6.86666 25.96 9.14666 26.6667C9.18666 26.68 9.22666 26.6667 9.23999 26.64C9.77333 25.9067 10.2533 25.1333 10.6667 24.32C10.6933 24.2667 10.6667 24.2133 10.6133 24.2C9.85333 23.9067 9.13333 23.56 8.42666 23.16C8.37333 23.1333 8.37333 23.0533 8.41333 23.0133C8.55999 22.9067 8.70666 22.7867 8.85333 22.68C8.87999 22.6533 8.91999 22.6533 8.94666 22.6667C13.5333 24.76 18.48 24.76 23.0133 22.6667C23.04 22.6533 23.08 22.6533 23.1067 22.68C23.2533 22.8 23.4 22.9067 23.5467 23.0267C23.6 23.0667 23.6 23.1467 23.5333 23.1733C22.84 23.5867 22.1067 23.92 21.3467 24.2133C21.2933 24.2267 21.28 24.2933 21.2933 24.3333C21.72 25.1467 22.2 25.92 22.72 26.6533C22.76 26.6667 22.8 26.68 22.84 26.6667C25.1333 25.96 27.44 24.8933 29.84 23.1333C29.8667 23.12 29.88 23.0933 29.88 23.0667C30.4667 17.0267 28.9067 11.7867 25.7467 7.13333C25.7333 7.12 25.72 7.10667 25.6933 7.10667ZM11.36 19.88C9.98666 19.88 8.83999 18.6133 8.83999 17.0533C8.83999 15.4933 9.95999 14.2267 11.36 14.2267C12.7733 14.2267 13.8933 15.5067 13.88 17.0533C13.88 18.6133 12.76 19.88 11.36 19.88ZM20.6533 19.88C19.28 19.88 18.1333 18.6133 18.1333 17.0533C18.1333 15.4933 19.2533 14.2267 20.6533 14.2267C22.0667 14.2267 23.1867 15.5067 23.1733 17.0533C23.1733 18.6133 22.0667 19.88 20.6533 19.88Z"></path>
        </svg>
      </Button>
      <a href="https://github.com/SkriptLang" title="GitHub Organisation">GitHub</a>
      <button @click="toggleTheme()" title="Toggle Theme">Toggle Darkmode</button>

      <!-- Navigation menu -->
      <ul class="flex gap-4">
        <li>
            <RouterLink :to="{ name: 'docs' }" class="hover:underline" exact-active-class="font-bold">Docs</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'tutorials' }" class="hover:underline" exact-active-class="font-bold">Tutorials</RouterLink>
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
import Button from './Button.vue';

export default {
  name: 'Header',
  // default: {
  //     setThemeState()
  // },
  components: {
    RouterLink,
    Button
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
