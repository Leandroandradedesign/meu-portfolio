// scripts/build-tokens.js
// Lê tokens.json e gera src/tokens.css com as variáveis CSS
// Uso: node scripts/build-tokens.js

import { readFileSync, writeFileSync } from 'fs'

const tokens = JSON.parse(readFileSync('./tokens.json', 'utf-8'))

const lines = ['/* Gerado automaticamente por scripts/build-tokens.js */', '/* Não edite manualmente — edite tokens.json */', '', '@theme {']

// Cores
for (const [name, token] of Object.entries(tokens.color)) {
  lines.push(`  --color-${name}: ${token.$value};  /* ${token.$description ?? ''} */`)
}

lines.push('')

// Font sizes
for (const [name, token] of Object.entries(tokens['font-size'])) {
  lines.push(`  --font-size-${name}: ${token.$value};`)
}

lines.push('')

// Line heights
for (const [name, token] of Object.entries(tokens['line-height'])) {
  lines.push(`  --line-height-${name}: ${token.$value};`)
}

lines.push('')

// Font families
for (const [name, token] of Object.entries(tokens['font-family'])) {
  lines.push(`  --font-${name}: "${token.$value}", sans-serif;`)
}

lines.push('}', '')

const css = lines.join('\n')
writeFileSync('./src/tokens.css', css)

console.log('✅ tokens.css gerado com sucesso!')
console.log(`   ${Object.keys(tokens.color).length} cores`)
console.log(`   ${Object.keys(tokens['font-size']).length} tamanhos de fonte`)
console.log(`   ${Object.keys(tokens['line-height']).length} line-heights`)
