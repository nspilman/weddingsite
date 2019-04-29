<template>
    <div>
    <body v-if="bahbeCreds">
        <div id = "bahbecave" class = 'container'>
            <h1 id="title">Welcome to the Bahbe Cave</h1>
            <Peoplecomp @gotPeople="getInvites"/>
            <Searchcomp :people="people"/>
            <h1 class = "text-center">Missing Stuff </h1><br>
            <div class = "components">
                <Datacomp title='Missing Email' :people="missingEmail"/>
                <Datacomp title='Missing RSVP' :people="missingRSVP"/>
                <Datacomp title="RSVP'd but missing Food" :people="missingFood"/>
                <Datacomp title='Missing Rehearsal Dinner' :people="missingRehearsalDinner"/>
            </div>
             <h1 class = "text-center">Summary </h1><br>
             <div class = "components">
                <Datacomp title='Accepted RSVPs' :people="acceptedRSVPs"/>
                <Datacomp title='Declined RSVPs' :people="declinedRSVPs"/>
                <Datacomp title="Accepted Rehearsal Dinner" :people="acceptedRehearsalDinner"/>
                <Datacomp title='Declined Rehearsal Dinner' :people="declinedRehearsalDinner"/>
            </div>
        </div>
    </body>
    <Home v-else/>
        </div>
</template>
<script>
import Peoplecomp from "./Homepage/People"
import Datacomp from "./thebahbecave/DataComp"
import Searchcomp from "./thebahbecave/Searchcomp"
import Home from "./Home"
export default {
 components:{
     Searchcomp,
     Peoplecomp,
     Datacomp,
     Home,
 },
 data(){
     return{
         people:[]
     }
 },
 methods:{
     getInvites(array){
      this.people = array;
     },
    },
 computed:{
     bahbeCreds(){
         return localStorage.getItem("bahbecreds")
     },
     missingEmail(){
        const missing = this.people.filter(person =>{return!person.email}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}})
        let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     },
     missingRSVP(){
        const missing = this.people.filter(person =>{return !person.attending}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
     let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     },
     missingRehearsalDinner(){
        const missing = this.people.filter(person =>{return person.rehearsaldinner=="1" && !person.rehearsaldinnerattending}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
        let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     
     },
     missingFood(){
        const missing = this.people.filter(person =>{return person.attending=="yes" && !person.foodselection}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
     let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     },
    acceptedRSVPs(){
        const missing = this.people.filter(person =>{return person.attending=="yes"}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
     let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     },
         declinedRSVPs(){
        const missing = this.people.filter(person =>{return person.attending=="no"}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
     let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     },
     acceptedRehearsalDinner(){
        const missing = this.people.filter(person =>{return person.rehearsaldinnerattending=="yes"}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
     let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     },
        declinedRehearsalDinner(){
        const missing = this.people.filter(person =>{return person.rehearsaldinnerattending=="no"}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
     let returnArray = [... new Set(missing.map(person => {return person.group}))].map(group => {return {group:group,people:[]}})
        missing.forEach(person =>{
        returnArray.filter(item => {return item.group===person.group})[0].people.push(person)
         })
        return returnArray
     }
 },
 created(){
 } 
}
</script>

<style scoped>

.components{
    display:flex;
    flex-wrap: wrap;
}

#title{
    background-color: var(--red);
    color:var(--gold);
    padding:.4em;
    border-radius: 10px;
}

</style>

