<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { title, description } = useAppConfig()
</script>

<template>
  <section
    class="flex min-h-[calc(100vh-9rem)] items-center justify-center px-6 py-16"
  >
    <div class="mx-auto flex max-w-xl flex-col items-center text-center">
      <img
        src="/sink.png"
        :alt="`${title} Logo`"
        class="size-16 rounded-full"
      >

      <h1
        class="
          mt-8 text-4xl font-semibold text-balance
          md:text-5xl
        "
      >
        Kyanetwork Short Link
      </h1>

      <p class="mt-4 text-base text-pretty text-muted-foreground">
        {{ description }}
      </p>

      <Button
        as-child
        size="lg"
        class="mt-8 px-5 text-base"
      >
        <NuxtLink to="/dashboard" class="inline-flex items-center gap-2">
          <span>Open Dashboard</span>
          <ArrowRight class="size-4" />
        </NuxtLink>
      </Button>
    </div>
  </section>
</template>
