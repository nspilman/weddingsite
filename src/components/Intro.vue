<template>
    	<!--=== Intro: About bride & groom. Counter. ===-->
	<section class="intro" id="intro">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="u-m-b-5 text-center u-font-script">About <br>Claire and Nate</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="intro-content d-lg-flex">
						<div class="intro-content__col">
							<div class="intro-content__img">
								<img src="../assets/img/bahbes/youngClaire.jpeg">
							</div>
                            <div class="intro-content__text u-bg-primary d-flex align-items-center claireInfo">
								<!-- this section is visible when hovered over bride image -->
								<div>
									<h4>About Claire</h4>
									<p>Claire is a lovely young woman from Mercer Island, WA. Claire went to NYU before moving to Madison, WI to meet Nate and begin her first job out of college. Claire loves running, reading, and relaxing with a cup of black tea and Buddy the cat.</p>
								</div>
							</div>
						</div>
						<heart-icon/>
						<div class="intro-content__col">
							<div class="intro-content__img">
								 	<img src="../assets/img/bahbes/youngNate.jpg" style="width:100%;height:100%;">
							</div>
							<div class="intro-content__text u-bg-grey d-flex align-items-center nateInfo">
								<!-- this section is visible when hovered over groom image -->
								<div>
									<h4>About Nate</h4>
									<p>Nate is a strapping young man from Jersey City, NJ. Nate went to Penn State University before moving to Madison, WI to meet Claire and begin his first job out of college. Nate loves playing guitar, cooking, and coding wedding websites with Buddy the cat.</p>
								</div>
							</div>
						</div>
					</div>
					<div class = "heart-box">
					<heart-icon/>
					<heart-icon/>
					<heart-icon/>
					</div>
				</div>
			</div>
			<!-- <div class="row">
				<div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2"> -->
					<!-- Counter. Set your date here as data-date="yyyy/mm/dd" -->
					<!-- <ul class="counter-list js-counter clearfix" data-date="2019/03/16">
						<li class="counter-list__item">
							<span class="js-counter-days">124</span>
							<p>days</p>
						
						<heart-icon/>						</li>
						<li class="counter-list__item">
							<span class="js-counter-hours">20</span>
							<p>hours</p>
						
						<heart-icon/>			</li>
						<li class="counter-list__item">
							<span class="js-counter-minutes">30</span>
							<p>minutes</p>
						
						<heart-icon/>				</li>
						<li class="counter-list__item">
							<span class="js-counter-seconds">50</span>
							<p>seconds</p>
					
						<heart-icon/>
						</li>
					</ul> -->
					<!-- end of counter -->
				<!-- </div> -->
			<!-- </div> -->
		</div>
	</section>
	<!--== End of intro section. ==-->
</template>

<style scope>
.heart-box{
	display:flex;
	justify-content: center;	
}

.nateInfo{
	background-color:var(--blue) !important;
	color:white;
}

.claireInfo{
	background-color:var(--red) !important;
	color:white;
}
</style>
