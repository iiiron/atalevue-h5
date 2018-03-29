<template>
  <input  maxlength="18" type="tel" v-model="data"  placeholder="输入身份证号码"/>
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'IdCardInput',
  extends: BasicInput,
  data: function () {
    return {
      verifyInfo: '请输入您的身份证号',
      afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
          this.verifyInfo = '请输入您的身份证号'
          this.verify = false
        } else if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(nv))) {
          this.verifyInfo = '您的身份证号码输入有误，请重新输入'
          this.verify = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
