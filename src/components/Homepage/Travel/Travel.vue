<template>
    <section id="travel">
        	<h2 class="u-font-script text-center u-m-b-5 my-2 py-3">Travel & Lodging</h2>
            
            <div class ='container flightSection mb-5'>
                <div @click="toggleTravel()" class="travelExpand header container text-right">
                <h3>Flying</h3> <span v-if="!showTravel"> Click to expand</span>
                </div>
                <transition name="fade">
                <Flights v-show="showTravel"/>
                </transition>
                <div @click="toggleHotels()" class="header travelExpand container">
                <h3>Hotels </h3> <span v-if="!showHotel"> Click to expand</span>
                </div>
                <transition name="fade">
                <Hotels v-show="showHotel"/>
                </transition>
            </div>
    </section>
</template>

<style scoped>



#travel{
    background-color:var(--ivory);
    padding-bottom:3em;
}

.travelExpand{
    display:flex;
    justify-content: space-between;
    font-style:italic;
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

