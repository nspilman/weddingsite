<template>
    <section id="travel">
        	<h2 class="u-font-script text-center u-m-b-5 my-2 py-3">Travel & Lodging</h2>
            
            <div class ='container flightSection'>
                <div @click="toggleTravel()" class="u-font-script header container text-right">
                <h3>Flying <span v-if="!showTravel"> - Click to expand</span></h3>
                </div>
                <transition name="fade">
                <Flights v-show="showTravel"/>
                </transition>
                <div @click="toggleHotels()" class="u-font-script header container">
                <h3>Hotels <span v-if="!showHotel"> - Click to expand</span></h3>
                </div>
                <transition name="fade">
                <Hotels v-show="showHotel"/>
                </transition>

            </div>
    </section>
</template>

<style scoped>


.fade-enter-active,
.fade-leave-active,
.fade-move {
  transition-property: opacity, transform;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  position: absolute;
}

.fade-leave-to {
  opacity: 0;
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
    display:flex;
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

