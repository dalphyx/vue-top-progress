<template>
  <div class="app">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <div class="container">
      <h1 class="title">vue-top-progress</h1>
      <div class="actions">
        <div class="action">
          <div class="button" @click="$refs.topProgress.start()">
            Start
          </div>
        </div>
        <div class="action">
          <div class="button" @click="$refs.topProgress.pause()">
            Pause
          </div>
        </div>
        <div class="action">
          <div class="button" @click="$refs.topProgress.done()">
            Done
          </div>
        </div>
        <div class="action">
          <div class="button" @click="$refs.topProgress.fail()">
            Fail
          </div>
        </div>
        <div class="action">
          <div class="button" @click="$refs.topProgress.increase(20)">
            Increase(20)
          </div>
        </div>
        <div class="action">
          <div class="button" @click="$refs.topProgress.decrease(20)">
            Decrease(20)
          </div>
        </div>
        <div class="action">
          <div class="button" @click="$refs.topProgress.set(20)">
            Set(20)
          </div>
        </div>
      </div>

      <div class="text-center">
        <a class="button green download" href="https://github.com/dalphyx/vue-top-progress">
          Download
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { vueTopprogress } from '../../dist/vue-top-progress.min'

export default {
  mounted () {
    this.$refs.topProgress.start()
    setTimeout(() => {
      this.$refs.topProgress.done()
    }, 2000)
  },
  components: {
    vueTopprogress
  }
}
</script>

<style>
*
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased

body
  margin: 0
  font-family: source sans pro, sans-serif

.text-center
  text-align: center

.container
  width: 960px
  margin-left: auto
  margin-right: auto

.title
  font-size: 50px
  color: #555
  text-align: center

.action
  margin-bottom: 15px
  text-align: center

.button
  display: inline-block
  padding: 10px 20px
  min-width: 10em
  background-color: #f1f1f1
  border: 1px solid #eee
  color: #333
  text-align: center
  border-radius: 3px

.button.green
  background-color: #2d9

.download
  margin-top: 50px
  color: #fff
  text-decoration: none
</style>