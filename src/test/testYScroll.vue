<template>
  <div>
    <pop-iframe :url="'http://www.baidu.com'" ref="pop"></pop-iframe>
  </div>
</template>

<script>
/* eslint-disable */
import yScroll from '../components/yScroll'
import popIframe from '../components/popIframe'

export default {
  components: {
    yScroll,
    popIframe
  },
  data () {
    return {
      onClick: (val) => {
        alert(val)
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.pop.show()
    }, 3000)
    setTimeout(() => {
      this.$refs.pop.hide()
    }, 7000)
  }
}
</script>

<style scoped>
  
</style>