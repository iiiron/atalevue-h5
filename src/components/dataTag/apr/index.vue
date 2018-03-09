<template>
	<div>
		<span>
			<font :class="mud.minInteger">{{minInteger}}</font><font :class="mud.minDecimal">.{{minDecimal}}</font><font :class="mud.minPer">%</font>
		</span><span v-if="max">
			<font :class="mud.maxWave">~</font><font :class="mud.maxInteger">{{maxInteger}}</font><font :class="mud.maxDecimal">.{{maxDecimal}}</font><font :class="mud.maxPer">%</font>
		</span><span v-if="floating">
			<font :class="mud.floatingAdd">+</font><font :class="mud.floatingInteger">{{floatingInteger}}</font><font :class="mud.floatingDecimal">.{{floatingDecimal}}</font><font :class="mud.floatingPer">%</font>
		</span>
	</div>
</template>
 
<script>
	export default{
		name:"Apr",
		props:{
			min:{
				type:Number,
				default:0
			},
			max:{
				type:Number,
				default:null
			},
			floating:{
				type:Number,
				default:null
			},
			model:{
				type:Number,
				default:1
			}
		},
		data:function(){
			return {
				mud:{
					minInteger:"midderFont",//下限位的整数位
					minDecimal:"midderFont",//下限位的小数位
					minPer:"midderFont",//下限位的百分号

					maxWave:"midderFont",//上限的~
					maxInteger:"midderFont",//上限的整数位
					maxDecimal:"midderFont",//上限的小数位
					maxPer:"midderFont",//上限的百分号

					floatingAdd:"midderFont",//浮动位的+
					floatingInteger:"midderFont",//浮动位的整数位
					floatingDecimal:"midderFont",//浮动位的小数位
					floatingPer:"midderFont",//浮动位的百分号
				}
			}
		},
		mounted:function(){
			//模式1，默认样式
			//模式2，精选首页橙色数据样式 
			//模式3，财富宝详情页数据样式
			//模式4，财富宝详情页数据样式
			 
			switch(this.model){
				case 2:
					this.mud.minInteger="mainColor middFont";
					this.mud.minDecimal="mainColor middFont"
					this.mud.minPer="mainColor smallFont";
					
					this.mud.floatingAdd="mainColor smallFont";
					this.mud.floatingInteger="mainColor smallFont";
					this.mud.floatingDecimal="mainColor smallFont";						
					this.mud.floatingPer="mainColor smallFont";
					break;	
				case 3:
					this.mud.minInteger="mainColor bigFont";
					this.mud.minDecimal="mainColor bigFont"
					this.mud.minPer="hide";
					
					this.mud.maxWave="mainColor bigFont"
					
					this.mud.maxInteger="mainColor bigFont"
					this.mud.maxDecimal="mainColor bigFont"
					this.mud.maxPer="mainColor smallFont"
					break;
				case 4:
					this.mud.minInteger="mainColor bigFont";
					this.mud.minDecimal="mainColor bigFont"
					this.mud.minPer="mainColor middFont";
					
					this.mud.floatingAdd="mainColor middFont";
					this.mud.floatingInteger="mainColor middFont";
					this.mud.floatingDecimal="mainColor middFont";						
					this.mud.floatingPer="mainColor middFont";
					break;
				case 5:
					this.mud.minInteger="mainColor bigFont";
					this.mud.minDecimal="mainColor bigFont"
					this.mud.minPer="mainColor smallerFont";
					
					this.mud.floatingAdd="mainColor middFont";
					this.mud.floatingInteger="mainColor bigFont";
					break;
				case 6:
					this.mud.minInteger="smallerFont lightColor";
					this.mud.minDecimal="smallerFont lightColor"
					this.mud.minPer="smallerFont lightColor";
					
					this.mud.floatingAdd="smallerFont lightColor";//浮动位的+
					this.mud.floatingInteger="smallerFont lightColor";//浮动位的整数位
					this.mud.floatingDecimal="smallerFont lightColor";//浮动位的小数位
					this.mud.floatingPer="smallerFont lightColor";//浮动位的百分号
					break;
			}
		},
		computed:{
			minInteger:function(){
				return parseInt(this.min);
			},
			minDecimal:function(){
				return Number(this.min).toFixed(1)*10%10
			},
			maxInteger:function(){
				return parseInt(this.max);
			},
			maxDecimal:function(){
				return Number(this.max).toFixed(1)*10%10
			},
			floatingInteger:function(){
				return parseInt(this.floating);
			},
			floatingDecimal:function(){
				return Number(this.floating).toFixed(1)*10%10
			}
		}
	}
</script>

<style scoped>
	.hide{display:none;}
</style>