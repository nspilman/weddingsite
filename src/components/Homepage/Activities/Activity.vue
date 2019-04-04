<template>
    <div @click="show = !show" class = "activity">
      <i><span class = "activityListing"><h3>  {{activity.name}} </h3> <span v-if="!show"> click to expand</span></span></i>
      <transition name="fade">
      <div v-if="show" class = "details">
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
      padding: .5em 1em .5em 1em;
      color:var(--red);
    }

    .activityListing{
      display:flex;
      justify-content:space-between;
    }

  .details{
    background-color:var(--ivory);
    padding:.5em;
    border-radius:10px;
    color:black;
  }

</style>