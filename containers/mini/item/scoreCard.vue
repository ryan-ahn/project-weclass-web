<template>
  <div class="wrapper">
    <div class="score-box">
      <img
        src="/icons/ic-common-medal.svg"
        alt="medal"
      >
      <p>{{ roundNumber(score) }}점</p>
      <p>총 {{ passCount + failCount }} 문제 중 {{ passCount }} 문제 맞춤 </p>
    </div>
    <AtomsButtonBasic
      type="B"
      :text="startButtonText"
      :attrDisabled="startButtonDisabled"
      :onClickFunction="() => onClickRouteToStack(startButtonPath)"
    />
  </div>
</template>

<script setup lang='ts'>
import { IMiniItemScoreCardProps } from '@interface/props';
import { BUTTON_MAIN } from '@constants/data/button';
// Hooks
const router = useRouter();
// Props
const {
  score,
  passCount,
  failCount,
} = defineProps<IMiniItemScoreCardProps>();
// variables
const startButtonText = BUTTON_MAIN.mini.scoreCard.text;
const startButtonDisabled = BUTTON_MAIN.mini.scoreCard.disabled;
const startButtonPath = BUTTON_MAIN.mini.scoreCard.path;
// functions
const onClickRouteToStack = (path: string) => {
  router.push(path);
};
</script>

<style lang='scss' scoped>
.wrapper {
  @include flexSet(center, center, column);
  gap: 30px;
  padding: 20px;
}
.score-box {
  @include flexSet(center, center, column);
  gap: 10px;
  & > img {
    @include boxSet(120px, auto, 0px);
  }
  & > p:nth-child(2) {
    @include fontSet(90px, 700, 108px);
  }
  & > p:nth-child(3) {
    @include fontSet(20px, 400, 24px);
    text-align: center;
  }
}
</style>
