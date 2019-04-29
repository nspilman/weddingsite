<template>
    <div id = "results">
        <Result v-for="result in results" :key="result.firstname + result.group + result.address" :result ="result" class = "result"/>
    </div>
</template>

<script>
import Result from "./Result.vue"
export default {
    props:['results'],
    created(){
    },
    components:{
        Result
    },
    watch:{
        results(){
        }
    },
    computed:{
        attendingStatus(){
            if(this.result.attending){
                return "attending: " + this.result.attending;
            }
            else{
                return "Not yet RSVP'd"
            }
        },
        foodStatus(){
            if(this.result.foodselection){
                return "Food Selection: " + this.result.foodselection;
            }
            else{
                return "Not yet selected food"
            }
        }
    }
}
</script>

<style scoped>
#results{
    background-color: var(--red);
}

.result{
    padding:.4em;
    border-radius: 10px;
}
</style>
