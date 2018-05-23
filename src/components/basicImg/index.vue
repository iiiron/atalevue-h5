<!-- 该组件支持继承，只需覆盖defaultImg就可以 -->
<template>
  <img ref="img" :src="image" @error="onError">
</template>

<script>
export default {
  name: 'BasicImg',
  data () {
    return {
      image: '',

      onError: () => {
        this.$emit('error')
        this.image = this.defaultImg
      }
    }
  },
  props: {
    img: String,
    defaultImg: {
      type: String,
      default: require('./default.png')
    }
  },
  watch: {
    img (val) {
      this.image = val === undefined || val === null || val === '' ? this.defaultImg : val
    }
  },
  created () {
    this.image = this.img === undefined || this.img === null || this.img === '' ? this.defaultImg : this.img
  }
}
</script>

<style>

</style>
