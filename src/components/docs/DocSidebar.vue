<template>
    <aside class="absolute hidden xl:block top-4 left-4 w-64">
        <h2>Categories</h2>
        <ul>
            <li v-for="category in Object.keys(categories).sort()" :key="category"
                class="text-white transition-all duration-100 cursor-pointer">
                <p class="text-white transition-all duration-100 hover:text-skript hover:font-bold"
                    v-bind:style="{ 'font-weight': openCategories[category] ? 'bold' : 'normal' }"
                    @click="toggleCategory(category)">
                    {{ category }}
                </p>
                <ul v-show="openCategories[category]">
                    <li v-for="element in categories[category]" :key="element.name"
                        class="ml-3 text-white transition-all duration-100 hover:text-skript hover:font-bold cursor-pointer">
                        <a :href="'#' + element.prefix + '-' + element.name.replace(/\s+/g, '-').toLowerCase()">{{
                            element.name }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script scoped>
    import docs from '@/assets/docs/docs.json'

    const elements = [
        ...docs.expressions,
        ...docs.conditions,
        ...docs.effects,
        ...docs.events,
        ...docs.functions,
        ...docs.sections,
        ...docs.structures,
        ...docs.types,
    ]

    const categories = {}

    elements.forEach((el) => {
        if (Array.isArray(el.categories)) {
            el.categories.forEach((catObj) => {
                const catName = catObj.name
                if (!categories[catName]) {
                    categories[catName] = []
                }
                categories[catName].push(el)
            })
        }
    })

    export default {
        data() {
            return {
                openCategories: {},
                categories,
            }
        },
        methods: {
            toggleCategory(category) {
                this.openCategories[category] = !this.openCategories[category]
            },
        },
    }
</script>
