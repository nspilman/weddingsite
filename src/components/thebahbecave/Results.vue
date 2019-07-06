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
