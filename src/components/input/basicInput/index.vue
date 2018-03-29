<!-- author 万相明 2017.12-->

<!-- 继承时，子组件的模板会覆盖父组件 -->
<template>
  <input v-model="data" />
</template>

<script>
import lodash from 'lodash'

export default{
  name: 'BasicInput',
  data () {
    return {
      data: undefined,

      // 延迟函数，不建议子类覆盖该函数
      debounce: function () {},

      // 强制校验器，返回值为false时，会强制回退当次输入。
      validator: function (nv, ov) { return true },
      // 输入校验结果，它并不是强制校验器的结果。
      // 你可以通过各个钩子函数来修改这个值，该值会被input事件带出
      verify: false,
      // 输入校验提示信息，它并不是强制校验器的结果。
      // 你可以通过各个钩子函数来修改这个值，该值会被input事件带出
      verifyInfo: '',
      // 验证通过后的钩子函数
      afterVerifyPass: function (nv, ov) {},
      // 内容输出前的勾子函数，需要返回输出值，该函数可影响最终的输出值，
      // 多次连续输入后，只在debounce延迟结束时触发一次该钩子函数，
      // 若延迟为0，则每次输入都触发该函数
      beforeOutput: function (val) { return val }
    }
  },
  props: {
    value: undefined,
    delay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getVerify: function () {
      return this.verify
    },
    getVerifyInfo: function () {
      return this.verifyInfo
    }
  },
  watch: {
    value: function (nv, ov) {
      this.data = nv
    },
    data: function (newval, oldval) {
      if (this.validator(newval, oldval)) {
        this.debounce(newval, oldval)
        this.afterVerifyPass(newval, oldval)
      } else {
        newval !== '' && (this.data = oldval)
      }
    }
  },
  created () {
    this.debounce = lodash.debounce((newval, oldval) => {
      this.$emit('input', this.beforeOutput(newval), this.verify, this.verifyInfo)
    }, this.delay)
    if (this.value !== undefined && this.value !== null) {
      this.data = this.value
    }
  }
}
</script>
