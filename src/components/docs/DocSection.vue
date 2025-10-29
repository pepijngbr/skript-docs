<template>
  <section :id="prefix">
    <h2
      :id="slug"
      @click="copyLink"
      class="group relative mb-4 flex items-center gap-2 cursor-pointer scroll-mt-[7rem] select-none"
    >
      <span
        class="absolute -left-6 opacity-0 group-hover:opacity-100 text-skript transition-opacity duration-200"
      >
        #
      </span>
      <span class="transition-colors duration-200 group-hover:text-skript">
        {{ title }}
      </span>
    </h2>
    <div
      v-for="(item, idx) in items"
      :key="prefix + '-' + idx"
      :id="prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
    >
      <DocElement
        :prefix="prefix"
        :name="item.name"
        :since="item.since"
        :deprecated="item.deprecated"
        :description="item.description"
        :patterns="item.patterns"
        :examples="item.examples"
        :requirements="item.requirements"
        :eventValues="item.eventValues"
      />
    </div>
  </section>
</template>

<script>
import DocElement from './DocElement.vue'

export default {
  name: 'DocsSection',
  components: { DocElement },
  props: {
    title: String,
    items: Array,
    prefix: String,
  },
  computed: {
    slug() {
      return (
        this.title
          ?.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-') || ''
      )
    },
  },
  methods: {
    async copyLink() {
      const url = `${window.location.origin}${window.location.pathname}#${this.slug}`
      try {
        await navigator.clipboard.writeText(url)
      } catch (e) {
        console.error('Unable to copy link:', e)
      }
    },
  },
}
</script>

<style scoped>
h2 {
  scroll-margin-top: 7rem;
}
</style>
