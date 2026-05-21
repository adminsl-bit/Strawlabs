import fs from 'node:fs'

const header = fs.readFileSync(new URL('../components/header.tsx', import.meta.url), 'utf8')

const requiredSnippets = [
  'aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}',
  'md:hidden',
  'AnimatePresence',
  'Home',
  'Ecosystem',
  'Impact',
  'Insights',
  'Company',
  'Cohort',
  'Contact',
]

const missing = requiredSnippets.filter((snippet) => !header.includes(snippet))

if (missing.length > 0) {
  console.error('Mobile menu check failed. Missing snippets:')
  for (const snippet of missing) {
    console.error(`- ${snippet}`)
  }
  process.exit(1)
}

console.log('Mobile menu check passed.')
