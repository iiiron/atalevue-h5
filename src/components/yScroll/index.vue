<template>
  <div ref="c">
    <div :id="id" class="weScroll-wrapper" :style="{height: height + 'px'}">
      <div ref="c2" class="weScroll-scroller">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import './iscroll-probe.js'
import lodash from 'lodash'

export default {
  name: 'YScroll',
  data () {
    return {
      id: '',
      scroll: null,
      loadLock: false,

      refreshScroll: () => {
        this.$nextTick(() => {
          this.scroll.refresh()

          if (this.$refs.c2.offsetHeight - this.height <= -this.loadLeadDistance && !this.loadLock) {
            this.loadMore()
          }
        })
      },
      loadMore: lodash.debounce(() => {
        this.$emit('loadMore')
      }, 300, {maxWait:800})
    }
  },
  props: {
    height: {
      type: Number,
      default: 0
    },
    loadLeadDistance: {
      type: Number,
      default: 20
    }
  },
  created () {
    this.id = 'weTab' + parseInt(Math.random() * 10000000)
  },
  mounted () {
    var _this = this

    this.$nextTick(() => {
      this.scroll = new IScroll('#'+this.id, {
        probeType: 3
      })
      this.scroll.on('scroll',function () {
        _this.$emit('scroll', this.y + _this.$refs.c2.offsetHeight - _this.height)
        if (this.y + _this.$refs.c2.offsetHeight - _this.height <= _this.loadLeadDistance) {
          _this.loadMore()
        }
      })
    })
  },
  updated () {
    this.refreshScroll()
  },
  methods: {
    refresh: function () {
      this.refreshScroll()
    }
  },
  watch: {
    height: function (val) {
      this.refreshScroll()
    }
  },
  activated () {
    this.refreshScroll()
  },
  deactivated () {
    this.loadLock = true
  }
}
</script>

<style scoped>
.weScroll-wrapper {
  overflow: hidden;
  position: relative;
}
.weScroll-scroller {
  position: absolute;
  width: 100%;
}
</style>