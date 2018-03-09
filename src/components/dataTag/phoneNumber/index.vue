<template>
	<div>
		<span v-if="model == 0">{{phoneNumber}}</span>
		<span v-if="model == 1">{{phoneFormatA}}</span>
		<span v-if="model == 2">{{phoneFormatB}}</span>
		<span v-if="model == 3">{{phoneFormatA}}</span>
	</div>
	
</template>

<script>
	export default{
		name:"phoneNumber",
		props:{
			phoneNumber:null,
			model:0,
//			store:Object
		},
		computed:{
			//模式1 180-0000-0000
			//模式3 180 0000 0000
			phoneFormatA:function(){
				var ph=[];
				this.$lodash.forEach(this.$lodash.toArray(this.$lodash.toString(this.phoneNumber)),(value,key)=>{
					if(key == 3 || key == 7){
						this.model == 1 ? (ph.push("-")) : (ph.push(" "));
					}
					ph.push(value);
				});
				return this.$lodash.join(ph,"");
			},
			//模式2  180****0000
			phoneFormatB:function(){
				var ph=[];
				this.$lodash.forEach(this.$lodash.toArray(this.$lodash.toString(this.phoneNumber)),function(value,key){
					if( 3 <= key  && key <= 6)
						ph.push("*");
					else
						ph.push(value);
				});
				return this.$lodash.join(ph,"");
			}
		},
		mounted:function(){
//			console.log(this.store);
//			this.store.add();
		}
	}
</script>

<style>
	
</style>