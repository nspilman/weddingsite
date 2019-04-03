<template>
    <div @click="show = !show" class = "activity">
      <h3>  {{activity.name}} </h3>
      <transition name="fade">
      <div v-if="show">
        <a target = "_blank" :href="activity.website"> <h6>{{activity.website}}</h6></a>
        <p >{{activity.description}}</p>
      </div>
      </transition>
      <!-- <p>{{activity.description}}</p> -->

    </div>
</template>

<script>
export default {
    props:['activity'],
    data(){
      return{
        show:false,
      }
    }
}
</script>

<style scoped>
    .activity{
      background-color: white;
      cursor:pointer;
    }
</style>