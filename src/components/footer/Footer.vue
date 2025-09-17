<template>
  <footer class="flex w-full items-center justify-center bg-black text-white py-2">
    <p>SkriptLang Docs Preview</p>
    <p class="mx-2">&middot;</p>
    <p>
      By <a href="https://github.com/efnilite" target="_blank" class="underline">Efnilite</a> &
      <a href="https://github.com/pepijngbr" target="_blank" class="underline">pepijngbr</a>
    </p>
    <p class="mx-2">&middot;</p>
    <p>Last updated at {{ currentDate }}</p>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentDate: this.formatDate(new Date()),
      }
    },
    methods: {
      formatDate(date) {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1)
        const day = String(date.getDate())
        return `${day}/${month}/${year}`
      },
    },
  }
</script>
