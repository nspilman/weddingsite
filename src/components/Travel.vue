<template>
    <section id="travel">
        	<h2 class="u-font-script text-center u-m-b-5 my-2 py-3">Travel and Lodging</h2>
            
            <div class ='container flightSection'>
                <div @click="toggleTravel()" class="u-font-script header container">
                <h3>Flying</h3>
                </div>
                <transition name="fade">
                <Flights v-show="showTravel"/>
                </transition>
                <div @click="toggleHotels()" class="u-font-script header container">
                <h3>Hotels</h3>
                </div>
                <transition name="fade">
                <Hotels v-show="showHotel"/>
                </transition>

            </div>
    </section>
</template>

<style scoped>


.fade-enter-active, .fade-leave-active {
  transition: height .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}





#travel{
    background-color:white;
}

h2{
}

.flightSection{
    background-color:var(--blue); 
    margin-top:2em;
    padding:2em;
}

.header{
    background-color:var(--gold);
    color:var(--red);
    padding:1em;
    margin:2px;
}

.header:hover{
    cursor: pointer;
}


</style>
<script>
import Flights from "./Flights.vue";
import Hotels from "./Hotels.vue";
export default {
       components:{
                Flights,
                Hotels,

            },
    data(){
        return{
         
            showTravel:false,
            showHotel:false,
        }
    },
    methods:{
        toggleTravel(){
            this.showTravel = !this.showTravel;
        },
        toggleHotels(){
            this.showHotel = !this.showHotel;
        }
    }
}
</script>

