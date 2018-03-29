<template>
  <input v-model="data" />
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'CommonInput',
  extends: BasicInput,
  data: function () {
    return {
      verifyInfo: '请输入',
      afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
          this.verify = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
