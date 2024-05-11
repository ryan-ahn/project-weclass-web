<template>
  <section class="page-wrapper">
    <div
      v-if="questionList"
      class="content-box"
    >
      <SelectWordItem
        v-if="step <= maxStep && questionList[step].type === 'select-word'"
        :step="step"
        :answerToggle="answerToggle"
        :questionList="questionList"
        :onDisplayIcon="onDisplayIcon"
        :onClickAnswer="onClickAnswer"
      />
      <ScoreCardItem
        v-if="step > maxStep"
        :score="passList.length / (passList.length + failList.length) * 100"
        :passCount="passList.length"
        :failCount="failList.length"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ISelectWordQuestionDto } from '@interface/dto';
import { TAnswerToggleAlias } from '@interface/alias';
import SelectWordItem from '@containers/mini/item/selectWord.vue';
import ScoreCardItem from '@containers/mini/item/scoreCard.vue';
import { QUESTION_LIST } from '@constants/data/database';
// ref
const step = ref(0);
const maxStep = ref(19);
const passList = ref<number[]>([]);
const failList = ref<number[]>([]);
const answerToggle = ref<TAnswerToggleAlias>('default');
const questionList = ref<ISelectWordQuestionDto[] | null>(null);

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
  questionList.value = getRandomQuestionList(QUESTION_LIST, maxStep.value + 1);
});

/** watch */
watch([
  answerToggle,
  step,
], (value) => {
  if (value[0] === 'pass' && value[1] <= maxStep.value) {
    setTimeout(() => {
      passList.value.push(step.value);
      answerToggle.value = 'default';
      step.value += 1;
    }, 1500);
  }
  if (value[0] === 'fail' && value[1] <= maxStep.value) {
    setTimeout(() => {
      failList.value.push(step.value);
      answerToggle.value = 'default';
      step.value += 1;
    }, 1500);
  }
});
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
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  min-height: 100%;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
