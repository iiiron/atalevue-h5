<template>
  <div>
    <popup ref="pop" v-model="open" :width="'100%'" :show-mask="true" :popup-style="{background:'#fff'}" :hide-on-blur="false">
      <!-- 输入框上方插槽 -->
      <slot name="boardTop">
        <!-- <div style="height:20px"></div> -->
      </slot>
      <div style="padding-left:30px;padding-right:30px;">
        <div class="inputBox">
          <div ref="c1" v-for="ind in 6" :key="ind" class="c1">
            <div class="inputEach" ref="inp" type="tel" name="" value="" maxlength="1" readonly></div>
          </div>
        </div>
      </div>
      <!-- 输入框下方插槽 -->
      <slot name="boardBottom" class="boardBottom" >
        <!-- <div style="height:20px"></div> -->
      </slot>
      <div class="c3">
        <div ref="keyboard" class="item1" v-for="ind in 9" :key="ind" @click="input(ind)">
          <div>{{ind}}</div>
        </div>
        <div class="item2 item1"></div>
        <div class="item1" @click="input(0)">0</div>
        <div class="item2 item1" @click="dele"><x-icon type="backspace-outline"></x-icon></div>
      </div>
    </popup>
  </div>
</template>

<script>
import { Grid, GridItem, Popup } from 'vux'
import lodash from 'lodash'

export default{
  name: 'NumberKeyBoard',
  data: function () {
    return {
      msg: [],
      open: false,

      input: (num) => {
        if (this.msg.length < 6) {
          this.msg.push(num)
        }
      },
      dele: () => {
        this.msg.pop()
      },
      initInp: () => {
        var w = window.screen.width
        var w1 = w - 60 - 48
        var w3 = w1 / 6

        this.$refs.c1.forEach((val, ind) => {
          val.style.height = w3 - 4 + 'px'
        })
      },
      initKeyBoard: () => {
        var w = window.screen.width
        var w1 = w / 3
        var wList = [w1, w1 - 2, w1, w1, w1 - 2, w1, w1, w1 - 2, w1]
        var cList = ['item1', 'item1 item3', 'item1', 'item1', 'item1 item3', 'item1', 'item1', 'item1 item3', 'item1']
        this.$refs.keyboard.forEach((val, ind) => {
          val.style.width = wList[ind] + 'px'
          val.className = cList[ind]
        })
      }
    }
  },
  props: {
    value: false
  },
  mounted: function () {
    this.open = this.value

    this.initKeyBoard()
    this.initInp()
  },
  methods: {
    clear: function () {
      this.msg = []
    }
  },
  watch: {
    value: function (nv) {
      this.open = nv
    },
    open: function (nv) {
      this.$emit('input', nv)
    },
    msg: function () {
      this.$refs.inp.forEach((val, ind) => {
        val.innerHTML = this.msg[ind] === undefined ? '' : this.msg[ind]
      })

      if (this.msg.length === 6) {
        this.$emit('finished', lodash.join(this.msg, ''))
      }
    }
  },
  components: {
    Grid,
    GridItem,
    Popup
  }
}
</script>

<style scoped>
.inputBox{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
}
.c1{
  flex:1;
  margin-left: 4px;
  margin-right: 4px;
  border: 1px solid #bbbbbb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputEach{
  text-align: center;
  line-height: center;
}
.boardBottom {
  display: flex;
}
.c3{
  display: flex;
  flex-wrap: wrap;
}
.item1{
  width: 33.3%;
  align-items: center;
  height: 62px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #bbbbbb;
}
.item2 {
  background: #D1D5DB;
}
.item3{
  border-left: 1px solid #bbbbbb;
  border-right: 1px solid #bbbbbb;
}
</style>
