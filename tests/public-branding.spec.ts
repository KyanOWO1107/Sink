import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const root = resolve(import.meta.dirname, '..')

function readProjectFile(path: string) {
  return readFileSync(resolve(root, path), 'utf8')
}

describe('public Kyanetwork branding', () => {
  it('uses Kyanetwork metadata without the original Sink public links', () => {
    const appConfig = readProjectFile('app/app.config.ts')
    const app = readProjectFile('app/app.vue')

    expect(appConfig).toContain('title: \'Kyanetwork Short Link\'')
    expect(appConfig).toContain('url: \'https://link.kyanet.work\'')
    expect(appConfig).not.toContain('sink.cool')
    expect(appConfig).not.toContain('miantiao-me')
    expect(appConfig).not.toContain('coffee:')
    expect(appConfig).not.toContain('twitter:')
    expect(appConfig).not.toContain('telegram:')
    expect(appConfig).not.toContain('image:')

    expect(app).toContain('const { title, description, url } = useAppConfig()')
    expect(app).toMatch(/`\$\{url\}\$\{route\.path\}`/)
    expect(app).not.toContain('sink.cool')
    expect(app).not.toContain('ogImage')
    expect(app).not.toContain('twitterImage')
  })

  it('renders a minimal public entry page without marketing sections', () => {
    const index = readProjectFile('app/pages/index.vue')
    const layout = readProjectFile('app/layouts/default.vue')

    expect(index).toContain('Kyanetwork Short Link')
    expect(index).toContain('/dashboard')
    expect(index).not.toContain('HomeLogos')
    expect(index).not.toContain('HomeFeatures')
    expect(index).not.toContain('HomeStats')
    expect(index).not.toContain('HomeTestimonials')
    expect(index).not.toContain('HomeCta')

    expect(layout).toContain('© 2026 Kyanetwork All rights reserved.')
    expect(layout).not.toContain('useGithubStats')
    expect(layout).not.toContain('GitHubIcon')
    expect(layout).not.toContain('TelegramIcon')
    expect(layout).not.toContain('XIcon')
    expect(layout).not.toContain('html.zone')
  })

  it('does not show original support and release links in the dashboard sidebar', () => {
    const navSecondary = readProjectFile('layers/dashboard/app/components/dashboard/sidebar/NavSecondary.vue')
    const versionCheck = readProjectFile('layers/dashboard/app/composables/useVersionCheck.ts')

    expect(navSecondary).not.toContain('coffee')
    expect(navSecondary).not.toContain('github.com/ccbikai/Sink/releases')
    expect(versionCheck).not.toContain('cdn.jsdelivr.net/gh/miantiao-me/Sink')
    expect(versionCheck).toContain('hasUpdate = computed(() => false)')
  })
})
