<template>
  <section class="page-wrapper">
    <div class="content-box">
      <div class="title-box">
        <h1>{{ contentTitle }}</h1>
        <p>{{ contentDescription }}</p>
      </div>
      <div class="button-box">
        <AtomsButtonBasic
          type="A"
          :text="startButtonText"
          :attrDisabled="startButtonDisabled"
          :onClickFunction="() => onClickRouteToStack(startButtonPath)"
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
const startButtonText = BUTTON_MAIN.main.start.text;
const startButtonDisabled = BUTTON_MAIN.main.start.disabled;
const startButtonPath = BUTTON_MAIN.main.start.path;
// functions
const onClickRouteToStack = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  @include backgroundSet('/images/background.png', 'cover');
  min-height: 100vh;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
}
.page-wrapper::after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  background-color: rgba(255, 255, 255, 0.9);
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  z-index: 2;
}
.title-box {
  @include flexSet(center, center, column);
  gap: 20px;
  padding: 50px;
  & > h1 {
    @include fontSet(80px, 700, 92px);
    text-align: center;
    white-space: pre-wrap;
  }
  & > p {
    @include fontSet(24px, 400, 30px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.button-box {
  @include flexSet(center, center, row);
  gap: 10px;
}
</style>
