<template>
    	<!--=== Desktop navigation ===-->
    <div>
	<div class="nav u-border-b-grey d-none d-md-block">
		<div class="container">
			<transition name="fade">
				<div id = "modalRegistrySelect"  v-if="showSelect">
					<div class = "modalRegistrySelect">
						<span id = "close" @click="showSelect = !showSelect">
							<h4>
								X
							</h4>
						</span>
						<h3 class = "modalText js-nav-link">SELECT A REGISTRY</h3>
						<div class = "buttonGroup">
							<a v-for="registry in registries" target ="_blank" :key="registry.name" :href="registry.website">
								<div class="registryButton">
									{{registry.name}}
								</div>
							</a>
						</div>
					</div>
				</div>
			</transition>
			<div class="row">
				<div class="col-sm-12">
					<ul class="nav-list">
						<li><a href="#story" class="nav-list__link js-nav-link">Our Story</a></li>
						<li><a href="#location" class="nav-list__link js-nav-link">When & Where</a></li>
						<li><a href="#travel" class="nav-list__link js-nav-link">Travel and Lodging</a></li>
						<li><a href="#activities" class="nav-list__link js-nav-link">Weekend Activities</a></li>
						<li>
							<span class = "nav-list__link js-nav-link text-white" @click="showSelect=!showSelect"> Our Registry </span>
						</li>
						<li><a href="#RSVP" class="nav-list__link js-nav-link RSVPLink">RSVP</a></li>
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
    data(){
		return{
			registries:[
				{
					name:'Amazon',
					website:'https://www.amazon.com/wedding/share/claireandnatesavethedate'
				},
				{
					name:'Target',
					website:'https://tgt.gifts/ClaireandNate'
				}
			],
			showSelect:false
		}
	},
	methods:{}
}
</script>

<style scoped>



#modalRegistrySelect{
	position: fixed;
	top:0;
	left:0;
	width:100vw;
	height:100vh;
	z-index: .7;
	display:flex;
	align-items: center;
	justify-content:center;
	background-color:rgb(255,255,255,.6);
}

.modalRegistrySelect{
	width:35vw;
	height:25vh;
	z-index: 1;
	display:flex;
	align-items: center;
	justify-content:center;
	flex-direction: column;
	background-color:var(--gold);
	border-radius: 25px;
}

#close{
	position:fixed;
	left:65%;
	top:39%;
	cursor:pointer;
}

.buttonGroup{
	display:flex;
	margin-top:1em;
}

.registryButton{
	background-color:var(--red);
	margin:.3em;
	padding:.7em;
	border-radius:.7em;
	transition:500ms;
}

.registryButton:hover{
	background-color:var(--blue)
}

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
