<template>
  <div>{{showDate}}</div>
</template>

<script>
import formator from "@/assets/formator.js"

export default {
  name: 'date',
  props: {
    date: {
      type:Date,
      default: () => new Date()
    },
    string:{
      type:String,
      default:"null"
    },
    time: {
      type:Number,
      default:-1
    },
    format:{
      type:String,
      default:"yyyy-MM-dd hh:mm:ss"
    }
  },
  data () {
    return {}
  },
  computed: {
    showDate: function () {
      if(this.time !== -1){
        return formator.dateFormat(new Date(this.time),this.format)
      }
      else if(this.string !== "null"){
        return formator.dateFormat(new Date(this.string),this.format)
      }
      return formator.dateFormat(this.date,this.format)
    }
  }
}
</script>

<style>
  
</style>