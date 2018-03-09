<template>
	<div>{{jname}}</div>
</template>

<script>
	export default{
		name:"Name",
		props:{
			name:String,
			model:{
				type:Number,
				default:1
			}
		},
		computed:{
			jname:function(){
				if(this.model == 1){
					return this.name;
				}
				else if(this.model == 2){
					var ary=this.$lodash.split(this.name,'');
					this.$lodash.fill(ary,"*",0,ary.length-1);
					return this.$lodash.join(ary,'');
				}
			}
		}
	}
</script>

<style>
	
</style>