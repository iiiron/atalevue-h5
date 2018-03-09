<template>
	  <div>
      <span v-if="!isCover">{{showMoney}}</span>
      <span v-if="isCover">{{cov}}</span>
    </div> 
</template>

<script>
import accounting from '@/assets/accounting.js'

export default {
  name: 'Money',
  props: {
    money:null
  },
  data () {
    return {
      cov:"******",
      isCover:false
    }
  },
  computed: {
    showMoney: function () {
      return accounting.formatMoney(this.money)
    }
  },
  methods:{
    cover:function(){
      this.isCover=true;
    },
    uncover:function(){
      this.isCover=false;
    }
  }
}
</script>

<style>
</style>