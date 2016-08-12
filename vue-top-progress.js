/**
 * Helpers
 */

function clamp (n, min, max) {
  if (n < min) {
    return min
  }
  if (n > max) {
    return max
  }
  return n
}

let queue = (() => {
  let pending = []

  function next () {
    let fn = pending.shift()
    if (fn) {
      fn(next)
    }
  }

  return fn => {
    pending.push(fn)
    if (pending.length === 1) {
      next()
    }
  }
})()

module.exports = {
  template: `
    <div class="top-progress" :style="barStyle" v-if="show">
      <div class="peg" :style="pegStyle">
      </div>
    </div>
  `,

  data () {
    return {
      error: false,
      show: false,
      progress: 0,
      opacity: 1,
      status: null,
      isPaused: false
    }
  },

  props: {
    speed: {
      type: Number,
      default: 350
    },

    color: {
      type: String,
      default: '#29d'
    },

    errorColor: {
      type: String,
      default: '#f44336'
    },

    trickle: {
      type: Boolean,
      default: true
    },

    trickleSpeed: {
      type: Number,
      default: 250
    },

    easing: {
      type: String,
      default: 'linear'
    },

    height: {
      type: Number,
      default: 3
    },

    minimum: {
      type: Number,
      default: 0.8
    },

    maximum: {
      type: Number,
      default: 97.5
    }
  },

  computed: {
    progressColor () {
      return this.error ? this.errorColor : this.color
    },

    isStarted () {
      return typeof this.status === 'number'
    },

    barStyle () {
      return {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: `${this.progress}%`,
        height: `${this.height}px`,
        backgroundColor: this.progressColor,
        transition: `all ${this.speed}ms ${this.easing}`,
        opacity: `${this.opacity}`,
        zIndex: 9999
      }
    },

    pegStyle () {
      return {
        display: 'block',
        position: 'absolute',
        right: '0',
        width: '100px',
        height: '100%',
        boxShadow: `0 0 10px ${this.progressColor}, 0 0 5px ${this.progressColor}`,
        transform: 'rotate(3deg) translate(0px, -4px)'
      }
    }
  },

  methods: {
    _work () {
      setTimeout(() => {
        if (!this.isStarted || !this.status || this.isPaused) {
          return
        }
        this.increase()
        this._work()
      }, this.trickleSpeed)
    },

    start () {
      this.isPaused = false

      if (!this.status) {
        this.set(0)
      }

      if (this.trickle) {
        this._work()
      }
    },

    set (amount) {
      this.isPaused = false

      if (!this.show) {
        this.display()
        this.set(0)
        setTimeout(() => {
          this.set(amount)
        }, 10)
        return
      }

      let o
      if (this.isStarted) {
        o = amount < this.progress ?
          clamp(amount, 0, 100) :
          clamp(amount, this.minimum, 100)
      } else {
        o = 0
      }

      this.status = (o === 100 ? null : o)

      queue(next => {
        this.progress = o
        if (o === 100) {
          setTimeout(() => {
            this.opacity = 0
            setTimeout(() => {
              this.progress = 0
              this.show = false
              this.error = false
              next()
            }, this.speed)
          }, this.speed)
        } else {
          setTimeout(next, this.speed)
        }
      })
    },

    increase (amount) {
      let o = this.progress

      if (!o) {
        this.set(amount)
      } else if (o >= 100) {
        return
      } else {
        if (typeof amount !== 'number') {
          if (o >= 0 && o < 25) {
            amount = Math.random() * 3 + 3
          } else if (o >= 25 && o < 50) {
            amount = Math.random() * 3
          } else if (o >= 50 && o < 85) {
            amount = Math.random() * 2
          } else if (o >= 85 && o < 99) {
            amount = 0.5
          } else {
            amount = 0
          }
        }
        this.set(clamp(o + amount, 0, this.maximum))
      }
    },

    decrease (amount) {
      if (this.progress === 0) {
        return
      }
      this.increase(-amount)
    },

    done () {
      this.set(100)
    },

    getProgress () {
      return this.status ? this.progress : 0
    },

    pause () {
      this.isPaused = true
    },

    fail () {
      this.error = true
      this.done()
    },

    display () {
      this.opacity = 1
      this.show = true
      this.progress = 0
    }
  }
}
