<!-- 该组件支持继承，只需覆盖defaultImg就可以 -->
<template>
  <img ref="img" :src="image" @error="onError">
</template>

<script>
export default{
  data () {
    return {
      defaultImg: require('./default.png'),
      image: '',

      onError: () => {
        this.$emit('error')
        this.image = this.defaultImg
      }
    }
  },
  props: {
    img: String
  },
  watch: {
    img (val) {
      this.image = val
    }
  },
  created () {
    this.image = this.img === undefined || this.img === null || this.img === '' ? this.defaultImg : this.img
  }
}
</script>

<style>

</style>
