<template>
  <div class="bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border rounded-lg mb-8 p-6 flex flex-col gap-2">
    <h3>
      <a
        :href="'#' + prefix + '-' + name.replace(/\s+/g, '-').toLowerCase()"
        class="text-gray-900 dark:text-white no-underline hover:text-blue-700 hover:border-b hover:border-blue-700"
      >
        {{ name || '?' }}
      </a>
    </h3>
    <div>
        <p v-if="description" v-for="line in description">{{ line }}</p>
    </div>
    <div>
    <p v-if="since"><strong>Since</strong> {{ Array.isArray(since) ? since.join(', ') : since }}</p>
    </div>

    <p v-if="code"><strong>Examples</strong></p>
    <pre v-if="code" v-highlightjs><code class="applescript">{{ code.join('\n') }}</code></pre>

    <p v-if="eventValues"><strong>Event Values</strong></p>
    <pre v-if="eventValues" v-highlightjs><code class="applescript">{{ eventValues.map(line => line.name).join('\n') }}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    prefix: String,
    title: String,
    name: String,
    since: [String] | String | null,
    description: [String] | String | null,
    code: [String] | String | null,
    eventValues: [String] | String | null,
  },
}
</script>
