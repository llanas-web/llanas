<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="services"
    :ui="{
      container: '!pt-0'
    }"
  >
    <UPageHeader
      :title="page.services.title"
      :description="page.services.description"
    />
    <UPageBody>
      <UPageList class="flex flex-col gap-8">
        <UPageCard
          v-for="(service, index) in page.services.items"
          :key="index"
          :title="service.title"
          highlighted
          :description="service.description"
          orientation="horizontal"
          variant="subtle"
          :ui="{
            root: 'flex items-start gap-4 p-4',
            title: 'text-2xl font-bold mb-2',
            description: 'text-secondary text-lg'
          }"
        >
          <template #footer>
            <p class="text-muted">
              {{ service.content }}
            </p>
          </template>
          <div class="flex flex-col gap-8 w-full">
            <div>
              <ul class="space-y-2 text-hightlighted">
                <li
                  v-for="(adv, i) in service.avantages"
                  :key="i"
                  class="flex gap-4"
                >
                  <UIcon
                    :name="adv.icon || 'i-heroicons-check-circle'"
                    class="size-5 mt-0.5 text-secondary"
                  />
                  <span>{{ adv.text || adv }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-auto">
              <div class="font-medium mb-2 text-highlighted">
                Technologies utilisées
              </div>
              <div class="flex flex-wrap gap-3 items-center">
                <div
                  v-for="(tech, i) in service.technos"
                  :key="i"
                  class="flex items-center gap-1 text-muted"
                >
                  <UIcon
                    :name="tech"
                    class="size-6 text-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </UPageCard>
      </UPageList>
    </UPageBody>
  </UPageSection>
</template>
