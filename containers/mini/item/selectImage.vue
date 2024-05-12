<template>
  <div
    v-if="questionList"
    class="wrapper"
  >
    <div class="question-box">
      <h1>
        {{ questionList[step].question }}
      </h1>
      <p>
        {{ questionList[step].word }}
      </p>
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
    <ul class="answer-list-box">
      <li
        v-for="(answer, idx) in questionList[step].answerList"
        :key="idx"
        @click="onClickAnswer(questionList[step].answerId, answer.id)"
      >
        <img
          :src="answer.image"
          alt="image"
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { IMiniItemSelectImageProps } from '@interface/props';
// Props
const {
  step,
  answerToggle,
  questionList,
  onDisplayIcon,
} = defineProps<IMiniItemSelectImageProps>();
</script>

<style lang='scss' scoped>

.wrapper {
  @include flexSet(center, center, column);
  position: relative;
  gap: 25px;
  padding: 40px 20px;
}
.question-box {
  @include flexSet(center, center, column);
  gap: 25px;
  & > h1 {
    @include fontSet(40px, 700, 48px);
    text-align: center;
    white-space: pre-wrap;
  }
  & > p {
    @include fontSet(55px, 700, 65px);
    color: #d45033;
    text-align: center;
    white-space: pre-wrap;
  }
}
.answer-right-box {
  @include flexSet(center, center, row);
  @include boxSet(250px, 250px, 0px);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  gap: 20px;
  transform: translate(-50%, -50%);
}
.answer-icon-box {
  @include flexSet(center, center, column);
  opacity: 0.9;
  & > img {
    @include boxSet(250px, 250px, 0px);
  }
}
.answer-list-box {
  @include flexSet(center, center, row);
  gap: 10px;
  & > li {
    @include flexSet(center, center, row);
    @include boxSet(150px, 200px, 30px);
    padding: 15px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    border: 3px solid black;
    & > img {
      @include boxSet(100%, 100%, 30px);
    }
  }
}
</style>
