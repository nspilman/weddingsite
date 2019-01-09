<template>
<!-- <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="L'amore is modern and responsive wedding template."> -->
	<!-- change to title of your website -->
	<!-- <title>Claire and Nate are getting married!</title> -->

	<!--===  FONTS ===-->
	<!-- <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400,400i,700,700i" rel="stylesheet"> -->

	<!--=== STYLES ===-->
	<!-- <link rel="stylesheet" href="assets/css/vendors/bootstrap.min.css">
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<link rel="stylesheet" href="assets/css/vendors/slick.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head> -->
<body>
	<People @gotPeople="getInvites"/>
	<a href = ''>
	<div id="logout" @click="logout">
		
		Logout
		</div>
		</a>
<Header @login="login" :nameString="headerString" :status="key" :peopleList="people" :date="weddingDate" :style="'height:'+headerHeight +'vh;'" />

<div v-if="key">
<Nav />
<Intro />
<Story />
<location :ceremonyTime="ceremonyTime" :receptionTime="receptionTime"/>
<Travel/>
<!-- <Food/> -->
<!-- <RSVP :people="loggedInArray" :mode="mode" :open="rsvpOpen" :date="weddingDate"/> -->
	<!--=== Qoute ===-->
	<!-- <section class="quote u-bg-grey">
		<div class="container">
			<div class="row">
				<div class="col-md-10 offset-md-1">
					<h3 class="quote__text font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h3>
				</div>
			</div>
		</div>
	</section> -->
	<!--== End of quote. ==-->


	

	<!--=== Footer ===-->
	<footer class="footer u-bg-grey">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="text-center">
						<h2 class="u-font-script">thank 
						<heart-icon/> you!</h2>
						<ul class="footer__social">
							<!-- set your social profiles URL inside href="link to your profile" -->
							<li><a href="#">
						<heart-icon/></a></li>
							<li><a href="#">
						<heart-icon/></a></li>
							<li><a href="#">
						<heart-icon/></a></li>
						</ul>
						<!-- <p class="footer__copy">All rights reserved &copy; 2018</p> -->
					</div>
				</div>
			</div>
		</div>
	</footer>
	</div>

</body>
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
<script src="assets/js/script.js"></script> -->

</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue"
import Intro from "./components/Intro.vue"
import Story from "./components/Story.vue"
import Location from "./components/Location.vue"
import Food from "./components/Food.vue"
import RSVP from "./components/RSVP.vue"
import People from "./components/People.vue"
import Travel from "./components/Travel.vue"


export default {
  name: "app",
  components: {
	Header,  
	Nav,
	Intro,  
	Story,
	Location,
	Food,
	RSVP,
	People,	
	Travel,
  },
  data:function(){
	  return{
		  weddingDate:"July 13, 2019",
		  ceremonyTime: 'CEREMONY TIME',
		  receptionTime:'RECEPTION TIME',
		  key:"",
		  headerHeight:100,
		  gSheet : "https://sheets.googleapis.com/v4/spreadsheets/1IZwNQYnYAdf2Efo5YlxaMZDs3e1qtVaJge4H7KoUQH0/values/Guestlist?key=AIzaSyB4M6tF4qztX27DmKBzwpat3G5CnBwV1MA",
		  people:'',
		  loggedInArray:'',
		  groupString:'',
		  mode:'',   
		  headerString : '',
		  rsvpOpen:false,		  
			   }
  },
 
  methods:{
	  logout(){
		  localStorage.clear()
	  },
	  genKey(){
		 const groupNo = this.loggedInArray[0].group
		return groupNo
	  },
	  login(group){
		  		this.groupString = ''
				this.headerHeight = 93;
				this.loggedInArray = this.people.filter(person =>{
					return person.group == group;
				})		
				  localStorage.setItem('key',group)
				  if (this.loggedInArray.length > 1){
 
				for (let i = 0; i < this.loggedInArray.length; i++) {
					if(i == this.loggedInArray.length - 1){
						this.groupString += "and "+ this.loggedInArray[i].firstname
					}
					else{
						this.groupString += this.loggedInArray[i].firstname+" "
					}	
				}
				  }
				  else{
					  this.groupString = this.loggedInArray[0].firstname
				  }
				this.headerString = this.groupString;
				if (this.loggedInArray.length == 1){
					this.mode = 'individual'
				}

			this.key = localStorage.getItem('key')

}
		  ,
	  getInvites(array){
		  this.people = array
		const keyCheck = localStorage.getItem('key')
		if(keyCheck){this.key = keyCheck;
		this.login(this.key)}
	  },
	   },
	   created(){
	  	// this.getInvites()
	   }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#logout{
	margin-left:94%;
	width:7%;
	height:40px;
	font-size:24px;
	font-weight: bold;
	padding-left:5px;
	position:absolute;
	background:var(--red);
	color:var(--gold);

}

/* @import "https://unpkg.com/aos@2.3.1/dist/aos.css" */

@media screen and (max-width: 800px) {
  body {
margin-left:20%;
  }
}

</style>
