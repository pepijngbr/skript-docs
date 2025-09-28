<template>
    <section :id="prefix">
        <h2 class="mb-4">{{ title }}</h2>
        <div v-for="(item, idx) in items" :key="prefix + '-' + idx"
            :id="prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)">
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

<script setup>
    import DocElement from './DocElement.vue'

    defineProps({
        title: String,
        items: Array,
        prefix: String
    })
</script>
