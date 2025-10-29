<template>
  <footer
    class="flex w-full items-center justify-center bg-white text-black dark:bg-black dark:text-white py-2"
  >
    <p>SkriptLang Docs Preview</p>
    <span class="mx-2">&middot;</span>
    <p>
      By <a href="https://github.com/efnilite" target="_blank" class="underline">Efnilite</a> &
      <a href="https://github.com/pepijngbr" target="_blank" class="underline">pepijngbr</a>
    </p>
    <span class="mx-2">&middot;</span>
    <p>Last updated: {{ latestCommitDate }}</p>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      latestCommitDate: '',
      loading: true,
    }
  },
  mounted() {
    this.fetchLatestCommit()
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1)
      const day = String(date.getDate())
      return `${day}/${month}/${year}`
    },
    async fetchLatestCommit() {
      const owner = 'SkriptLang'
      const repo = 'skript-docs'
      const branches = ['main']
      try {
        for (const branch of branches) {
          const res = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1`,
          )
          if (!res.ok) continue
          const data = await res.json()
          if (Array.isArray(data) && data.length) {
            const commit = data[0]
            const dateStr = commit.commit?.author?.date || commit.commit?.committer?.date
            if (dateStr) this.latestCommitDate = this.formatDate(new Date(dateStr))
            break
          }
        }
      } catch (e) {
        console.log('Error: ', e)
      } finally {
        this.latestCommitDate = this.latestCommitDate || 'not found'
        this.loading = false
      }
    },
  },
}
</script>
