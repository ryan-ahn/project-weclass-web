<template>
  <div class="mobile-layout-wrapper">
    <GnbContainer/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import GnbContainer from '@containers/common/gnb.vue';
</script>

<style lang="scss" scoped>
.mobile-layout-wrapper {
  background-color: white;
}
</style>
