<template>
<div>
    <div v-for="airport in airports" class='airport'>
                   <h2> {{airport.name}}</h2>
                   <h5>Airport Code: {{airport.code}}</h5>
                   <p>{{airport.description}}</p>
                   <template v-if="airport.bus">
                       <hr>
                       <h5>
                           Bus from the Airport <a :href="airport.link"><span> (website link) </span></a>
                       </h5>
                       <p>{{airport.bus}}</p>
                   </template>
                </div>
                </div>
</template>

<script>
export default {
    data(){
        return{
 airports:[
                {
                    name:'Dane County Regional Airport',
                    code:'MSN',
                    description: "Dane County airport is in Madison, and has a fair variety of flight options daily. You'll likely need to connect in Detroit, Minneapolis or Chicago. This may be your most expensive option."
                    },
                    {
                    name:'Milwaukee General Mitchell International Airport',
                    code:'MKE',
                    description: "Milwaukee is about an hour and a half by car or bus from Madison.",
                    bus:'Badger Bus runs regularly between Milwaukee and Madison.',
                    link:'https://www.badgerbus.com/tickets',
                    },
                    {
                    name:"Chicago International O'Hareport",
                    code:'ORD',
                    description: "O'Hare is the largest airport around, and is about 3 hours by bus. Flights in and out of O'Hare are likely the cheapest.",
                    bus:"Van Galder shuttles has multiple daily O'Hare to Madison shuttles for $30 each way.",
                    link:"https://www.govangalder.com/Home/TripReservation",
                    }
            ],
        }
    },   
    
}
</script>

<style>
.airport{
    border:2px solid var(--red);
    padding:1em;
    background-color:white;
}
</style>
