<template>
  <div class="nav-wrapper">
    <img
      src="/favicon.png"
      alt="logo"
      class="logo-box"
    >
    <NuxtLink to="/">
      <AtomsButtonSub
        :text="buttonText"
        :onClickFunction="buttonClickFunction"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { IMoleculesNavigatorGnbProps } from '@interface/props';
// Props
const {
  buttonText,
  buttonClickFunction,
} = defineProps<IMoleculesNavigatorGnbProps>();
</script>

<style lang="scss" scoped>
.nav-wrapper {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 80px, 0px);
  position: fixed;
  top: 0;
  padding: 0 20px;
  background-color: white;
  border-bottom: 1px solid #ebebeb;
}
.logo-box {
  @include boxSet(50px, 40px, 0px);
  object-fit: contain;
}
</style>
