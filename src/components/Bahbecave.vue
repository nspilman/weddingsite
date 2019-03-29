<template>
    <body>
        <div id = "bahbecave" class = 'container'>
            <h1>WE IN THIS BIIIIITCH!! </h1>
            <Peoplecomp @gotPeople="getInvites"/>
            <div class = "row">
                <Datacomp title='Missing Email' :people="missingEmail"/>
                <Datacomp title='Missing RSVP' :people="missingRSVP"/>
                <Datacomp title="RSVP'd but missing Food" :people="missingFood"/>
                <Datacomp title='Missing RSVP' :people="missingRSVP"/>
            </div>
        </div>
    </body>
</template>
<script>
import Peoplecomp from "./Homepage/People"
import Datacomp from "./thebahbecave/DataComp"
export default {
 components:{
     Peoplecomp,
     Datacomp
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
     missingFood(){
        const missing = this.people.filter(person =>{return person.attending=="yes" && !person.food}).map(person =>{return{firstname:person.firstname, lastname:person.lastname, group:person.group}}) 
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
