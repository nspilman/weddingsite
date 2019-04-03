<template>
    <div @click="show = !show" class = "activity">
      <span class = "activityListing"><h3>  {{activity.name}} </h3> <span v-if="!show"> click to expand</span></span>
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
      background-color: var(--ivory);
      cursor:pointer;
    }

    .activityListing{
      display:flex;
      justify-content:space-between;
    }
</style>