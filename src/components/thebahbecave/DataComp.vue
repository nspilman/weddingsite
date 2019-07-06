<template>
    <div class ="col-sm-4" id="component">
        <h4 id = "title" @click="show=!show">
            {{title}}  <span v-if="counter"> {{counter}}</span>
        </h4>
        <ul v-if="show">
            <Group v-for="group in people" :key="group.group" :group="group"/>
            <!-- <li v-for="group in people" :key="group.group">
            {{group.group}} - {{group.people[0].lastname}} 
            <ul>
                <li v-for="person in group.people" :key="person.firstname">
                    {{person.firstname}} {{person.lastname}}
                    </li>
                </ul>
            </li> -->
        </ul>
    </div>
</template>

<script>
import Group from "./Group"
export default {
    props:['title','people'],
    components:{
        Group
    },
    data(){
        return{
            show:false,
        }
    },
    computed:{
        counter(){
            let attendees = 0;
            let plusOnes = 0;
            this.people.forEach(group => counter = counter + group.people.length)
            this.people.forEach(group => counter = counter + group.people.length)
            
            return counter
        }
    },
    created(){
        console.log(this.people)
    }
}
</script>

<style scoped>
#component{
    color:var(--gold);
    border-radius: 10px;
}

#title{
    background-color: var(--blue);
    border-radius: 10px;
    padding:.4em;
    display:flex;
    justify-content: space-between;
}

</style>

