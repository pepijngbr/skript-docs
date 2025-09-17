<template>
    <nav class="w-64 p-4 bg-gray-50 border-r h-full">
        <div class="mb-2">
            <h3 class="text-md font-bold mb-1 cursor-pointer" @click="showApi = !showApi">API</h3>
            <ul v-if="showApi" class="space-y-1 mb-4">
                <li>
                    <RouterLink :to="{ name: 'tutorials.api' }" exact-active-class="link-active"
                        class="link">Getting Started</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.api.functions' }" exact-active-class="link-active"
                        class="link">Functions</RouterLink>
                </li>
            </ul>
            <h3 class="text-md font-bold mb-1 mt-4 cursor-pointer" @click="showScripting = !showScripting">Scripting</h3>
            <ul v-if="showScripting" class="space-y-1">
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting' }" exact-active-class="link-active"
                        class="link">Getting Started</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.text' }" exact-active-class="link-active"
                        class="link">Text</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.conditionals' }" exact-active-class="link-active" class="link">
                        Conditionals
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.loops' }" exact-active-class="link-active"
                        class="link">Loops</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.commands' }" exact-active-class="link-active"
                        class="link">Commands</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.functions' }" exact-active-class="link-active"
                        class="link">Functions</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const showApi = ref(true)
    const showScripting = ref(true)
</script>

<style scoped>
    @reference "../../styles/app.css";

    nav {
        min-height: 100vh;
    }

    .link {
        @apply block transition-all duration-100;
    }

    .link-active {
        @apply font-bold text-skript;
    }
</style>
