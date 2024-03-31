<template>
  <div class="nav-wrapper">
    <img
      :src="logoUrl"
      class="logo-box"
      alt="logo"
      @click="logoClickFunction"
    >
    <NuxtLink to="/">
      <AtomsButtonPrimary
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
  logoUrl,
  buttonText,
  logoClickFunction,
  buttonClickFunction,
} = defineProps<IMoleculesNavigatorGnbProps>();
</script>

<style lang="scss" scoped>
.nav-wrapper {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 70px, 0px);
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0 20px;
  background-color: white;
  border-bottom: 1px solid #ebebeb;
  & > img {
    cursor: pointer;
  }
}
.logo-box {
  @include boxSet(50px, 40px, 0px);
  object-fit: contain;
}
</style>
