<template>
  <MoleculesNavigatorGnb
    logoUrl="/favicon.png"
    :buttonText="buttonText"
    :logoClickFunction="onClickRouteToMain"
    :buttonClickFunction="onClickRouteToMain"
  />
</template>

<script setup lang='ts'>
import { BUTTON_SUB } from '@constants/data/button';
// hooks
const router = useRouter();
// Variable
const buttonText = BUTTON_SUB.gnb.text;
// functions
const onClickRouteToMain = () => {
  router.push('/');
};
</script>
