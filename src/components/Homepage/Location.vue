<template>
    <!--=== Location Info ===-->
	<section class="location js-section" id="location">
		<h2 class="u-font-script text-center u-m-b-5">when & where</h2>
		<div class="container">
			<div class="flexContainer">
			<div class ="row MadisonReveal pb-4 mb-3">
				<div class = 'col-sm-12 MadisonTitle text-center pt-4 location__text--sm'>
					<h2><b>July 13</b></h2>
					<h6 class="text-uppercase"> Madison, Wi </h6>
					</div>
				<img class = "img-responsive" src='https://www.incimages.com/uploaded_files/image/1940x900/getty_483517958_368760.jpg'>
				</div>
				</div>

			<div class="row">
				<!-- Location: left column -->
				<div class="col-md-6 textBox py-3">
					<div v-if="people[0].rehearsaldinner === '1'" class="location__text location__text--sm u-bg-grey ml-auto u-m-b-3" data-aos="zoom-in-right">
						<h6 class="text-uppercase">Rehearsal Dinner - 6PM - July 12</h6>
						<h3>The Rickhouse at Old Sugar Distillery</h3>
						<p>The Rickhouse is a beautiful event space attached to Madison's Old Sugar Distillery. There is ample street parking.</p>
						<h6>931 E Main St #8, Madison, WI 53703</h6>
						<h6>Attire: <b>Cocktail Casual</b></h6>
					</div>
					<div v-if="!people[0].rehearsaldinner" class="location__text location__text--sm u-bg-grey ml-auto u-m-b-3" data-aos="zoom-in-right">
						<h6 class="text-uppercase">Madison Wisconsin Bars - 8PM - July 12</h6>
						<h3>Madison Bars</h3>
						<p>Welcome to Madison, Wisconsin! Let's enjoy some delicious local beer at a variety of our favorite Wisconsin bars. More specifics to come</p>
					</div>
					<img src="https://www.broadway.org/galleries/85/items/oveture-center.jpg" class="location__img location__img--sm ml-auto" alt="Location1" data-aos="zoom-in-right">
					<div class="location__text location__text--sm u-bg-grey ml-auto u-m-b-3" data-aos="zoom-in-left">
					<h6 class="text-uppercase">Sunday Brunch - 9:00AM - 12:00PM - July 14</h6>
						<h3>Hilton Madison Monona Terrace</h3>
						<p>
							Please join us in celebrating our marriage with a casual Sunday brunch at Monona Terrace Hilton hotel. Brunch fare will be served.
						</p>
						<h6>9 E Wilson St, Madison, WI 53703</h6>
								<h6>Attire: <b>Casual</b></h6>
				
					</div>
					  

					</div>

				<!-- Location: right column -->
				<div class="col-md-6 textBox py-3">
						<img v-if="people[0].rehearsaldinner === '1'" src="http://oldsugardistillery.com/images/rh_2.jpg" class="location__img location__img--sm" alt="Location" data-aos="zoom-in-left">
						<img v-if="!people[0].rehearsaldinner" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/1499658_714242448586072_2048152806_n.png?_nc_cat=1&_nc_ht=scontent-sea1-1.xx&oh=276e774d0e8088ba4c3d7552a13a31a0&oe=5D29F342" class="location__img location__img--sm" alt="Location" data-aos="zoom-in-left">
					<div class="location__text location__text--sm u-bg-grey" data-aos="zoom-in-left">
					<h6 class="text-uppercase">Wedding Ceremony and Reception - {{ceremonyTime}} - July 13</h6>
						<h3>Overture Theater</h3>
						<p>
							Both the ceremony and reception will take place at The Overture Center, a performing arts center in downtown Madison.  If you are staying on the square (around the capital), it’s within walking distance.  If not, Ubers are readily available and there are plenty of nearby parking garages.
						</p>
						<h6>201 State St, Madison, WI 53703</h6>
								<h6>Attire: <b>Cocktail</b></h6>
				
					</div>
					<img src="https://www3.hilton.com/resources/media/hi/MSNMHHF/en_US/img/shared/full_page_image_gallery/main/HH_chophousepatio01_30_675x359_FitToBoxSmallDimension_Center.jpg" alt="Location1" data-aos="zoom-in-right">
					</div>
			</div>
		</div>
	</section>
	<!--== End of location info. ==-->
</template>
<script>
export default {
	props:['ceremonyTime','receptionTime','people'],
}
</script>


<style scoped>
img{
	margin-top:1em;
	max-height:100%;
	height:50vh;
	width: 95%;
}

.textBox{
	background-color:var(--blue);
}

.location__text{
	background-color:var(--ivory);
}

.MadisonReveal{
	/* height:30em; */
	    display: flex;
    align-items: center;
    justify-content: center;
	background-color:var(--blue);	
	color:var(--gold);
	width:50vw;
}

.MadisonTitle{
	/* height; */

}

.flexContainer{
		    display: flex;
    align-items: center;
    justify-content: center;

}

@media screen and (max-width: 800px) {
  .MadisonReveal {
    width:100%;
  }
}

</style>

