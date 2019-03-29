<template>
    <div class = "col-sm-4">
        <h4>
            {{title}}
        </h4>
        <ul>
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
    }
}
</script>

<style scoped>

</style>

