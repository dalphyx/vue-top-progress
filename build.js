const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const pkg = require('./package.json')

rollup.rollup({
  entry: './src/index.js',
  plugins: [
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
    })
  ]
}).then(bundle => {
  bundle.write({
    format: 'umd',
    moduleName: 'vueTopProgress',
    dest: `./dist/${pkg.name}.js`
  })
})
