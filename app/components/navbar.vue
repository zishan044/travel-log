<script setup lang="ts">
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <ThemeToggle />
      <NuxtLink to="/" class="btn btn-accent">
        Sign In With GitHub
        <Icon name="tabler:brand-github" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>
