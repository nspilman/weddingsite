<template>
    
</template>

<script>
export default {
    data(){
        return{
            people:[
                {
                    firstname:'Barbara',
                    lastname:'Sherland',
                    group:1,
                    plusOne:0,
                    plusOneName:null,
                    attending:null,

                },
                {
                    firstname:'Peter',
                    lastname:'Sherland',
                    group:1,
                    plusOne:0,
                    plusOneName:null,
                    attending:null,
                },
                {
                    firstname:'David',
                    lastname:'Acosta',
                    group:2,
                    plusOne:1,
                    plusOneName:null,
                    attending:null,
                },
                {
                    firstname:'Paul',
                    lastname:'Sherland',
                    group:3,
                    plusOne:0,
                    plusOneName:null,
                    attending:null,

                },
                {
                    firstname:'Lizzie',
                    lastname:'Sherland',
                    group:3,
                    plusOne:0,
                    plusOneName:null,
                    attending:null,
                },
            ]
        }
    },
    methods:{
        canYouHearMe(){
            console.log('function CanYouHearMe reporting for duty')
            console.log(this)
        }
    },
    created(){
        console.log(this)
    }
}
</script>
