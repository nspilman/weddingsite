<template>
  <!--=== RSVP form ===-->
  <section class="rsvp js-section" id="rsvp">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
   
          <response :show="showResponse" @close="closeResponse"/>
                      <coming-soon/>
          <div class="submittedGray" v-if="showResponse"></div>
          <div class="rsvp-box u-bg-white">
        
            <div class="js-form-wrapper">
              <div class="text-center">
                <h3 class="rsvp-box__title u-font-script">{{welcome}}, be our guest!</h3>
                <p class="rsvp-box__subtitle">Please confirm your arrival by
                  <mark class="font-weight-bold">{{date}}</mark>
                </p>
              </div>
              <form method="POST" class="rsvp-form js-form" id="rsvp-form" action="php/rsvp.php">
                <div class="d-md-flex justify-content-between">
                  <div class="rsvp-form__left">
                    <div class="rsvp-form-field">
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        :value="this.people[0].firstname + ' ' + this.people[0].lastname"
                        required
                      >
                    </div>
                    <div class="rsvp-form-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your E-mail"
                        class="js-email"
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

                    <div class="rsvp-form-field">
                      <select name="attending" required>
                        <option value disabled selected>You are attending?</option>
                        <option value="all">All</option>
                        <option value="ceremony">Ceremony</option>
                        <option value="party">Dinner & Party</option>
                      </select>
                    </div>
                  </div>
                  <div class="rsvp-form__right">
                    <div class="rsvp-form-field h-100 individualrsvp">
							<div class="row attendees">
								<template v-for="person in people">
								<div class ="col-sm-8">
									{{person.firstname}} {{person.lastname}}
								</div>
								<div class="col-sm-2">
									<span class = 'attendingButton attending' :data-attending="person.attending" @click="setAttending(person.firstname,'yes')">Yes</span>
								</div>
								<div class="col-sm-2">
								<span class = 'attendingButton notAttending' :data-attending="person.attending" @click="setAttending(person.firstname,'no')">No</span>
									</div>
									</template>
								</div>
                      <!-- <textarea rows="4" placeholder="Your Message" class="h-100" name="message"></textarea> -->
                    </div>
                  </div>
                </div>
              </form>

              <button type="submit" class="rsvp-form-submit js-submit" @click="processSubmit()">
                <span>Send</span>
              </button>
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
import comingSoon from "./comingSoon.vue";
import axios from "axios";

export default {
  data() {
    return {
      plusOne: false,
      plusOneName: "",
      showResponse: false
    };
  },
  components: {
    response,
    comingSoon
  },
  methods: {
    processSubmit() {
      this.showResponse = true;
    },
    closeResponse() {
      this.showResponse = false;
	},
	setAttending(firstname,answer){
		 const selectedPerson = this.people.filter(person =>{
			  return person.firstname === firstname
		  })[0]
      selectedPerson.attending = answer;
      axios.post(
        "https://natespilman.tech/gsheet",
      {
        "group":selectedPerson.group,
				"firstname":selectedPerson.firstname,
				"rsvp":"yes",
				"function":"rsvp"
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
	//   console.log(this.attendance)
	  	  // document.querySelectorAll('.attendingButton')
        console.log(this.open)

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
	color:var(--gold)
}

.attendingButton:hover{
	cursor: pointer;
}

</style>
