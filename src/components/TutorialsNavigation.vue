<template>
    <nav class="w-64 p-4 bg-gray-50 border-r h-full">
        <h2 class="text-lg font-semibold mb-4">Tutorials</h2>
        <div class="mb-2">
            <h3 class="text-md font-bold text-gray-700 mb-1">API</h3>
            <ul class="space-y-1 mb-4">
                <li>
                    <RouterLink :to="{ name: 'tutorials.api' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Getting Started</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.api.functions' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Functions</RouterLink>
                </li>
            </ul>
            <h3 class="text-md font-bold text-gray-700 mb-1 mt-4">Scripting</h3>
            <ul class="space-y-1">
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Getting Started</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.text' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Text</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.conditionals' }"
                        exact-active-class="font-bold bg-skript" class="block px-2 py-1 rounded bg-gray-200">
                        Conditionals
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.loops' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Loops</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.commands' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Commands</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'tutorials.scripting.functions' }" exact-active-class="font-bold bg-skript"
                        class="block px-2 py-1 rounded bg-gray-200">Functions</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>

<style scoped>
    nav {
        min-height: 100vh;
    }
</style>
