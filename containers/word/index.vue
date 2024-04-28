<template>
  <section class="page-wrapper">
    <div class="content-box">
      <div class="question-box">
        <h1>{{ questionList[step].question }}</h1>
        <div class="picture-box">
          <img
            :src="questionList[step].picture"
            alt="picture"
          >
        </div>
        <ul class="answer-box">
          <li
            v-for="(answer, idx) in questionList[step].answerList"
            :key="idx"
          >
            {{ answer.text }}
          </li>
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
const step = ref(0);
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100vh, 0px);
  @include backgroundSet('/images/background.png', 'cover');
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
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
  animation: fade-in 1s ease-out;
  & > h1 {
    @include fontSet(40px, 700, 48px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.picture-box {
  @include flexSet(center, center, column);
  @include boxSet(250px, 250px, 0px);
  & > img {
    object-fit: contain;
  }
}
.answer-box {
  @include flexSet(center, center, row);
  gap: 15px;
  & > li {
    @include flexSet(center, center, row);
    @include boxSet(150px, 60px, 30px);
    @include fontSet(22px, 900, 30px);
    text-align: center;
    white-space: pre-wrap;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid black;
    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
