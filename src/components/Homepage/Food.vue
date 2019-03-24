<template>
    <!--=== Food Info ===-->
	<div id="#food" class = "text-center py-4">
		<h6>Please select your entree</h6>
		<div class="form-check py-1" v-for ="option in entreOptions">
  <input class="form-check-input" type="radio" :name="option.name.replace(/\s/g, '')" :id="option.name.replace(/\s/g, '')" :value="option.name" v-model="selection">
  <label class="form-check-label" :for="option.name.replace(/\s/g, '')">
   <h4 class = 'my-0'> <span v-if="option.vegitarian"> (v)</span>{{option.name}}</h4>
	{{option.subName}}
  </label>
</div>
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
				{id:3, name:'Stuffed Acorn Squash',subName:'with faro and spicy marinaro',photo:'',vegitarian:true}
			],
			selection:null,
		}
	},
	watch:{
		selection(){
			this.person.foodselection = this.selection
			axios.post(
				"https://natespilman.tech/gsheet",
				{
        		"group":this.person.group,
				"firstname":this.person.firstname,
				"selection":this.selection,
				"function":"food"
				}
			)
		}
	},
	props:['person'],
	created(){
		this.selection = this.person.foodselection 
	}
	
}
</script>


<style scoped>
#food{
	background-color:var(--red);
	padding-top:2rem;
	color:var(--gold);
}
</style>
