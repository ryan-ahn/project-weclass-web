<template>
  <div
    v-if="questionList"
    class="question-box"
  >
    <h1>{{ questionList[step].question }}</h1>
    <div class="picture-icon-box">
      <img
        :src="questionList[step].picture"
        alt="picture-icon"
      >
    </div>
    <div
      v-if="answerToggle !== 'default'"
      class="answer-right-box"
    >
      <div class="answer-icon-box">
        <img
          :src="onDisplayIcon(answerToggle)"
          alt="answer-icon"
        >
      </div>
    </div>
    <ul
      v-if="questionList"
      class="answer-list-box"
    >
      <li
        v-for="(answer, idx) in questionList[step].answerList"
        :key="idx"
        @click="onClickAnswer(questionList[step].answerId, answer.id)"
      >
        {{ answer.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { IMiniItemSelectWordProps } from '@interface/props';
// Props
const {
  step,
  answerToggle,
  questionList,
  onDisplayIcon,
} = defineProps<IMiniItemSelectWordProps>();
</script>

<style lang='scss' scoped>

.question-box {
  @include flexSet(center, center, column);
  position: relative;
  gap: 50px;
  padding: 40px;
  animation: fade-in 1s ease-out;
  & > h1 {
    @include fontSet(40px, 700, 48px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.picture-icon-box {
  @include flexSet(center, center, column);
  & > img {
    @include boxSet(250px, 250px, 0px);
  }
}
.answer-right-box {
  @include flexSet(center, center, row);
  @include boxSet(300px, 300px, 0px);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  gap: 20px;
  transform: translate(-50%, -50%);
}
.answer-icon-box {
  @include flexSet(center, center, column);
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));
  opacity: 0.9;
  & > img {
    @include boxSet(300px, 300px, 0px);
  }
}
.answer-list-box {
  @include flexSet(center, center, row);
  gap: 15px;
  & > li {
    @include flexSet(center, center, row);
    @include boxSet(150px, 60px, 30px);
    @include fontSet(24px, 900, 30px);
    text-align: center;
    white-space: pre-wrap;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    border: 3px solid black;
  }
}
</style>
