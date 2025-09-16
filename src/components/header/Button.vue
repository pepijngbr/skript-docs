<template>
  <button v-if="!isLink" @click="handleClick">
    <slot />
  </button>
  <a v-else :href="click" target="_blank" rel="noopener">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    click: {
      type: [Function, String],
      required: true,
      default: null,
    },
  },
  computed: {
    isLink() {
      return typeof this.click === 'string';
    },
  },
  methods: {
    handleClick(event) {
      if (typeof this.click === 'function') {
        this.click(event);
      }
    },
  }
}
</script>

<style scoped>
@reference "../../styles/app.css";

button, a {
    @apply my-auto p-2 -m-2 transition hidden
        hover:bg-d-icon-hover rounded-full fill-white hover:cursor-pointer;
}
</style>