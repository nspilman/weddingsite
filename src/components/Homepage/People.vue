<template>
    
</template>

<script>
export default {
    methods:{
       async getInvites(){
           console.log(this.endpoint)
        const response =  await fetch(this.endpoint)
        const json = await response.json();
        const responseValues = await json.values
        this.headers = responseValues[7].map(value => value.toLowerCase().replace(/ /g,'').replace(/[{()}]/g, ''))
        const peopleData = await responseValues.slice(8)
        await peopleData.forEach(
        line => {
            const obj = {};
            for(let i = 0; i < this.headers.length; i++){
                obj[this.headers[i]] = line[i]
            }
            this.peopleArray.push(obj)
        }
    )
    this.$emit("gotPeople",this.peopleArray)
    // console.log(data)
  // Work with JSON data here
  
//   console.log(this.headers)
//   data.values.forEach(person => console.log(person))
// this.writeData(data)
},
// }).catch(err => {
//   console.log('this data pull broke')
// });,
    writeData(data){
        console.log(data)
    }
},
 data(){
        return {
            headers:'',
            clientID : '1070206136911-4b7anv4ejvgms5oj8ejoc5itpslkburu.apps.googleusercontent.com',
            peopleArray:[],
            apiKey: 'AIzaSyCj2NOkfpTLg94e26XRE4bL93vkSWF8jNA',
            endpoint:"https://sheets.googleapis.com/v4/spreadsheets/1IZwNQYnYAdf2Efo5YlxaMZDs3e1qtVaJge4H7KoUQH0/values/Guestlist?key=AIzaSyCj2NOkfpTLg94e26XRE4bL93vkSWF8jNA"
        }
    },
created(){
    this.getInvites()
    console.log(this.peopleArray)
}
}
</script>
