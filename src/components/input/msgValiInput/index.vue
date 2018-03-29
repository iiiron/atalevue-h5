<template>
  <input type="tel" v-model="data"  placeholder="输入短信验证码"/>
</template>

<script>
import NumberInptut from '../numberInput'

export default {
  name: 'MsgValiInput',
  extends: NumberInptut,
  data: function () {
    return {
      verifyInfo: '请输入验证码',
      afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
          this.verifyInfo = '请输入验证码'
          this.verify = false
        } else if (nv.length !== this.maxLength) {
          this.verifyInfo = '请输入正确的验证码'
          this.verify = false
        }
      }
    }
  },
  props: {
    maxLength: {
      type: Number,
      default: 6
    },
    float: {
      type: Number,
      default: 0
    },
    unsigned: {
      type: Boolean,
      default: false
    },
    // 超过最大时的错误提示信息
    maxErrorMsg: {
      type: String,
      default: '请输入正确的验证码'
    },
    // 不足最小时的错误信息
    minErrorMsg: {
      type: String,
      default: '请输入正确的验证码'
    },
    // 输入为空时的错误信息
    nullErrorMsg: {
      type: String,
      default: '请输入验证码'
    }
  }
}
</script>

<style scoped>

</style>
