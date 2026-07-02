export default defineAppConfig({
  title: 'Kyanetwork Short Link',
  url: 'https://link.kyanet.work',
  description: 'Private short link service for Kyanetwork.',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
