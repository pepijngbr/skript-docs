<template>
  <footer class="flex">
    <p>
      By <a href="https://github.com/efnilite">efnilite</a> &
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
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },
}
</script>
