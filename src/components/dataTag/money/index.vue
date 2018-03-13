<template>
  <span v-html="money"></span>
</template>

<script>
import accounting from '../../../lib/accounting.js'

export default {
  name: 'Money',
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    isCover: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cov: '******',
      cover: false
    }
  },
  computed: {
    money: function () {
      return this.isCover ? '******' : accounting.formatMoney(this.value)
    }
  }
}
</script>

<style scode>

</style>
