<template>
  <div>
    <div ref='parent' :style="{'height':'100%','overflow':'auto'}" @touchmove="onMove">
      <div v-for="(item,index) in allData" :key="index">
        <div class="nowWord deepColor smallFont" :ref="item.letter">{{item.letter}}</div>
        <div class="nowData deepColor smallFont baseBack" v-for="(value,ind) in item.data" @click="onClick(value.name,value.value)" :key="ind">{{value.name}}</div>
      </div>
      <toast v-model="toastShow" type="text" width="4rem" time="60000">
        <div slot="default" class="toastDiv">
          {{toastPop}}
        </div>
      </toast>
    </div>
  </div>
</template>

<script>
import store from './store.js'
import measurer from './measurer.js'
import {Toast} from 'vux'
export default {
  name: 'JdataList',
  props: {
    data: Array,
    slide: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Toast
  },
  data () {
    return {
      toastPop: '',
      toastShow: false,
      store: store,

      onMove: () => {
        // this.store.updateLetter("")
      },
      onClick: (name, value) => {
        this.$emit('click', name, value)
      },
      distanceFromTop: (element) => {
        return element.offsetTop - (document.documentElement.scrollTop || document.body.scrollTop)
      }
    }
  },
  methods: {
    hideToast: function () {
      this.toastShow = false
    }
  },
  computed: {
    allData: function () {
      return this.$lodash.sortBy(this.data, (o) => {
        o.letter = o.letter.toUpperCase()
        return o.letter
      })
    },
    letter: function (v) {
      return this.store.state.letter
    }
  },
  watch: {
    letter: function (val) {
      if (val === '' || val === undefined || val === null) {
        this.toastShow = false
        return
      }
      this.toastShow = true
      this.toastPop = val
      this.$lodash.forEach(this.$refs, (v, ind) => {
        if (ind === val) {
          var h = measurer.distanceFromTop(this.$refs.parent)
          this.$refs.parent.scrollTop = v[0].offsetTop - h
        }
      })
    }
  }
}
</script>

<style scoped>
.nowWord,.nowData{
  height: 3.3rem;
  line-height: 3.3rem;
  padding-left: 5%;
}
.nowData{
  border-bottom:1px solid #E0E0E0;
}
.weui-toast{
  background: white;
}
.toastDiv{
  background: #C79F67;
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  font-size: 2rem;
  border-radius: 10%;
  margin-top: -1rem;
  margin-bottom: -1rem;
}
</style>
