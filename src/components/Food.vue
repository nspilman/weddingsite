<template>
    <!--=== Food Info ===-->
	<section class="food js-section" id="food">
		<h2 class="u-font-script text-center u-m-b-5">The Food</h2>
		<div class="container">
			<div class="row">
				<!-- food: left column -->
				<div class="col-md-6">
					<div class="food__text food__text--sm u-bg-grey ml-auto u-m-b-3" data-aos="zoom-in-right">
						<h6 class="text-uppercase">Wedding Ceremony - 17:00</h6>
						<h3>Overture Theater</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<img src="https://i.pinimg.com/originals/82/dd/69/82dd69d5fd8c3563e360228ecce5431e.jpg" class="food__img food__img--sm ml-auto" alt="food1" data-aos="zoom-in-right">
				</div>

				<!-- food: right column -->
				<div class="col-md-6">
					<img src="https://i.pinimg.com/564x/a6/0f/6c/a60f6c1a75c498bb62698672ed702908.jpg" class="food__img food__img--sm" alt="food" data-aos="zoom-in-left">
					<div class="food__text food__text--sm u-bg-grey" data-aos="zoom-in-left">
						<h6 class="text-uppercase">Reception - 19:00</h6>
						<h3>Overture Center Lobby</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--== End of Food info. ==-->

</template>

<script>
export default {
	data(){
		return{
			entreOptions:[
				{id:1, name:'Top Sirloin',photo:''},
				{id:2, name:'Glazed Chicken',photo:''}
			]
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
</style>
