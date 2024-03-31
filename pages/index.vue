<template>
  <MainContainer/>
</template>

<script setup lang="ts">
import MainContainer from '@containers/main/index.vue';
import {
  META_PAGE,
  META_COMMON,
} from '@constants/data/meta';

// Meta
useHead({
  title: META_PAGE.default.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.default.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.default.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.default.page_title,
  ogTitle: META_PAGE.default.page_title,
  description: META_PAGE.default.page_description,
  ogDescription: META_PAGE.default.page_description,
  ogImage: META_COMMON.site_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
