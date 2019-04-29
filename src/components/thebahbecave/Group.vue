<template>
<li @click="expanded = !expanded" id="group">
    {{group.group}} - {{group.people[0].lastname}}
    <ul v-if="expanded">
        <li v-for="person in group.people" :key="person.firstname" class = "person">
            {{person.firstname}} {{person.lastname}}
        </li>
    </ul>
</li>
</template>

<script>
export default {
    props:['group'],
    data(){
        return{
            expanded:false,
        }
    },
    created(){
        }    
}
</script>

<style scoped>
#group{
    cursor:pointer;
    background-color: var(--blue);
    padding:0 0 0 1.5em;
}

.person{
    padding:.3em;
}

</style>
