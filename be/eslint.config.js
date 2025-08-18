// eslint.config.js
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // matches all files ending with .js
  {
    plugins: ['prettier'],
    files: ['**/*.ts'],
    rules: {
      'prettier/prettier': 'error',
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  },

  // matches all files ending with .js except those in __tests
  {
    files: ['**/*.ts'],
    ignores: ['__tests/**'],
    rules: {
      'no-console': 'error',
    },
  },
])
