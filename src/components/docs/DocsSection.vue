<template>
    <section :id="prefix">
        <h2>{{ title }}</h2>
        <div v-for="(item, idx) in items" :key="prefix + '-' + idx"
            :id="prefix + '-' + (item.name ? item.name.replace(/\s+/g, '-').toLowerCase() : idx)">
            <DocElement
                :name="item.name"
                :description="item.description"
                :since="item.since"
                :code="item.examples"
                :eventValues="item.eventValues"
                :prefix="prefix"
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
