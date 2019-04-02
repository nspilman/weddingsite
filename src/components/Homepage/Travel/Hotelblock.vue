<template>
    <div class = "hotelBlock col-md-4">
        <div class = "hotelInfo text-center">
       <h2>{{hotel.name}}</h2>
       <h4>{{hotel.address}}</h4>
       <br>
       <b class = "py-2"> Booking </b>
       </div>
       <div class = "booking text-center">
       <ul v-for="way in hotel.waysToBook" :key="way.wayToBook" class= "bookingOptions mx-4">
           <li v-if="way.link">
               <a :href="way.link" target ="_blank">{{way.text}}</a>
            </li>
            <li v-else>
                {{way.text}}
                </li>
       </ul>
       <p>{{hotel.price}}</p>
       </div>
        </div>
</template>

<style scoped>

.hotelBlock{
    border:2px solid var(--red);
    padding:1em;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
}
</style>

<script>
export default {
    data(){
        return{
         }
    },
    props:
        ["hotel"]
}
</script>
