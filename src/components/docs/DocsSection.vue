<template>
    <section :id="prefix">
        <h2>{{ title }}</h2>
        <div v-for="(item, idx) in items" :key="prefix + '-' + idx"
            :id="prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
            class="border-2 border-gray-200 rounded-lg bg-gray-50 mb-8 p-6">
            <h3>
                <a :href="'#' + prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)"
                    class="text-gray-900 no-underline hover:text-blue-700 hover:border-b hover:border-blue-700">
                    {{ item.name || 'Unknown name' }}
                </a>
            </h3>
            <ul class="list-none p-0 m-0">
                <li v-for="(val, key) in item" :key="key" class="mb-1">
                    <strong class="text-blue-700">{{ key }}:</strong>
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
