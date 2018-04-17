<template>
  <span v-html="card"></span>
</template>

<script>
import {IdCard} from 'atalevue'

export default{
  name: 'IdCard',
  data () {
    return {}
  },
  extends: IdCard
}
</script>

<style scode>

</style>
