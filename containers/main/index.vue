<template>
  <section class="page-wrapper">
    <div class="content-box">
      <div class="title-box">
        <h1>{{ contentTitle }}</h1>
        <p>{{ contentDescription }}</p>
      </div>
      <div class="button-box">
        <AtomsButtonMain
          type="A"
          :text="confirmButtonText"
          :attrDisabled="confirmButtonDisabled"
          :onClickFunction="() => onClickRouteToStack(confirmButtonPath)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONTENT_PAGE } from '@constants/data/content';
import { BUTTON_MAIN } from '@constants/data/button';
// Hooks
const router = useRouter();
// variable
const contentTitle = CONTENT_PAGE.main.title;
const contentDescription = CONTENT_PAGE.main.description;
const confirmButtonText = BUTTON_MAIN.main.A.text;
const confirmButtonDisabled = BUTTON_MAIN.main.A.disabled;
const confirmButtonPath = BUTTON_MAIN.main.A.path;
// functions
const onClickRouteToStack = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100vh, 0px);
  @include backgroundSet('/images/background.png', 'cover');
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
.title-box {
  @include flexSet(center, center, column);
  gap: 20px;
  padding: 50px;
  & > h1 {
    @include fontSet(80px, 900, 100px);
    text-align: center;
    white-space: pre-wrap;
  }
  & > p {
    @include fontSet(16px, 100, 25px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.button-box {
  @include flexSet(center, center, row);
  gap: 10px;
}
</style>
