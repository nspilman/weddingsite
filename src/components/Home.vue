<template>
<body>
  <People @gotPeople="getInvites"/>
  <Header
    @login="login"
    :nameString="headerString"
    :status="key"
    :peopleList="people"
    :date="weddingDate"
    :style="'height:'+headerHeight +'vh;'"
  />

  <div v-if="key">
    <Nav/>
    <Intro/>
    <Story/>
    <location :ceremonyTime="ceremonyTime" :receptionTime="receptionTime" :people="loggedInArray"/>
    <Gettingthere/>
    <Travel/>
    <Activities/>
    <Registry/>
    <RSVP :people="loggedInArray" :mode="mode" :open="rsvpOpen" :date="weddingDate"/>
    <!--=== Footer ===-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="text-center">
              <h2 class="u-font-script">thank
                <heart-icon/>you!
              </h2>
              <ul class="footer__social">
                <!-- set your social profiles URL inside href="link to your profile" -->
                <li>
                    <heart-icon/>
                </li>
                <li>
                    <heart-icon/>
                </li>
                <li>
                    <heart-icon/>
                </li>
              </ul>
              <!-- <p class="footer__copy">All rights reserved &copy; 2018</p> -->
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</body>
</template>
  
<script>
import Header from "./Homepage/Header.vue";
import Nav from "./Homepage/Nav.vue";
import Intro from "./Homepage/Intro.vue";
import Story from "./Homepage/Story.vue";
import Location from "./Homepage/Location.vue";
import RSVP from "./Homepage/RSVP/RSVP.vue";
import People from "./Homepage/People.vue";
import Registry from "./Homepage/Registry.vue";
import Gettingthere from "./Homepage/Gettingthere.vue";
import Travel from "./Homepage/Travel/Travel.vue";
import Activities from "./Homepage/Activities/Activities.vue";

import axios from 'axios';

export default {
  name: "app",
  components: {
    Header,
    Nav,
    Intro,
    Story,
    Location,
    RSVP,
    People,
    Travel,
    Activities,
    Registry,
    Gettingthere
  },
  data: function() {
    return {
      weddingDate: "July 13, 2019",
      ceremonyTime: "5:00PM",
      receptionTime: "6:00PM",
      key: "",
      headerHeight: 100,
      gSheet:
        "https://sheets.googleapis.com/v4/spreadsheets/1IZwNQYnYAdf2Efo5YlxaMZDs3e1qtVaJge4H7KoUQH0/values/Guestlist?key=AIzaSyB4M6tF4qztX27DmKBzwpat3G5CnBwV1MA",
      people: "",
      loggedInArray: "",
      groupString: "",
      mode: "",
      headerString: "",
      rsvpOpen: false
    };
  },

  methods: {
    logout() {
      localStorage.clear();
    },
    genKey() {
      const groupNo = this.loggedInArray[0].group;
      return groupNo;
    },
    login(group) {
      this.groupString = "";
      this.headerHeight = 93;
      this.loggedInArray = this.people.filter(person => {
        return person.group == group;
      });
      localStorage.setItem("key", group);
      if (this.loggedInArray.length > 1) {
        for (let i = 0; i < this.loggedInArray.length; i++) {
          if (i == this.loggedInArray.length - 1) {
            this.groupString += "and " + this.loggedInArray[i].firstname;
          } else {
            this.groupString += this.loggedInArray[i].firstname + " ";
          }
        }
      } else {
        this.groupString = this.loggedInArray[0].firstname;
      }
      this.headerString = this.groupString;
      if (this.loggedInArray.length == 1) {
        this.mode = "individual";
      }
      console.log(this.groupString + "logged in");
			this.key = localStorage.getItem("key");
			
	if(window.location.hostname != "localhost"){
		axios.post(
			'https://natespilman.tech/wedding/',{
				"group":group,
				"firstname":"testUser",
				"function":"login"
				}
				).then(response => console.log(response))
    .catch(e => {
      this.errors.push(e)
    })
			}
    },
    getInvites(array) {
      this.people = array;
      const keyCheck = localStorage.getItem("key");
      if (keyCheck) {
        this.key = keyCheck;
        this.login(this.key);
      }
		},
  },
  created() {}
};
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

.footer{
  background-color:var(--ivory);
}

/* @import "https://unpkg.com/aos@2.3.1/dist/aos.css" */

@media screen and (max-width: 800px) {
  body {
    /* margin-left: .5em !important; */
  }
}

</style>
