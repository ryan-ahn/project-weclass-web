<template>
  <button
    class="button-wrapper"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { IAtomsButtonPrimaryProps } from '@interface/props';
// Props
const {
  text,
  onClickFunction,
} = defineProps<IAtomsButtonPrimaryProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  @include flexSet(center, center, row);
  @include boxSet(auto, auto, 40px);
  padding: 8px 16px;
  cursor: pointer;
  background-color: #d34f33;
  &:hover {
    opacity: 0.9;
  }
  & > p {
    color: white;
    @include fontSet(14px, 500, 22px);
    @include ellipsisSet(1, 22px);
  }
}
</style>
