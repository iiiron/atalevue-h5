<template>
  <span v-html="money"></span>
</template>

<script>
import {Money} from 'atalevue'

export default {
  name: 'Money',
  data () {
    return {}
  },
  extends: Money
}
</script>

<style scode>

</style>
