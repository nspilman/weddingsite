<template>
<div class = 'outside' v-if="show" @click="close">
    <div id = 'responseModal'>
        <span class ="closedModal" @click="close"> X </span>
        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        close(){
            this.$emit('close') 
        }
    },
    props:['show']
}
</script>

<style scoped>
#responseModal{
 width: 80%;
    height: 75%;
    margin-left: 9%;
    margin-top: 5%;
    position: absolute;
    display: block;
    Z-INDEX: 2;
    background-color: var(--red);
}

.outside{
    width:100%;
    height:100%;
    position: absolute;
}
.closedModal{
    font-size: 2rem;
    color: var(--gold);
    margin-left: 96%;
    margin-top: 3%;
}

.closedModal:hover{
    cursor:pointer;
}
</style>


