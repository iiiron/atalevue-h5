<template>
  <input v-model="data" readonly @focus="$event.target.blur()"/>
</template>

<script>
import BasicInput from '../basicInput'

export default {
  name: 'PickInput',
  extends: BasicInput,
  data: function () {
    return {
      verifyInfo: this.eMsg || '请输入选项',
      afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
          this.verify = false
        }
      }
    }
  },
  props: {
    eMsg: {
      type: String,
      default: null
    }
  },
  watch: {
    eMsg: (val) => {
      this.verifyInfo = val
    }
  }
}
</script>

<style scoped>

</style>
