<template>
    <!--=== Location Info ===-->
	<section class="location js-section" id="gettingthere">
		<h2 class="u-font-script text-center u-m-b-5">Getting There</h2>
		<div class="container">

			<div class="row">
				<!-- Location: left column -->

				<!-- Location: right column -->
				<div class="col-md-6 textBox py-3">
					<h2>Walk from the AC by Marriot</h2>
						<img  :src="walk_from_ac" class="location__img location__img--sm" alt="Location" data-aos="zoom-in-left">
					<h2>Walk from the Hilton</h2>
					<img :src="walk_from_hilton" alt="Location1" data-aos="zoom-in-right">
				</div>
					<div class="location__text location__text--sm u-bg-grey col-sm-6" data-aos="zoom-in-left">
					<h6 class="text-uppercase">Getting to the Overture Center</h6>
						<h3>201 State St, Madison, WI 53703</h3>
						<p>
							Both the ceremony and reception will take place at The Overture Center, which is super walkable from the capitol. For those taking uber or parking, please see the below address and parking information.
						</p>
						<p>
							<b>
								Parking Garage: {{parkingLotAddress}}
							</b>
							<br>
											Entrances:<ul> <li v-for="entrance in entrances" :key="entrance">
									{{entrance}}
									</li> 
									</ul>
						</p>
							<p>
				<b>Price: {{price}}</b>
						</p>
					</div>
			</div>
		</div>
	</section>
	<!--== End of location info. ==-->
</template>
<script>
import walk_from_ac from "../../assets/img/walk_from_ac.png"
import walk_from_hilton from "../../assets/img/walk_from_hilton.png"

export default {
	data(){
		return{
			walk_from_ac:walk_from_ac,
			walk_from_hilton:walk_from_hilton,
			parkingLotAddress: "318 W Mifflin St",
      entrances:["300 W Dayton St","300 W Mifflin St"],
      price: "$1/hr"
		}
	}
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

#gettingthere{
	background-color:var(--red);
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

.u-font-script{
	color:var(--gold);
	padding-top:1em;
}
h2{
	color:var(--gold);
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

