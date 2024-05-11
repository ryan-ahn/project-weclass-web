<template>
  <section class="page-wrapper">
    <div
      v-if="questionList"
      class="content-box"
    >
      <SelectWord
        v-if="questionList[step].type === 'select-word'"
        :step="step"
        :answerToggle="answerToggle"
        :questionList="questionList"
        :onDisplayIcon="onDisplayIcon"
        :onClickAnswer="onClickAnswer"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ISelectWordQuestionDto } from '@interface/dto';
import { TAnswerToggleAlias } from '@interface/alias';
import SelectWord from '@containers/mini/item/selectWord.vue';
import { QUESTION_LIST } from '@constants/data/database';
// ref
const step = ref(0);
const questionList = ref<ISelectWordQuestionDto[] | null>(null);
const answerList = ref<boolean[]>([]);
const answerToggle = ref<TAnswerToggleAlias>('default');

/** functions */
const getRandomQuestionList = (items: ISelectWordQuestionDto[], number: number) => {
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
  questionList.value = getRandomQuestionList(QUESTION_LIST, 20);
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
</style>
