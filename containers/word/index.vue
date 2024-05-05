<template>
  <section class="page-wrapper">
    <div class="content-box">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { IQuestion } from '@interface/data';
import { TAnswerToggleAlias } from '@interface/alias';
import { QUESTION_LIST } from '@constants/data/question';
// ref
const step = ref(0);
const questionList = ref<IQuestion[] | null>(null);
const answerList = ref<boolean[]>([]);
const answerToggle = ref<TAnswerToggleAlias>('default');

/** functions */
const getRandomQuestionList = (items: IQuestion[], number: number) => {
  const shuffled = items.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
};

const onClickAnswer = (rightId: number, selectId: number) => {
  if (answerToggle.value !== 'default') {
    return;
  }
  if (rightId === selectId) {
    answerToggle.value = 'pass';
    return;
  }
  answerToggle.value = 'fail';
};

const onDisplayIcon = (answerToggle: TAnswerToggleAlias) => {
  if (answerToggle === 'pass') { return '/icons/ic-shape-o.svg'; }
  return '/icons/ic-shape-x.svg';
};

/** mount */
onMounted(() => {
  questionList.value = getRandomQuestionList(QUESTION_LIST, 10);
});

/** watch */
watch([
  answerToggle,
  step,
], (value) => {
  if (value[0] === 'pass' && value[1] < 9) {
    setTimeout(() => {
      answerList.value.push(true);
      answerToggle.value = 'default';
      step.value += 1;
    }, 1500);
  }
  if (value[0] === 'fail' && value[1] < 9) {
    setTimeout(() => {
      answerList.value.push(false);
      answerToggle.value = 'default';
      step.value += 1;
    }, 1500);
  }
  if (value[0] !== 'default' && value[1] >= 9) {
    console.log(answerList.value);
    console.log('마지막 문제에요!');
  }
});
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
  background-color: rgba(255, 255, 255, 0.9);
}
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
    &:hover {
      background-color: #ffebeb;
    }
  }
}
</style>
