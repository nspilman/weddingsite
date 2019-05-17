<template>
    <!--=== Out story timeline ===-->
	<section class="story u-bg-grey js-section pt-5" id="story">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2 class="u-m-t-n-3 u-font-script text-center">our story</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<div class="story-timeline d-md-flex">
						<!-- Second and third text block should be written twice because of the different flow on desktop and mobile devices. Desktop uses two column layout, while mobile uses one column.
						-->

						<!-- Story timeline: left column -->
						<div class="story-timeline__col story-timeline__col--left">
							<div class="story-timeline__text">
								<h4>
									<heart-icon/>
									Our Beginnings</h4>
								<p>
									We met in early August 2014 in Madison.  For both of us, it was our first day of work and our first “real adult job” after graduating college. The chemistry was there from the start. We explored the wonderful city of Madison, shared our interests, helped each other through the difficulties of a new job, and grew closer and closer. By Christmas, we were an item!
								</p>
							</div>
							<img :src="story2"  alt="" data-aos="zoom-in-right"/>
							<!-- Only visible on mobile devices -->
							<div class="story-timeline__text d-md-none" data-aos="zoom-in-right">
								
									
								<h4>
									<heart-icon/>
									Four Happy Years</h4>
								<p>
									We've built our relationship on mutual love for family, friends, food, and faraway places… and our feline friend, Buddy. When we're not visiting our loving families and friends on opposite coasts, we enjoy biking, paddle-boarding, and finishing the day with a home-cooked meal.
								</p>
							</div>
							<!-- Only visible on desktop devices -->
							<div class="story-timeline__text d-none d-md-block" data-aos="zoom-in-right">
								<h4><heart-icon/>The Wedding</h4>
								<p>
									  We're so excited to invite you to where it all began - Madison, WI - to join us in celebrating our union! Madison is absolutely beautiful in the summertime and we look forward to showing off the city.
								</p>
							</div>
						</div>

						<!-- Story timeline: right column -->
						<div class="story-timeline__col story-timeline__col--right">
							<img :src="story1" alt="First time we met" data-aos="zoom-in-left" />
							<!-- Only visible on desktop devices -->
							<div class="story-timeline__text d-none d-md-block" data-aos="zoom-in-left">
								<h4>Four Happy Years
						<heart-icon/></h4>
								<p>We've built our relationship on love for family, friends, food and faraway places… and our feline friend, Buddy. When we're not visiting our loving families and friends on opposite coasts, we enjoy biking and paddle boarding in the Madison summer, and finishing the day with a home cooked meal. 
									</p>
							</div>
							<!-- Only visible on mobile devices -->
							<div class="story-timeline__text d-md-none" data-aos="zoom-in-left">
								<h4>The Wedding</h4>
								<p>We're so excited to invite you to where it all began - Madison, WI - to join us in celebrating our union! Madison is absolutely beautiful in the summer time, and we look forward to showing off the city in which it all began. </p>
							</div>
							<img :src="story3" />
							<!-- Uncomment this text block if you need 4th step in timeline. -->
							<!-- <div class="story-timeline__text" data-aos="zoom-in-left">
							<h4><heart-icon/>She said yes!</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</div>-->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--== End of our story timeline. ==-->
</template>
<script>
import story1 from "../../assets/img/bahbes/story1.jpg"
import story2 from "../../assets/img/bahbes/story2.jpg"
import story3 from "../../assets/img/bahbes/story3.jpg"
export default {
	data(){
		return{
			story1:story1,
			story2:story2,
			story3:story3,
		}
	}
}
</script>


<style>
#story{
	background-color:var(--ivory)
}

</style>
