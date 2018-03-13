<template>
  <span v-html="card"></span>
</template>

<script>
import lodash from 'lodash'
import weLodash from '../../../utils/weLodash.js'
export default{
  name: 'BankCard',
  props: {
    value: {
      type: String,
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
          format: [
            '_*_*_*_*_*_*_*_*_*_*_*_*%%%%',
            '_*_*_*_*_*_*_*_*_*_*_*_*^^%%%%',
            '_*_*_*_*_*_*_*_*_*_*_*_*^^^%%%%'
          ]
        }, {
          model: 2,
          format: [
            '_*_*_*_* _*_*_*_* _*_*_*_* %%%%',
            '_*_*_*_* _*_*_*_* _*_*_*_*^^ %%%%',
            '_*_*_*_* _*_*_*_* _*_*_*_*^^^ %%%%'
          ]
        }, {
          model: 3,
          format: [
            '%%%% _*_*_*_* _*_*_*_* %%%%',
            '%%%% _*_*_*_* _*_*_*_*^^ %%%%',
            '%%%% _*_*_*_* _*_*_*_*^^^ %%%%'
          ]
        }]
      }
    }
  },
  data: function () {
    return {
      findFormat: (content, model, formatList) => {
        var def = '%%%%%%%%%%%%%%%%%%%'
        try {
          var f = lodash.find(formatList, (val, ind) => {
            return val.model === model
          })
          return lodash.find(f.format, (v, i) => {
            v = v.replace(/\s/g, '')
            return v.length === content.length
          }) || def
        } catch (e) {
          return def
        }
      }
    }
  },
  computed: {
    card: function () {
      return weLodash.fillIn(this.value, this.findFormat(this.value, this.model, this.formatList)).replace(/ /g, '&nbsp;')
    }
  }
}
</script>

<style scode>

</style>
