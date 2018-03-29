<template>
  <input :type="contentType" maxlength="20" v-model="data"  placeholder="请输入登陆密码"/>
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'PassWordInput',
  data: function () {
    return {
      verifyInfo: '请输入登陆密码',

      // 该方法决定了合法的密码格式，你可以通过继承该组件
      // 覆盖该方法的方式修改密码格式校验方式
      passWordValidator: (nv) => {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(nv)
      },
      afterVerifyPass: (nv = '', ov) => {
        this.verify = this.passWordValidator(nv)
        if (nv.length === 0) {
          this.verifyInfo = '请输入登陆密码'
        } else if (!this.verify) {
          this.verifyInfo = '登录密码须是8-16位数字与字母组合'
        }
      }
    }
  },
  props: {
    isCiphertext: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    contentType: function () {
      return this.isCiphertext ? 'password' : 'text'
    }
  },
  extends: BasicInput
}
</script>

<style scoped>

</style>
