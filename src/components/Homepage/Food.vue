<template>
    <!--=== Food Info ===-->
	<div id="#food" class = "text-center py-1">
		<div class = "selectionBoilerPlate" @click="open = !open" v-if="open===false">
			{{selectionBoilerPlate}}
		</div>
		<transition name="fade">
		<div v-if="open===true">
			<span class>
				<h3 style="cursor:pointer" @click="open = !open"> ^ </h3> 
				 </span>
		<h6>Please select your entree</h6>
		<div class="form-check py-1" v-for ="option in entreOptions" :key="option.name">
  <input class="form-check-input" type="radio" :name="option.name.replace(/\s/g, '')" :id="option.name.replace(/\s/g, '')" :value="option.name" v-model="selection">
  <label class="form-check-label" :for="option.name.replace(/\s/g, '')">
   <h4 class = 'my-0'> <span v-if="option.vegitarian"> (v)</span>{{option.name}}</h4>
	{{option.subName}}
  </label>
	</div>
</div>
	</transition>
	</div>
	<!--== End of Food info. ==-->

</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			entreOptions:[
				{id:1, name:'Top Sirloin',subName:'with cabernet demi-glaze',photo:'', vegitarian:false},
				{id:2, name:'Glazed Chicken Breast',subName:'with a honey, thyme, and butter sauce',photo:'',vegitarian:false},
				{id:3, name:'Stuffed Acorn Squash',subName:'with faro and spicy marinara sauce',photo:'',vegitarian:true}
			],
			selection:null,
			open:false,
			apiFunc:null,
		}
	},
	computed:{
		selectionBoilerPlate(){
			if(this.selection){
				return `You've chosen ${this.selection} as your entree. Click here to update your section.`
			}
			else{
				return 'Click here to choose your entree'
			}
		}
	},
	watch:{
		selection(){
			if(this.apiFunc === "food"){
			this.person.foodselection = this.selection;
			}
			else{
				this.person.plusonefood = this.selection;
			}
			axios.post(
				"https://natespilman.tech/wedding",
				{
        		"group":this.person.group,
						"firstname":this.person.firstname,
						"selection":this.selection,
						"function":this.apiFunc,
				}
			)
		}
	},
	props:['person', 'plusOne'],
	created(){
	const apiFunc = this.plusOne ? 'plusOneFood' : 'food'
	this.apiFunc = apiFunc
	if(this.apiFunc === "food"){		
		this.selection = this.person.foodselection;
		}
	else{
		this.selection = this.person.plusonefood;
	}
	}
	
}
</script>


<style scoped>
#food{
	background-color:var(--red);
	padding-top:2rem;
	color:var(--gold);
}

.selectionBoilerPlate{
	cursor: pointer;
}
</style>
