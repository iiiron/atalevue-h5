<template>
  <div :style="{'height':'100%'}">
    <jdata-list ref="jdata" :data="data" :slide="slide" class="left" @click="onClick"></jdata-list>
    <word-list class="right" @touch-end="touchEnd"></word-list>
  </div>
</template>
<script>
  import JdataList from './jdataList.vue'
  import wordList from './wordList.vue'
  
  export default{
    name: 'LetterPositionList',
    data () {
      return {
        onClick: (name, value) => {
          this.$emit("on-pick", name, value)
        },
        touchEnd: () => {
          this.$refs.jdata.hideToast()
        }
      }
    },
    props: {
      data: Array,
      slide: {
        type: Boolean,
        default: false
      }
    },
    components: {
      JdataList,
      wordList
    }
  }
</script>

<style scoped>
.left{
  width: 88%;
  height:100%;
  overflow: hidden;
  float:left;
}
.right{
  background: #F5F5F5;
  width:12%;
  height:100%;
  float:right;
}
</style>
