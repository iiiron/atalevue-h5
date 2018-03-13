<template>
  <span v-html="number"></span>
</template>

<script>
import lodash from 'lodash'
import weLodash from '../../../utils/weLodash.js'
export default{
  name: 'PhoneNumber',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    model: {
      type: Number,
      default: 0
    },
    formatList: {
      type: Array,
      default: function () {
        return [{
          model: 1,
          format: '%%%-%%%%-%%%%'
        }, {
          model: 2,
          format: '%%% %%%% %%%%'
        }, {
          model: 3,
          format: '*******%%%%'
        }, {
          model: 4,
          format: '%%% **** %%%%'
        }]
      }
    }
  },
  data: function () {
    return {}
  },
  computed: {
    number: function () {
      var format = lodash.find(this.formatList, (val, ind) => {
        return val.model === this.model
      }).format || '%%%%%%%%%%%'
      return weLodash.fillIn(this.value, format).replace(/ /g, '&nbsp;')
    }
  }
}
</script>

<style scode>

</style>
