import { defineConfig } from '@rslib/core'
import type { LibConfig } from '@rslib/core'

export default defineConfig({
  lib: (['esm', 'cjs'] as const).map<LibConfig>(format => ({
    format,
    bundle: true,
    syntax: 'es2022',
    dts: {
      autoExtension: true
    },
    redirect: {
      dts: {
        extension: true
      }
    }
  })),
  source: {
    tsconfigPath: './tsconfig.json'
  },
  output: {
    cleanDistPath: true,
    sourceMap: true,
    target: 'node'
  }
})
