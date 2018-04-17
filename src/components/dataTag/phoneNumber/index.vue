<template>
  <span v-html="number"></span>
</template>

<script>
import {PhoneNumber} from 'atalevue'

export default{
  name: 'PhoneNumber',
  data: function () {
    return {}
  },
  extends: PhoneNumber
}
</script>

<style scode>

</style>
