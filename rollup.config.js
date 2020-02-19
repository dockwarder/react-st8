// PLUGINS
import typescript from '@rollup/plugin-typescript'

// ROLLUP CONFIG
export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ]
}
