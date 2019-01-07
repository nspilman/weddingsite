<template>
    <section id="travel">
        	<h2 class="u-font-script text-center u-m-b-5 my-2 py-3">Travel and Lodging</h2>
            <div class="u-font-script container">
                <h3>Flying</h3>
                </div>
            <div class ='container flightSection'>
                <div v-for="airport in airports">
                    {{airport.name}}
                </div>
            </div>
    </section>
</template>

<style scoped>
#travel{
    background-color:white;
}

h2{
}

.flightSection{
    background-color:var(--blue);
    color:var(--gold);
    height:25vh;
    margin-top:2em;
}

</style>
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
                    name:'Miluakee General Mitchell International Airport',
                    code:'MKE',
                    description: "Miluakee is about an hour and a half by car or bus from Madison.",
                    bus:'Badger Bus runs regularly between Miluakee and Madison',
                    link:'https://www.badgerbus.com/tickets',
                    },
                    {
                    name:"Chicago International O'Hareport",
                    code:'ORD',
                    description: "O'Hare is th largest airport around, and is about 3 hours by bus. Flights in an out of O'Hare are likely the cheapest.",
                    bus:"Van Galder shuttles has multiple O'Hare to Madison shuttles daily for $30 each way.",
                    link:"https://www.govangalder.com/Home/TripReservation",
                    }
            ]
        }
    }
}
</script>

