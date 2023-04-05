<template>
  <div class="wrapper">
    <header>
      <AppHeader />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div> 
</template>

<script setup>
</script>

<style scoped lang="scss">
  .wrapper {
    @apply container m-auto bg-white dark:bg-secondary;
  }
  header {
    @apply pt-4 px-5 md:px-0;
  }
  main {
    @apply px-5 my-10;
  }
</style>