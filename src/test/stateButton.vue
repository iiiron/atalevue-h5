<script>
import stateButton from '@/components/stateButton'
export default {
  data () {
    return {

    }
  },
  props: {
    notActiveStyle: {
      type: Object,
      default: function () {
        return {
          'background-color': 'black'
        }
      }
    },
    activeStyle: {
      type: Object,
      default: function () {
        return {
          'background-color': 'white'
        }
      }
    }
  },
  extends: stateButton
}
</script>

<style scode>

</style>
