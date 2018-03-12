<template>
  <div :style="{'height':'100%'}">
    <letter-position-list :data="data" @on-pick="onPick"></letter-position-list>
  </div>
</template>

<script>
import LetterPositionList from './index.vue'
import { Popup } from 'vux'

export default {
  name: 'TestPop',
  components: {
    LetterPositionList,
    Popup
  },
  data () {
    return {
      isShow: false,
      data: [],
      onPick: (val) => {
        console.log(val)
      }
    }
  },
  created () {
    this.$ajax.get('http://test.vehicleloan.fuqinjinrong.com/api/getCarBrandListFromChe300').then((res) => {
      var dl = []
      this.$lodash.forEach(res.data.result, (val, ind) => {
        var d = {
          letter: val.initial,
          data: []
        }
        this.$lodash.forEach(val.child, (v, i) => {
          d.data.push({
            name: v.brand_name,
            value: v.brand_id
          })
        })
        dl.push(d)
      })
      this.data = dl
    })
  },
  methods: {
    show: function () {
      this.isShow = true
    },
    onHide (value) {
      if (value) {
        console.log('onhide')
      }
      this.isShow = false
    }
  }
}
</script>

<style scoped>
.close{
  height:6%;
  line-height: 3.3rem;
  border-bottom:1px solid #E0E0E0;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
}
.closeSpan{
  padding: 5px 5%;
}
.importantBox{
  height:94%;
}
</style>
