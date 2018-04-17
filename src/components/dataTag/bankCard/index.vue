<template>
  <span v-html="card"></span>
</template>

<script>
import {BankCard} from 'atalevue'

export default{
  name: 'BankCard',
  data () {
    return {}
  },
  extends: BankCard
}
</script>

<style scode>

</style>
