<template>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
// hooks
const { isMobileOrTablet } = useDevice();
// state
const layout = ref(isMobileOrTablet ? 'mobile' : 'desktop');
</script>
