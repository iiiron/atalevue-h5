<template>
  <input v-model="data" type="tel" placeholder="请输入持卡人的银行卡号" />
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'BankCardInput',
  data: function () {
    return {
      verifyInfo: '请输入银行卡号',
      afterVerifyPass: (nv = '') => {
        this.verify = true
        if (nv.length === 0) {
          this.verifyInfo = '请输入银行卡号'
          this.verify = false
        } else if (!(/^[0-9]{15,22}$/.test(nv))) {
          this.verifyInfo = '请输入正确的银行卡号'
          this.verify = false
        }
      }
    }
  },
  extends: BasicInput
}
</script>

<style scoped>

</style>
