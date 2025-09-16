<template>
  <footer class="flex">
    <p>
      By <a href="https://github.com/efnilite">Efnilite</a> &
      <a href="https://github.com/pepijngbr">pepijngbr</a>
    </p>
    <p class="mx-2">·</p>
    <p>Last updated at {{ currentDate }}</p>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
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
