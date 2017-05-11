const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')
const uglify = require('rollup-plugin-uglify')
const pkg = require('./package.json')

rollup.rollup({
  entry: './src/index.js',
  plugins: [
    vue({
      compileTemplate: true
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'es2015',
          {
            'modules': false
          }
        ],
        'stage-2'
      ]
    }),
    uglify()
  ]
}).then(bundle => {
  bundle.write({
    format: 'umd',
    moduleName: 'vueTopProgress',
    dest: `./dist/${pkg.name}.min.js`
  })
})
