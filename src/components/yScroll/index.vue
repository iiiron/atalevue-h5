<template>
  <div ref="c">
    <div ref="scroll" :id="id" class="weScroll-wrapper" :style="{height: height + 'px'}" @scroll="onScroll">
      <div ref="c2" class="weScroll-scroller">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
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
          this.tryLoad()
        })
      },
      loadMore: lodash.debounce(() => {
        this.$emit('loadMore')
      }, 300, {maxWait:800}),
      tryLoad: () => {
        if (((this.$refs.c2.offsetHeight - this.height <= -this.loadLeadDistance) || (-this.scrollY + this.$refs.c2.offsetHeight - this.height <= this.loadLeadDistance)) && !this.loadLock) {
          this.loadMore()
        }
      },
      onScroll: (e) => {
        let y = e.target.scrollTop

        this.$emit('scroll', y, this.$refs.c2.offsetHeight, this.height)
        this.scrollY = y
        this.tryLoad()
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
    this.$refs.scroll.scrollTop = this.scrollY
  },
  deactivated () {
    this.loadLock = true
  }
}
</script>

<style scoped>
.weScroll-wrapper {
  overflow: scroll;
  position: relative;
}
.weScroll-wrapper::-webkit-scrollbar {
    display: none;
}
.weScroll-scroller {
  position: absolute;
  width: 100%;
  -webkit-overflow-scrolling : touch; 
}
</style>