<template>
    <section :id="prefix">
        <h2>{{ title }}</h2>
        <div v-for="(item, idx) in items" :key="prefix + '-' + idx"
            :id="prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="bg-white dark:bg-d-bg-secondary border-2 border-l-border dark:border-d-border rounded-lg mb-8 p-6">
            <h3>
                <a :href="'#' + prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
                    class="text-gray-900 dark:text-white no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
                    {{ item.name || 'Unknown name' }}
                </a>
            </h3>
            <ul class="list-none p-0 m-0 text-black dark:text-white">
                <li v-for="(val, key) in item" :key="key" class="mb-1">
                    <strong class="text-blue-700 dark:text-blue-500">{{ key }}:</strong>
                    <span v-if="typeof val === 'object' && val !== null">{{ JSON.stringify(val) }}</span>
                    <span v-else>{{ val }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        title: String,
        items: Array,
        prefix: String
    })
</script>
