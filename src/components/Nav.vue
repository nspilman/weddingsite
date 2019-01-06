<template>
    	<!--=== Desktop navigation ===-->
    <div>
	<div class="nav u-border-b-grey d-none d-md-block">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<ul class="nav-list">
						<li><a href="#story" class="nav-list__link js-nav-link">Our Story</a></li>
						<li><a href="#location" class="nav-list__link js-nav-link">When & Where</a></li>
						<!-- <li><a href="#food" class="nav-list__link js-nav-link">the Food</a></li> -->
						<li><a href="#food" class="nav-list__link js-nav-link">Travel and Lodging</a></li>
						<!-- <li><a href="#food" class="nav-list__link js-nav-link">Activities</a></li> -->
						<li><a href="#rsvp" class="nav-list__link js-nav-link RSVPLink">RSVP</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!--== End of desktop navigation ==-->

	<!--=== Mobile navigation ===-->
	<div class="mobile-nav d-md-none">
		<div class="mobile-nav__trigger">
			<a href="#" class="js-open-menu">
						<heart-icon/></a>
		</div>
		<ul class="mobile-nav-list js-menu">
			<li><a href="#story" class="mobile-nav-list__link js-nav-link">Our Story</a></li>
			<li><a href="#friends" class="mobile-nav-list__link js-nav-link">Friends</a></li>
			<li><a href="#location" class="mobile-nav-list__link js-nav-link">When & Where</a></li>
			<li><a href="#rsvp" class="mobile-nav-list__link js-nav-link"><b>RSVP</b></a></li>
			<li><a href="#memories" class="mobile-nav-list__link js-nav-link">Memories</a></li>
		</ul>
	</div>
    </div>
	<!--== End of mobile navigation ==-->

</template>

<script>
export default {
    
}
</script>

<style scoped>

.nav{
    background-color:var(--blue);
    color:white;
    height: 7vh;
}

a{
    color:white;
}

.RSVPLink{
	background-color:var(--red);
	padding-left:1rem;
	padding-right:1em;
	
}
.RSVPLink:hover{

	border-bottom: 1px solid --var(gold) !important;
	color: --var(gold) !important;

}

</style>
