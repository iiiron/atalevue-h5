<template>
  <span v-html="data"></span>
</template>

<script>
export default {
  name: 'Name',
  data () {
    return {}
  },
  props: {
    value: String,
    // 模式1：张*
    // 模式2：*三
    model: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // data这样写是为了模式1和模式2的代码不纠缠在一起，虽然这会带来
    // 少许重复代码
    data: function () {
      if (this.model === 1) {
        if (this.value.length >= 2) {
          let list = this.value.split('')
          return list.map((val, ind) => {
            return ind === 0 ? val : '*'
          }).join('')
        } else {
          return this.value
        }
      } else if (this.model === 2) {
        if (this.value.length >= 2) {
          let list = this.value.split('')
          return list.map((val, ind) => {
            return ind === this.value.length - 1 ? val : '*'
          }).join('')
        } else {
          return this.value
        }
      } else {
        return this.value
      }
    }
  }
}
</script>

<style scode>

</style>
