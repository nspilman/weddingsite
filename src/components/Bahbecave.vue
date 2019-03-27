<template>
    <body>
        <h1>WE IN THIS BIIIIITCH!! </h1>
        <Peoplecomp @gotPeople="getInvites"/>
    </body>
</template>
<script>
import Peoplecomp from "./Homepage/People.vue"
export default {
 components:{
     Peoplecomp
 },
 data(){
     return{
         people:[]
     }
 },
 methods:{
     getInvites(array){
      this.people = array;
     }
 },
 created(){
 } 
}

</script>
