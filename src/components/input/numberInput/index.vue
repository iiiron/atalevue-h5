<template>
  <input v-model="data" type="tel" />
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'NumberInput',
  extends: BasicInput,
  data: function () {
    return {
      verifyInfo: '请输入',
      validator: (nv = '', ov) => {
        if (this.maxLength < nv.length) {
          return false
        } else if (nv === '') {
          return true
        } else {
          var unsigned = this.unsigned ? '-?' : ''
          var dot = this.float <= 0 ? '' : '\\.?'
          var reg = new RegExp('^' + unsigned + '\\d*' + dot + '\\d{0,' + this.float + '}$')
          return reg.test(nv)
        }
      },
      afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
          this.verifyInfo = this.nullErrorMsg
          this.verify = false
        } else if (Number(nv) < this.min) {
          this.verifyInfo = this.minErrorMsg
          this.$emit('on-lessMin', this.maxErrorMsg)
          this.verify = false
        } else if (this.max < Number(nv)) {
          this.verifyInfo = this.maxErrorMsg
          this.$emit('on-overMax', this.maxErrorMsg)
          this.verify = false
        }
      }
    }
  },
  // 强制校验的属性会限制用户输入，而非强制校验属性，仅仅给出错误信息
  props: {
    // 可输入最长位数，小数点算一位，强制
    maxLength: {
      type: Number,
      default: 12
    },
    // 小数位数，强制
    float: {
      type: Number,
      default: 2
    },
    // 是否支持符号(+-号)，强制
    unsigned: {
      type: Boolean,
      default: true
    },
    // 输入的最大数字，非强制
    max: {
      type: Number,
      default: 999999999999
    },
    // 输入的最小数字，非强制
    min: {
      type: Number,
      default: 0
    },
    // 超过最大时的错误提示信息
    maxErrorMsg: {
      type: String,
      default: '输入超限'
    },
    // 不足最小时的错误信息
    minErrorMsg: {
      type: String,
      default: '输入不足'
    },
    // 输入为空时的错误信息
    nullErrorMsg: {
      type: String,
      default: '请输入'
    }
  }
}
</script>

<style>

</style>
