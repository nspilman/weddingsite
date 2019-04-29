<template>
    <div>
        {{result.firstname}} {{result.lastname}} {{attendingStatus}} {{foodStatus}}
    </div>
</template>

<script>
export default {
    props:['result'],
    computed:{
        attendingStatus(){
            if(this.result.attending){
                return " - attending: " + this.result.attending;
            }
            else{
                return " - Not yet RSVP'd"
            }
        },
        foodStatus(){
            if(this.result.attending === "no"){
                return
            }
            if(this.result.foodselection){
                return " - Food Selection: " + this.result.foodselection;
            }
            else{
                return " - Not yet selected food"
            }
        }
    }
}
</script>

<style scoped>

</style>
