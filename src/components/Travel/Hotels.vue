<template>
    <div id ="hotels">
        We recommend finding a place to stay on or near the Isthmus. 
        Hotels for the weekend of July 13th are on the expensive side, so the wallet concious can find cheaper rates on 
        <a :href="airbnbLink" target="_blank">
        <span>AirBnB.</span> </a>
      
      <h2 class = "mt-4">Hotel Block Information</h2>
      <br>
<div class = "hotelBlocksDiv">
      <div style="display:flex;justify-content:center; max-height:40vh; max-width:30vh">
         <img src = "../../assets/img/bahbes/madisonMap.jpg">
         </div>
         <Hotelblock v-for="hotel in hotels" :hotel="hotel" />
         </div>
    </div>
</template>

<style>

#hotels{
    border:2px solid var(--red);
    padding:1em;
    background-color:white;
}

.hotelBlocksDiv{
    display: flex;
}
</style>

<script>
import Hotelblock from "./Hotelblock.vue"; 
export default {
    data(){
        return{
            airbnbLink:"https://www.airbnb.com/s/Madison--WI--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Madison%2C%20WI%2C%20United%20States&checkin=2019-07-11&checkout=2019-07-14&allow_override%5B%5D=&zoom=12&search_by_map=true&sw_lat=43.03726987586741&sw_lng=-89.46784597921021&ne_lat=43.1696490707863&ne_lng=-89.27833181905396&s_tag=oug2UlxF",
            hotels:[{
                name : "Hilton",
                address: "9 E Wilson St, Madison, WI 53703, USA",
                waysToBook:[
                    {text : 'Call and reserve at 877-510-7465, referencing block code is SHLDWD,'},
                    {text : 'Register online here', link : "https://www.hilton.com/en/hi/groups/personalized/M/MSNMHHF-SHLDWD-20190712/index.jhtml?WT.mc_id=POG"}]
            },
            {name : "The AC by Marriott",
                address: "One N Webster St, Madison, WI 53703, USA",
                waysToBook:[
                    {text : 'Booking Information Coming Soon'}]
            }]
        }
    },
    components:{
        Hotelblock
    }
}
</script>
