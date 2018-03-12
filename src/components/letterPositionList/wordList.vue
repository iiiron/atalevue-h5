<template>
  <div>
    <div ref="c1" class="bigBox deepColor smallFont" @touchmove="touchMove($event)" @touchend="touchEnd($event)" @touchstart="touchStart($event)">
      <div v-for="(item,index) in allWords"  class="popBox" :key="index">
        <popover  class="smallBox" :placement="'left'">
          <div slot="default" class="default" ref="wor">{{item}}</div>
        </popover>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover } from 'vux'
import store from './store.js'
import measurer from './measurer.js'

export default {
  name: 'WordList',
  data () {
    return {
      allWords: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      lastWord: null,
      jclientY: 0,
      store: store,

      getIndex: (y) => {
        var h = measurer.distanceFromTop(this.$refs.c1)
        return parseInt((y - h) / (this.h2))
      },
      touchMove: (val) => {
        val.preventDefault()
        var ind = this.getIndex(val.touches[0].clientY)
        this.jclientY = val.touches[0].clientY
        if (this.lastWord !== ind) {
          try {
            this.store.updateLetter(this.allWords[ind])
          } catch (e) {
            console.log(e)
          }
        }
        this.lastWord = ind
      },
      touchEnd: (val) => {
        val.preventDefault()
        this.store.updateLetter('')
        this.$emit('touch-end')
      },
      touchStart: (val) => {
        val.preventDefault()
        var y = val.touches[0].clientY
        var ind = this.getIndex(y)
        this.store.updateLetter(this.allWords[ind])
        this.jclientY = y
        this.lastWord = ind
      }
    }
  },
  computed: {
    h2: function () {
      return this.$refs.c1.offsetHeight / 26
    }
  },
  components: {
    Popover
  }
}
</script>

<style scoped>
.bigBox{
  border-left:1px solid #E0E0E0;
  border-right:1px solid #E0E0E0;
  width:100%;height:100%;
  display: flex;
  flex-direction:column;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
}
.popBox{
  width:100%;
  height: 1rem;
  flex-grow: 1;
  text-align: center;
}
.smallBox{
  height: 100%;
}
.content{
  padding: 5px 10px;
}
</style>
