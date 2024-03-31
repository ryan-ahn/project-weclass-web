<template>
  <WordContainer/>
</template>

<script setup lang="ts">
import WordContainer from '@containers/word/index.vue';
import {
  META_PAGE,
  META_COMMON,
} from '@constants/data/meta';

// Meta
useHead({
  title: META_PAGE.word.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.word.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.word.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.word.page_title,
  ogTitle: META_PAGE.word.page_title,
  description: META_PAGE.word.page_description,
  ogDescription: META_PAGE.word.page_description,
  ogImage: META_COMMON.site_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
