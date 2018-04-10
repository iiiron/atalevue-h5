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
/* eslint-disable */
import IScroll from './iscroll-probe.js'
import lodash from 'lodash'

export default {
  name: 'YScroll',
  data () {
    return {
      id: '',
      scroll: null,
      scrollY: 0,
      
      //该锁用于防止页面离开后触发loadMore回调
      loadLock: false,

      refreshScroll: () => {
        this.$nextTick(() => {
          this.scroll.refresh()

          this.tryLoad()
        })
      },
      loadMore: lodash.debounce(() => {
        this.$emit('loadMore')
      }, 300, {maxWait:800}),
      tryLoad: () => {
        if (((this.$refs.c2.offsetHeight - this.height <= -this.loadLeadDistance) || (this.scrollY + this.$refs.c2.offsetHeight - this.height <= this.loadLeadDistance)) && !this.loadLock) {
          this.loadMore()
        }
      }
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
        probeType: 3,
        tap: true
      })
      this.scroll.on('scroll',function () {
        _this.$emit('scroll', this.y, _this.$refs.c2.offsetHeight, _this.height)
        _this.scrollY = this.y
        _this.tryLoad()
      })
    })
  },
  updated () {
    this.refreshScroll()
  },
  methods: {
    refresh: function () {
      this.refreshScroll()
    },
    tryLoadMore: function () {
      this.tryLoad()
    }
  },
  watch: {
    height: function (val) {
      this.refreshScroll()
    }
  },
  activated () {
    this.loadLock = false
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