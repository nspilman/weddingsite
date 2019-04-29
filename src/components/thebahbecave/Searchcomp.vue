<template>
    <div id = "searchComp">
        <h1>Search</h1>
        <input id = "input" v-model="searchString" class = "w-50">
        <template v-if="searchString.length > 0">
            <Results :results="filtered"/>
        </template>
    </div>
</template>

<script>
import Results from "./Results.vue"
export default {
    data(){
        return{
            searchString:"",
            testString:"Test String",
            filtered:null,
        }
    },
    components:{
        Results
    },
    methods:{
        filterResults(){
            const regexp = new RegExp(`${this.searchString.toLowerCase()}`)
            this.filtered = this.people.filter(person => {
                return (
                    person.firstname.toLowerCase().match(regexp) 
                    || person.lastname.toLowerCase().match(regexp)
                    || (person.firstname + " " + person.lastname).match(regexp)
                    )
            })
            }
    },
    watch:{
        searchString(){
            this.filterResults()
            }
    },
    props:['people'],
}
</script>

<style scoped>

#searchComp{
    width:100%;
    padding:.4em;
    border-radius: 10px;
    flex-direction: column;
    align-items:center;
    background-color:var(--blue);
    margin:.5em 0 .5em 0;
    display: flex;
    color:var(--gold);
}

#input{
    margin:.5em 0 .5em 0;
}

</style>

