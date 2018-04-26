const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')
const uglify = require('rollup-plugin-uglify')
const pkg = require('./package.json')

rollup.rollup({
  input: './src/index.js',
  plugins: [
    vue({
      compileTemplate: true
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "modules": false,
            "loose": true,
            "targets": {
              "browsers": [
                "last 2 versions",
                "ie >= 9"
              ]
            }
          }
        ],
        [
          "@babel/preset-stage-2",
          {
            "decoratorsLegacy": true
          }
        ]
      ]
    }),
    uglify()
  ]
}).then(bundle => {
  bundle.write({
    format: 'umd',
    name: 'vueTopProgress',
    file: `./dist/${pkg.name}.min.js`
  })
})
