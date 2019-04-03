<template>
    <section class="location js-section" id="activities">
        <h1 class = "rsvp-box__title u-font-script text-center">Weekend Activities</h1>
        <div class = "activityBox container">
            <Activity v-for="activity in activities" :key="activity.name" :activity="activity"/>
	    </div>
    </section>
</template>

<script>
import Activity from "./Activity";
export default {
    components:{
        Activity
    },
    data(){
        return{
            activities:[
                {
                name:"Biking",
                website:"",
                description:"If you’re into biking, you’ll love Madison.  We recommend renting bikes at either Budget Bicycle (https://budgetbicyclectr.com/Bicycle-Road-Mountain-Bike-Rentals-Madison/) or Machinery Row (https://machineryrowbicycles.com/).  The City of Madison has a good website (https://www.cityofmadison.com/bikemadison/planTrip/map.cfm) with info on all of the bike trails and we highly recommend the Lake Monona loop."
                },
                {
                name:"Walking/Running",
                website:"",
                description:"All of the bike trails linked above are also wonderful for walking or running."
                },
                {
                name:"Kayaking/Stand-Up Paddle-Boarding",
                website:"https://www.madisonboats.com/",
                description:"Kayaking/Stand-Up Paddle-Boarding – Madison is on an isthmus between two gorgeous lakes, Lake Monona and Lake Mendota.  If you want to get on the water, we recommend renting from one of the Madison Boats locations (https://www.madisonboats.com/).  Brittingham Boats is our personal favorite."
                },
                {
                name:"State Capital",
                website:"https://legis.wisconsin.gov/about/visit",
                description:"Conveniently located in downtown Madison and free and open to the public during the day.  It’s gorgeous on the inside and there is an amazing view from the rooftop."
                },
                {
                name:"Art Fair on the Square",
                website:"https://www.mmoca.org/mmoca-events/art-fair-on-the-square",
                description:"An outdoor art fair that happens to be occurring our wedding weekend!  It’s filled with local art vendors and is fun to stroll around."
                },
                {
                name:"Wisconsin Veterans Museum",
                website:"https://www.wisvetsmuseum.com/",
                description:"Wonderful war history museum located on the capital square."
                },
                {
                name:"Madison Children’s Museum",
                website:"https://madisonchildrensmuseum.org/",
                description:"We don’t have kids, but we hear from people that do have kids that this museum is fantastic."
                },
            ],
            dining:[
                {
                    name:"Memorial Union Terrace",
                    website:"https://union.wisc.edu/visit/terrace-at-the-memorial-union/",
                    description:"Great place to grab a beer, brat, and ice cream"
            }   
            ]
        }
    }
}
</script>

<style scoped>
.activityBox{
    padding:2em;
    margin-top:2em;
    background-color: var(--ivory);
}


</style>
