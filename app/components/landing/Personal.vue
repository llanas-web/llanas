<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'flex flex-col items-center gap-8 text-center'
    }"
  >
    <template #description>
      <div class="flex items-center justify-center">
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.1
          }"
        >
          <UColorModeImage
            class="size-24 ring ring-default ring-offset-3 ring-offset-(--ui-bg) rounded-full"
            :light="page.personal.avatar!.src"
            :dark="page.personal.avatar!.src"
            :alt="page.personal.alt"
            format="webp"
            size="3xl"
          />
        </Motion>
      </div>
      <div>
        <h2 class="text-center font-semibold text-xl text-highlighted">
          {{ page.personal.name }}
        </h2>
        <span class="text-secondary">{{ page.personal.username }}</span>
      </div>
      <MDC
        class="text-left text-sm sm:text-md lg:text-sm text-muted leading-relaxed italic"
        :value="page.personal.description!"
      />
    </template>
  </UPageSection>
</template>
