<template>
  <div>
    <GnbContainer/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import GnbContainer from '@containers/common/gnb.vue';
</script>
