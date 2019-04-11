<template>
  <!--=== RSVP form ===-->
  <section class="rsvp js-section" id="RSVP">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <response :show="showResponse" @close="closeResponse"/>
          <div class="rsvp-box u-bg-white">
            <div class="js-form-wrapper">
              <div class="text-center">
                <h3 class="rsvp-box__title u-font-script">{{welcome}}, be our guest!</h3>
                <p class="rsvp-box__subtitle">Please confirm your arrival by
                  <mark class="font-weight-bold">{{date}}</mark>
                </p>
              </div>
              <form method="POST" class="rsvp-form js-form" id="rsvp-form" action="">
                <div class="d-md-flex justify-content-between">
                  <div class="rsvp-form__left py-5">
                    <div class="rsvp-form-field">
                       <label
                            class="rsvp-box__subtitle"
                            for="email"
                          >Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your E-mail"
                        class="js-email"
                        v-model="email"
                        required
                      >
                      <p class="rsvp-form-field__error js-email-error">E-mail is incorrect.</p>
                    </div>

                    <template v-if="mode==='individual'">
                      <div class="rsvp-form-field">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            name="plusOne"
                            class="form-check-input"
                            v-model="plusOne"
                          >
                          <label
                            class="form-check-label rsvp-box__subtitle"
                            for="plusOne"
                          >Bringing a Plus One?</label>
                        </div>
                        <transition name="fade">
                          <input
                            v-if="plusOne"
                            v-model="plusOneName"
                            type="text"
                            name="guest"
                            placeholder="Name of Plus One"
                            required
                          >
                        </transition>
                      </div>
                    </template>
                    <label
                            class="form-check-label rsvp-box__subtitle"
                            for="note"
                          >Leave us a note!</label>
                    <textarea
                            type="textarea"
                            name="note"
                            class=""
                            v-model="note"
                          />
                <template v-if="people[0].rehearsaldinner==1">
                           <h6 class ="u-font-script text-center pb-2"> Attending the Rehearsal Dinner? </h6>
                <div class="rsvp-form-field individualrsvp">
            		  <div class="row attendees" v-for="person in people" :key="person.firstname">
								    <div class ="col-sm-8">
									    {{person.firstname}} {{person.lastname}}
								    </div>
								    <div class="col-sm-2">
									    <span class = 'attendingButton attending' :data-attending="person.rehearsaldinnerattending" @click="setAttending(person.firstname,'rsvp_rehearsal','yes')">Yes</span>
								    </div>
								    <div class="col-sm-2">
								      <span class = 'attendingButton notAttending' :data-attending="person.rehearsaldinnerattending" @click="setAttending(person.firstname,'rsvp_rehearsal','no')">No</span>
									  </div>    
									</div>
								</div>
             </template>
              

                  </div>
                  <div class="rsvp-form__right">
                     <h4 class ="u-font-script text-center pb-2"> Attending? </h4>
						
                <div class="rsvp-form-field h-100 individualrsvp">
            		  <div class="row attendees" v-for="person in people" :key="person.firstname">
								    <div class ="col-sm-8">
									    {{person.firstname}} {{person.lastname}}
								    </div>
								    <div class="col-sm-2">
									    <span class = 'attendingButton attending' :data-attending="person.attending" @click="setAttending(person.firstname,'rsvp','yes')">Yes</span>
								    </div>
								    <div class="col-sm-2">
								      <span class = 'attendingButton notAttending' :data-attending="person.attending" @click="setAttending(person.firstname,'rsvp','no')">No</span>
									  </div>    
                    <transition name="fade">
                      <div class = 'col-sm-12' v-if="person.attending=='yes'">
                        <Food :person="person"/>
                        {{person.plusonename}}
                        <Food v-if="plusOneName" :person="person" :plusOne="true"/>
                      </div>
                    </transition>
									</div>
								</div>
                      <!-- <textarea rows="4" placeholder="Your Message" class="h-100" name="message"></textarea> -->
              </div>
            </div>
            <button type="submit" class="rsvp-form-submit js-submit" @click="processSubmit">
                <span>Send</span>
            </button>
          </form>

          
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--== End of RSVP rsvp-form. ==-->
</template>

<script>
import response from "./RSVPresponseModal.vue";
import Food from "./Food.vue"
import axios from "axios";


export default {
  data() {
    return {
      plusOne: false,
      plusOneName: "",
      showResponse: false,
      email:this.people[0].email,
      note:null,
    };
  },
  components: {
    response,
    Food,
  },
  methods: {
    processSubmit(e) {
      e.preventDefault()
      axios.post(
        "https://natespilman.tech/wedding/",
      {
        "group":this.people[0].group,
				"firstname":this.people[0].firstname,
				"plus1":this.plusOneName,
				"function":"plus1"
        }
      )
      axios.post(
        "https://natespilman.tech/wedding/",
      {
        "group":this.people[0].group,
				"firstname":this.people[0].firstname,
				"note":this.note,
				"function":"rsvp_note"
        }
      )
      axios.post(
        "https://natespilman.tech/wedding/",
      {
        "group":this.people[0].group,
				"firstname":this.people[0].firstname,
				"email":this.email,
				"function":"email"
        }
      )
      this.showResponse = true;
    },
    closeResponse() {
      this.showResponse = false;
	},
	setAttending(firstname,func,answer){
		 const selectedPerson = this.people.filter(person =>{
			  return person.firstname === firstname
      })[0]
      if(func === "rsvp"){
      selectedPerson.attending = answer;
      }
      if(func === "rsvp_rehearsal"){
        selectedPerson.rehearsaldinnerattending = answer
      }
      axios.post(
        "https://natespilman.tech/wedding/",
      {
        "group":selectedPerson.group,
				"firstname":selectedPerson.firstname,
				"rsvp":answer,
				"function":func,
        }
      )
	  },
  },
  props: ["people", "date", "mode","open"],
  computed: {
    fullNames() {
      return this.people.map(
        person => person.firstname + " " + person.lastname
      );
	},
	attendance(){
		const attendResps = [];
		this.people.forEach(person =>{
			attendResps.push({firstname:person.firstname, lastname:person.lastname, attending:person.attending})
		}

		)
		return attendResps
	},
    welcome() {
      if (this.mode == "individual") {
        return this.people[0].firstname;
      } else {
        var string = "";
        for (let i = 0; i < this.people.length; i++) {
          if (i == this.people.length - 1) {
            string += "and " + this.people[i].firstname;
          } else {
            string += this.people[i].firstname + " ";
          }
        }
        return string;
      }
    }
  },
  created(){
	  console.log(" rehearsaldinnerattending - ")
        // document.querySelectorAll('.attendingButton')
  if(this.people[0].plusonename){
    this.plusOne = true;
    this.plusOneName = this.people[0].plusonename
    this.note = this.people[0].notefromguest
  }
  }
};
</script>


<style scoped>
.rsvp {
  background-color: var(--blue) !important;
  background-image: url();
}

.attending[data-attending='yes']{
	color:green;
}


.notAttending[data-attending='no']{
	color:red;
}
.submittedGray {
  width: 97%;
  height: 100%;
  background-color: rgb(196, 195, 195);
  opacity: 0.8;
  position: absolute;
  z-index: 1;
}

.rsvp-form-submit {
  background-color: var(--red);
  color: white;
}

.individualrsvp{
	background-color: var(--blue);
	border: 5px solid var(--red);
}

.attendees{
	color:var(--gold);
  margin:1em;
}

.attendingButton:hover{
	cursor: pointer;
}

</style>
