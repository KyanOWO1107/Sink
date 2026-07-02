<script setup lang="ts">
const { title } = useAppConfig()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header -->
    <header>
      <nav class="fixed z-20 w-full border-b bg-background/50 backdrop-blur-3xl">
        <div class="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div
            class="
              relative flex items-center justify-between gap-6 py-3
              lg:py-4
            "
          >
            <div
              class="
                flex w-full items-center justify-between gap-12
                lg:w-auto
              "
            >
              <NuxtLink
                to="/"
                :title="title"
                aria-label="home"
                class="flex items-center space-x-2"
              >
                <span
                  class="flex size-8 items-center justify-center rounded-full"
                >
                  <img
                    src="/sink.png"
                    :alt="`${title} Logo`"
                    class="size-full rounded-full"
                  >
                </span>
                <span class="text-xl font-black">{{ title }}</span>
              </NuxtLink>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="flex items-center gap-3"
              >
                <SwitchLanguage />
                <SwitchTheme />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex flex-1 flex-col pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t bg-background py-8">
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="
            flex flex-col items-center gap-6 pt-2
            md:flex-row md:justify-between
          "
        >
          <div
            class="
              flex flex-col items-center gap-4
              md:flex-row md:gap-6
            "
          >
            <NuxtLink
              to="/"
              :title="title"
              aria-label="home"
              class="block size-fit"
            >
              <div class="flex items-center space-x-2">
                <span
                  class="flex size-8 items-center justify-center rounded-full"
                >
                  <img
                    src="/sink.png"
                    :alt="`${title} Logo`"
                    class="size-full rounded-full"
                  >
                </span>
                <span class="text-xl font-black">{{ title }}</span>
              </div>
            </NuxtLink>

            <small class="block text-center text-sm text-muted-foreground">
              © 2026 Kyanetwork All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
