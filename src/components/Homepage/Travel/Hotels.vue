<template>
    <div id ="hotels">
        We recommend finding a place to stay on or near the Isthmus. 
        Hotels for the weekend of July 13th are on the expensive side, so the wallet concious can find cheaper rates on 
        <a :href="airbnbLink" target="_blank">
        <span>AirBnB.</span> </a>
      
      <h2 class = "mt-4">Hotel Block Information</h2>
      <br>
<div class = "hotelBlocksDiv row">
      <div class = 'col-md-4'>
         <img src = "../../../assets/img/bahbes/madisonMap.jpg">
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
            hotels:[
                {
                name : "Hilton",
                address: "9 E Wilson St, Madison, WI 53703, USA",
                price: "$179",
                waysToBook:[
                    {text : 'Call and reserve at 877-510-7465, referencing block code is SHLDWD. Call for dates outside 7/12 to 7/14.'},
                    {text : 'Book Online Here', link : "https://www.hilton.com/en/hi/groups/personalized/M/MSNMHHF-SHLDWD-20190712/index.jhtml?WT.mc_id=POG"},
                {
                name : "The AC by Marriott",
                address: "One N Webster St, Madison, WI 53703, USA",
                price:'$239',
                waysToBook:[
                    {text : 'Call and reserve at 608-286-1337, referencing the "Sherland-Spilman Wedding." Call for dates outside 7/12 to 7/14. '},
                    {text: "Book Online Here", link: "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.marriott.com%2Fevents%2Fstart.mi%3Fid%3D1551712143432%26key%3DGRP&data=02%7C01%7Cmglenn%40ncghotels.com%7C3083bf1b387b4eb7901708d6a0b3e6e3%7C305acf5dc4a74f6bb8f927bd4d71f607%7C0%7C0%7C636873091865811243&sdata=1bIwKh19%2F8Qi6uK8jcJf3F8toaWAA%2BkJo5bXk%2BlE2NE%3D&reserved=0"}
            ]
        }
        ]
    }
    },
    components:{
        Hotelblock
    }
}
</script>
