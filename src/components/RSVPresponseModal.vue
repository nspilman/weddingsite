<template>
<div class = 'outside' v-if="show" @click="close">
    <div id = 'responseModal'>
        <span class ="closedModal" @click="close"> X </span>
        <div class = "container text-center response-text u-font-script">
        <h1>
            Thank you for your submission!
        </h1>
        <h3>
            Your information is updating
            </h3>
            </div>
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
    background-color:rgba(255,255,255,.5);
    z-index:1;
}
.closedModal{
    font-size: 2rem;
    color: var(--gold);
    margin-left: 96%;
    margin-top: 3%;
}

.response-text{
    color: var(--gold);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:75%;
}

.closedModal:hover{
    cursor:pointer;
}
</style>


