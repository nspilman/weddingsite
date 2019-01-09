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
				<div class="col-md-6">
					<div class="location__text location__text--sm u-bg-grey ml-auto u-m-b-3" data-aos="zoom-in-right">
						<h6 class="text-uppercase">Wedding Ceremony - {{ceremonyTime}}</h6>
						<h3>Overture Theater</h3>
						<p>The Overture Center is the local performance arts center, perfect to host all of our wonderful wedding guests.</p>
					</div>
					<img src="https://i.pinimg.com/originals/82/dd/69/82dd69d5fd8c3563e360228ecce5431e.jpg" class="location__img location__img--sm ml-auto" alt="Location1" data-aos="zoom-in-right">
				</div>

				<!-- Location: right column -->
				<div class="col-md-6">
					<img src="https://i.pinimg.com/564x/a6/0f/6c/a60f6c1a75c498bb62698672ed702908.jpg" class="location__img location__img--sm" alt="Location" data-aos="zoom-in-left">
					<div class="location__text location__text--sm u-bg-grey" data-aos="zoom-in-left">
						<h6 class="text-uppercase">Reception - {{receptionTime}}</h6>
						<h3>Overture Center Lobby</h3>
						<p>We'll be celebrating in the Overture lobby, with a wonderful view of the Capitol building, and an equally wonderful dance floor. </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--== End of location info. ==-->
</template>
<script>
export default {
	props:['ceremonyTime','receptionTime']
}
</script>


<style scoped>
img{
	margin-top:1em;
	max-height:100%;
	height:50vh;
	width: 95%;
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

