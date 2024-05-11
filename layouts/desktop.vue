<template>
  <div class="desktop-layout-wrapper">
    <GnbContainer/>
    <div class="simulator-box">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import GnbContainer from '@containers/common/gnb.vue';
</script>

<style lang="scss" scoped>
.desktop-layout-wrapper {
  @include flexSet(center, center, row);
  background-color: #ebebeb;
}
.simulator-box {
  position: relative;
  min-height: 100vh;
  @include boxSet(100%, 100vh, 0px);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
}
</style>
