<template>
  <section class="page-wrapper">
    <div class="content-box">
      <div class="question-box">
        <h1>{{ questionList[0].question }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { QUESTION_LIST } from '@constants/data/question';
import { CONTENT_PAGE } from '@constants/data/content';
// variable
const contentTitle = CONTENT_PAGE.word.title;
// ref
const questionList = ref(QUESTION_LIST);
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100vh, 0px);
  @include backgroundSet('/images/background.png', 'cover');
  animation: fade-in 1s ease-out;
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
.question-box {
  @include flexSet(center, center, column);
  gap: 10px;
  padding: 50px;
  & > h1 {
    @include fontSet(100px, 700, 110px);
    white-space: pre-wrap;
  }
}
</style>
