<template>
  <div class="bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border 
              rounded-lg mb-8 p-6 flex flex-col gap-3">
    <h3>
      <a
        :href="'#' + prefix + '-' + name.replace(/\s+/g, '-').toLowerCase()"
        class="text-gray-900 dark:text-white no-underline hover:text-blue-700 hover:border-b hover:border-blue-700"
        :style="deprecated ? 'text-decoration: line-through; opacity: 0.5;' : ''"
      >
        {{ name || '?' }}
      </a>
    </h3>

    <vue-markdown-it v-if="description" :source="description.join('\n')"/>

    <highlightjs v-if="patterns" language="skript" :code="Array.isArray(patterns) ? patterns.join('\n') : patterns" />

    <div>
      <p v-if="since"><strong>Since</strong> {{ Array.isArray(since) ? since.join(', ') : since }}</p>
      <p v-if="requirements"><strong>Requirements</strong> {{ Array.isArray(requirements) ? requirements.join(', ') : requirements }}</p>
    </div>

    <p v-if="examples"><strong>Examples</strong></p>
    <highlightjs v-if="examples" language="skript" :code="Array.isArray(examples) ? examples.join('\n') : examples" />

    <p v-if="eventValues"><strong>Event Values</strong></p>
    <highlightjs v-if="eventValues" language="skript" :code="eventValues.map(line => line.name).join('\n')" />
  </div>
</template>

<script>
export default {
  props: {
    prefix: String,
    title: String,
    name: String,
    since: [String] | String | null,
    deprecated: Boolean,
    description: [String] | String | null,
    patterns: [String] | String | null,
    examples: [String] | String | null,
    requirements: [String] | String | null,
    eventValues: [String] | String | null,
  },
}
</script>
