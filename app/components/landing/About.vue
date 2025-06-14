<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium'
    }"
  >
    <template #description>
      <MDC
        class="text-left mt-3 text-sm sm:text-md lg:text-sm text-muted leading-relaxed space-y-4 prose-strong:text-primary prose"
        :value="page.about.description"
      />
    </template>
  </UPageSection>
</template>

<style scoped></style>
