<template>
  <input ref="btn" type="button" @click="onClick" :value="value" :style="styleList" />
</template>

<script>
import lodash from 'lodash'
export default {
  name: 'StateButton',
  data () {
    return {
      styleList: [],

      onClick: () => {
        this.isActive ? (this.$emit('click')) : (this.$emit('clickFail'))
      },
      toggleStyle: () => {
        this.styleList = lodash.pull(this.styleList, [this.notActiveStyle, this.activeStyle])
        this.styleList.push(this.isActive ? this.activeStyle : this.notActiveStyle)
      }
    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: true
    },
    value: String,

    // 子类可以通过覆盖notActiveStyle和activeStyle这两个属性来
    // 统一的修改btn样式，当然这两个属性是props，所以它支持从组件
    // 外部来修改这两个样式
    notActiveStyle: {
      type: Object,
      default: function () {
        return {
          'background-color': '#BDBDBD'
        }
      }
    },
    activeStyle: {
      type: Object,
      default: function () {
        return {
          'background-color': '#ff8660'
        }
      }
    }
  },
  watch: {
    isActive: function (val) {
      this.toggleStyle()
    }
  },
  methods: {
    click: function () {
      this.$refs.btn.click()
    }
  },
  created () {
    this.styleList.push(this.style)
    this.toggleStyle()
  }
}
</script>

<style scoped>

</style>
