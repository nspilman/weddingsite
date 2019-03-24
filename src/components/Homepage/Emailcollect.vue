<template>
  <div id="responseModal" v-if="show">
    <span class="closedModal" @click="close">X</span>
    <div class="emailPrompt">
      <h2 class="u-font-script pb-4">Hello {{loginGroup}}!</h2>
      <div class="container pb-5">
        <h4>
          We will be sending important information with regard to festivities via email, but don't have your email address on file.
          Would you please provide your email?
        </h4>
        <br>

        <div class="form-group">
          <label for="usr">Email:</label>
          <input type="text" class="form-control mb-1" id="usr" v-model="email">
          <button @click="postEmail">Submit </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        email:''
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    postEmail(){

           console.log(localStorage.getItem('key'))
           console.log(this.email)
       axios.post(
            'https://artsonthehudson.com/921gsheet'
            ,{
				"group":localStorage.getItem('key'),
				"firstname":"testUser",
                "function":"updateEmail",
                "email":this.email
				}
				)
    }
  },
  props: ["show", "loginGroup", "group"]
};
</script>

<style scoped>
#responseModal {
  width: 80%;
  margin-left: 9%;
  margin-top: 10%;
  position: absolute;
  display: block;
  z-index: 2;
  background-color: var(--red);
  color: var(--gold);
  border: 1em var(--blue) solid;
}

.emailPrompt {
  padding-left: 5%;
}

.outside {
  width: 100%;
  height: 100%;
  position: absolute;
}
.closedModal {
  font-size: 2rem;
  color: var(--gold);
  margin-left: 96%;
  margin-top: 3%;
}

.closedModal:hover {
  cursor: pointer;
}

button{
    background-color:var(--blue);
    color:var(--gold);
}
</style>


