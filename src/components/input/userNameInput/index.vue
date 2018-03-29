<template>
  <input type="text" v-model="data"  placeholder="请输入您的真实姓名"/>
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'UserNameInput',
  data: function () {
    return {
      verifyInfo: '请输入您的姓名',
      afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
          this.verifyInfo = '请输入您的真实姓名'
          this.verify = false
        } else if (!(/^[\u4e00-\u9fa5]{2,16}$/.test(nv))) {
          this.verifyInfo = '您的姓名输入有误，请重新输入'
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
