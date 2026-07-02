import { version as currentVersion } from '@@/package.json'
import { computed } from 'vue'

export function useVersionCheck() {
  const latestVersion = computed(() => currentVersion)
  const hasUpdate = computed(() => false)

  return { hasUpdate, currentVersion, latestVersion }
}
