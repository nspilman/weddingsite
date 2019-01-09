<template>
    <div id ="hotels">
        We recommend finding a place to stay on or near the Isthmus. 
        Hotels for the weekend of July 13th are on the expensive side, so the wallet concious can find cheaper rates on 
        <a :href="airbnbLink" target="_blank">
        <span>AirBnB.</span> </a>
      For clarity, and because Isthmus is a dumb word, below is the general area about which we're talking - 
      <br>
      <div style="display:flex;justify-content:center;">
         <img src = "../assets/img/bahbes/madisonMap.jpg">
         </div>
    </div>
</template>

<style>

#hotels{
    border:2px solid var(--red);
    padding:1em;
    background-color:white;
}
</style>

<script>
export default {
    data(){
        return{
            airbnbLink:"https://www.airbnb.com/s/Madison--WI--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Madison%2C%20WI%2C%20United%20States&checkin=2019-07-11&checkout=2019-07-14&allow_override%5B%5D=&zoom=12&search_by_map=true&sw_lat=43.03726987586741&sw_lng=-89.46784597921021&ne_lat=43.1696490707863&ne_lng=-89.27833181905396&s_tag=oug2UlxF"
        }
    }
}
</script>
