<template>
	<div>{{jidCard}}</div>
</template>

<script>
	/**
	 * 模式1：原字符串
	 * 模式2：5329*********0019
	 */
	export default{
		name:"IdCard",
		props:{
			idCard:String,
			model:{
				type:Number,
				default:0
			}
		},
		computed:{
			jidCard:function(){
				if(this.model == 1){
					return this.idCard;
				}
				else if(this.model == 2){
					var ary=this.$lodash.split(this.idCard,'');
					this.$lodash.fill(ary,"*",4,ary.length-4);
					return this.$lodash.join(ary,'');
				}
			}
		}
	}
</script>

<style>
	
</style>