import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'
import tsConfigPaths from 'vite-tsconfig-paths'

import * as packageJson from './package.json'

import { defineConfig } from 'vite'
import type { UserConfig as ViteUserConfigInterface } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

type UserConfig = ViteUserConfigInterface & VitestUserConfigInterface

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      dts({
         insertTypesEntry: true,
      }),
      react(),
      tsConfigPaths(),
      eslint(),
   ],
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: resolve(__dirname, 'test/setup.ts'),
   },
   build: {
      lib: {
         entry: resolve(__dirname, 'src/component/index.ts'),
         name: 'UILibrary',
         formats: ['es', 'umd'],
         fileName: (format) => `ui-library.${format}.js`,
      },
      rollupOptions: {
         external: [...Object.keys(packageJson.peerDependencies)],
      },
   },
} as UserConfig)
