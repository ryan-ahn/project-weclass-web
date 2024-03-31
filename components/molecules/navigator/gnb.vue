<template>
  <div class="nav-wrapper">
    <img
      src="/favicon.png"
      alt="logo"
      class="logo-box"
    >
    <NuxtLink to="/">
      <AtomsButtonSub :text="buttonText"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { BUTTON_SUB } from '@constants/data/button';
// Variable
const buttonText = BUTTON_SUB.gnb.text;
</script>

<style lang="scss" scoped>
.nav-wrapper {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 55px, 0px);
  position: fixed;
  top: 0;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid #ebebeb;
}
.logo-box {
  @include boxSet(50px, 40px, 0px);
  object-fit: contain;
}
</style>