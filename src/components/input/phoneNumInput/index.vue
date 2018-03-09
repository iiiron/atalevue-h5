<template>
  <input :maxlength="length" type="tel" v-model="jdata"  placeholder="请输入手机号码"/>
</template>

<script>
import NumberInput from '../numberInput'

export default {
  name: 'PhoneNumInput',
  extends: NumberInput,
  data: function () {
    return {
      verifyInfo: '请输入手机号码',

      afterVerifyPass: (nv, ov) => {
        this.verify = /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(nv)
        if (nv === '' || nv === null) {
          this.verifyInfo = '请输入手机号码'
        } else if (!this.verify) {
          this.verifyInfo = '请输入正确的手机号'
        }
      }
    }
  },
  props: {
    unsigned: {
      type: Boolean,
      default: false
    },
    float: {
      type: Number,
      default: 0
    },
    model: {
      type: Number,
      default: 1
    }
  },
  computed: {
    length: function () {
      return this.model === 1 ? 11 : 13
    },
    jdata: {
      set: function (v) {
        this.data = v.replace(/\s/g, '')
      },
      get: function () {
        if (this.model === 1) {
          return this.data
        }

        var list2 = []
        this.$lodash.forEach(this.$lodash.split(this.data, ''), (val, ind) => {
          if (ind === 3 || ind === 7) {
            list2.push(' ')
          }
          list2.push(val)
        })
        return list2.join('')
      }
    }
  }
}
</script>

<style scoped>

</style>
