<!-- <template>
  <input v-model="data" type="tel" />
</template> -->

<script>
import NumberInput from '../numberInput'

export default {
  name: 'MoneyInput',
  extends: NumberInput,
  data: function () {
    return {
      verifyInfo: '请输入金额'
    }
  },
  props: {
    maxErrorMsg: {
      type: String,
      default: '输入金额超限'
    },
    minErrorMsg: {
      type: String,
      default: '输入金额不足'
    },
    nullErrorMsg: {
      type: String,
      default: '请输入金额'
    }
  }
}
</script>

<style>

</style>
