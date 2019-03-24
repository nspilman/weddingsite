<template> 
<router-view/>       
<!--== End of footer ==-->
<!--===  SCRIPTS ===-->
<!-- <script src="assets/js/vendors/jquery-3.3.1.min.js"></script>
<script src="assets/js/vendors/bootstrap.min.js"></script>
<script src="assets/js/vendors/jquery.countdown.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="assets/js/vendors/slick.min.js"></script>
<script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="assets/js/script.js"></script>-->
</template>

<script>

import axios from 'axios';

export default {
  name: "app",
  components: {
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#logout {
  margin-left: 94%;
  width: 7%;
  height: 40px;
  font-size: 24px;
  font-weight: bold;
  padding-left: 5px;
  position: absolute;
  background: var(--red);
  color: var(--gold);
}

/* @import "https://unpkg.com/aos@2.3.1/dist/aos.css" */

@media screen and (max-width: 800px) {
  body {
    /* margin-left: .5em !important; */
  }
}
</style>
