<template>
<li @click="expanded = !expanded" id="group">
    {{group.group}} - {{group.people[0].lastname}}
    <ul v-if="expanded">
        <li v-for="person in group.people" :key="person.firstname">
            {{person.firstname}}
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
}

</style>
