<template>
    <div class = "activity">
      <i><span @click="show = !show" class = "activityListing"><h3>  {{activity.name}} </h3> <span v-if="!show"> click to expand</span></span></i>
      <transition name="fade">
      <div v-if="show" class = "details">
        <a v-for="website in activity.websites" target = "_blank" :href="website" :key="website"> <h6>{{website}}</h6></a>
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
      padding: .5em 1em .5em 1em;
      color:var(--red);
    }

    .activityListing{
      display:flex;
      justify-content:space-between;
      cursor:pointer;
    }

  .details{
    background-color:var(--ivory);
    padding:.5em;
    border-radius:10px;
    color:black;
  }

</style>