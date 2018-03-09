<template>
  <div>
    <span v-if="model === 1">{{value}}</span>
    <span v-if="model === 2">{{modelA}}</span>
    <span v-if="model === 3" v-html="modelB"></span>
    <span v-if="model === 4" v-html="modelC"></span>
  </div>
</template>

<script>
import lodash from 'lodash'
export default{
  name: 'BankCard',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 模式1，6214000000000135
    // 模式2，6214********0135
    // 模式3，6214 0000 0000 0135
    // 模式4，6214 **** **** 0135
    model: {
      type: Number,
      default: 1
    },
    // 指定每段之间的空格数
    space: {
      type: Number,
      default: 1
    },
    // 指定每段数字位数
    chunk: {
      type: Number,
      default: 4
    }
  },
  data: function () {
    return {
      card: ''
    }
  },
  created: function () {
    this.card = this.value
  },
  watch: {
    value: function (nv) {
      this.card = nv
    }
  },
  computed:{
    modelA: function () {
      var ph = lodash.toArray(lodash.toString(this.card))
      lodash.fill(ph, "*", this.chunk, ph.length < this.chunk ? ph.length : ph.length-this.chunk)
      return lodash.toString(lodash.join(ph,""))
    },
    modelB: function () {
      var ph = lodash.chunk(lodash.toArray(lodash.toString(this.card)), this.chunk)
      var str = ''
      lodash.forEach(ph, (val, ind) => {
        if (ind !== 0) {
          lodash.times(this.space, function () {
            str += '&nbsp'
          })
        }
        str += lodash.join(val, '')
      })
      return str
    },
    modelC: function () {
      this.card = this.modelA
      while (!(this.card.length <= 16)) {
        this.card = lodash.replace(this.card, /\*/, '')
      }
      return this.modelB
    }
  }
}
</script>

<style scode>
  
</style>
