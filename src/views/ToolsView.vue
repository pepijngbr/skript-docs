<template>
  <main class="max-w-[700px] mx-auto text-black dark:text-white flex flex-col gap-4">
    <h1>Tools</h1>

    <a href="https://docs.skeditor.dev/" class="flex flex-col p-4 bg-l-bg-secondary dark:bg-d-bg-secondary rounded-md
            hover:bg-l-icon-hover hover:dark:bg-d-icon-hover transition text-white" target="_blank" rel="noopener">
      <div class="flex flex-row">
        <h1 class="flex-auto">SkEditor</h1>
        <i class="bi bi-box-arrow-up-right"></i>
      </div>
      <p>The recommended text editor for Skript development.</p>
    </a>

    <a href="https://docs.skriptlang.org/javadocs/" class="flex flex-col p-4 bg-l-bg-secondary dark:bg-d-bg-secondary rounded-md
            hover:bg-l-icon-hover hover:dark:bg-d-icon-hover transition text-white" target="_blank" rel="noopener">
      <div class="flex flex-row">
        <h1 class="flex-auto">Javadocs</h1>
        <i class="bi bi-box-arrow-up-right"></i>
      </div>
      <p>View the Javadocs for the Skript API.</p>
    </a>
  </main>
</template>
