<template>
  <section class="page-wrapper">
    <div class="content-box">
      <div class="question-box">
        <h1>{{ questionList[0].question }}</h1>
        <div class="picture-box">
          <img
            :src="questionList[0].picture"
            alt="picture"
          >
        </div>
        <ul>
          <li :v-for="questionList[0].question"/>
        </ul>
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
  gap: 50px;
  padding: 40px;
  & > h1 {
    @include fontSet(50px, 700, 60px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.picture-box {
  @include flexSet(center, center, column);
  @include boxSet(300px, 300px, 0px);
  & > img {
    object-fit: contain;
  }
}
</style>
