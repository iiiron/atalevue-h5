<template>
  <div>
    <y-scroll :height="300">
      <input @click="onClick(val)" v-for="(val) in 6" :key="val">{{val}}</input>
    </y-scroll>
  </div>
</template>

<script>
/* eslint-disable */
import yScroll from '../components/yScroll'
export default {
  components: {
    yScroll
  },
  data () {
    return {
      onClick: (val) => {
        alert(val)
      }
    }
  }
}
</script>

<style scoped>
  
</style>