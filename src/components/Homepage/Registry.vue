<template>
    <transition name="fade">
        <section id ="registry">
	        <div id = "modalRegistrySelect">
			    <div class = "modalRegistrySelect text-center">
                    <h2 class="u-font-script text-center pb-2">Registry</h2>
				   <i> <h5 class = "modalText js-nav-link">
                        YOUR PRESENCE IS OUR GIFT 
                    </h5></i>
                    <p>
                        If you choose to get us a gift, we've registered at the two stores below. 
                        <br>
                        In lieu of gifts, we would also greatly appreciate charitable donations to Planned Parenthood or Amara.
                    </p>
                    <h4>Stores</h4>
                    <div class = "buttonGroup">
					    <a v-for="registry in registries" target ="_blank" :key="registry.name" :href="registry.website">
						    <div class="registryButton text-white">
							    {{registry.name}}
						    </div>
					    </a>
				    </div>
                    <h4>Charities</h4>
                    <div class = "buttonGroup">
					    <a v-for="charity in charities" target ="_blank" :key="charity.name" :href="charity.website">
						    <div class="registryButton text-white">
							    {{charity.name}}
						    </div>
					    </a>
				    </div>
			    </div>
		    </div>
        </section>
	</transition>
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
					website:'https://www.target.com/gift-registry/giftgiver?registryId=c83b00e952d345aba53c0941d52132ae&type=WEDDING'
				}
            ],
            charities:[
                {
                name:'Planned Parenthood',
                website:"https://www.plannedparenthood.org/get-involved/other-ways-give"
                },
                {
                name:'Amara',
                website:"https://amaraputskidsfirst.org/get-involved/donate-now/"
                },
                
            ]
        }
    }
}
</script>


<style scoped>

#modalRegistrySelect{
	width:100vw;
	/* height:50vh; */
	z-index: .7;
	display:flex;
	align-items: center;
	justify-content:center;
	background-color:rgb(255,255,255,.6);
}

.modalRegistrySelect{
	z-index: 1;
	display:flex;
    padding:1em;
	align-items: center;
	justify-content:center;
	flex-direction: column;
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

</style>
