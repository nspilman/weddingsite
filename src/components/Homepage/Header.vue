<template>
  <!--=== Top image and title ===-->
  <header>
    <emailcollect :show="emailModal" :login-group="nameString" :group="loginGroup" @close="closeEmailCollect"/>
    <div class="hero header d-flex align-items-center justify-content-center row">
      <div class="col-sm-6"></div>
      <div class="text-center col-sm-4">
        <img
          src="../../assets/img/wreath-white.svg"
          class="hero__wreath hero__wreath--up"
          alt="Sarah and Mike"
        >
        <h1 class="hero__title u-font-script" data-aos="zoom-in">Claire & Nate</h1>
        <p class="hero__date" data-aos="zoom-in" data-aos-delay="400">{{date}}</p>
        <img
          src="../../assets/img/wreath-white.svg"
          class="hero__wreath hero__wreath--down mb-3"
          alt="Sarah and Mike"
        >
        <div v-if="!status">
          <h2 class="hero__title u-font-script pb-3" data-aos="zoom-in">Enter</h2>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id>Last Name</span>
            </div>
            <input class="form-control" type="text" v-model="lastName" @keyup.enter="processLoginInput">
          </div>
          <div v-show="groupOptions" id="groupOptions">
            <div class='pleaseSelect'>
            Please select the correct {{selectLastName}} group
            </div>
            <button
              v-for="group in groupOptions"
              class="w-100 groupSelectionButton"
              @click="setGroup(group)"
            >{{group.string}}</button>
          </div>

          <div v-if="errorMessage" class="w100 bg-danger">The password and last name don't match</div>
          <br>
          <button class="btn" v-on:click="processLoginInput">Go!</button>
        </div>
        <div v-else class="hero__title u-font-script pb-3">Welcome {{nameString}}</div>
      </div>
    </div>
  </header>
  <!--== End of top image and title ==-->
</template>

<script>
import Emailcollect from "./Emailcollect.vue"
export default {
  components:{
Emailcollect
  },
  methods: {
    setGroup(group) {
      this.loginGroup = group.group;
      this.groupString = group.string;
      this.login();
    },
    getLoginGroup(people) {
      const lastNameMatches = this.peopleList.filter(person => {
        return person.lastname.toLowerCase() === this.lastName.toLowerCase();
      });
      const loginGroup = [];
      const loginGroupRaw = lastNameMatches.map(person => person.group);
      loginGroupRaw.forEach(group => {
        if (loginGroup.includes(group)) {
          return;
        }
        loginGroup.push(group);
      });
      return loginGroup;
    },
    getLoggedInArray(group) {
    this.loggedInArray =  this.peopleList.filter(person => {
          return person.group === group;
     })
     },
    login() {
      if (this.loginGroup != "") {
        this.$emit("login", this.loginGroup);
        this.errorMessage = false;
      } else {
        this.errorMessage = true;
      }
    },
    processLoginInput() {
      const loginGroup = this.getLoginGroup(this.peopleList);
      if (loginGroup.length === 1) {
        this.selectLastName = this.lastName;
        this.loginGroup = loginGroup[0];
        this.login();
      }
      if (loginGroup.length > 1) {
        this.getGroupOptions(loginGroup);
      }
    },
    getGroupOptions(loginGroup) {
      const optionGroups = [];
      loginGroup.forEach(group => {
        const groupArray = this.peopleList.filter(person => {
          return person.group === group;
        });
        optionGroups.push(groupArray);
      });
      this.groupOptions = optionGroups.map(group =>
        this.createGroupString(group)
      );
    },
    createGroupString(group) {
      const names = group.map(person => person.firstname);
      if (names.length > 1) {
        names.splice(group.length - 1, 0, "and");
      }
      var joinString = " ";
      if (names.length > 3) {
        var joinString = ", ";
      } else {
        var joinString = " ";
      }
      var groupString = names.join(joinString);
      const groupObj = { group: group[0].group, string: groupString };
      return groupObj;
    },
    closeEmailCollect(){

      console.log(this.emailModal)
      this.emailModal = false
      console.log(this.emailModal)
    }
  },
  data() {
    return {
      lastName: "",
      errorMessage: false,
      groupOptions: "",
      loginGroup: "",
      loggedInArray: "",
      selectLastName:"",
      emailModal:false,
    };
  },
  props: ["status", "peopleList","date","nameString"],
  created() {}
};
</script>

<style scoped>
.header {
  height: 100%;
}

.groupSelectionButton{
  background-color:var(--blue);
  color:var(--gold)
}
.input-group-text{
  background-color:var(--blue);
  color:var(--gold)
}

.pleaseSelect{
  width:100%;
  background-color:var(--red);
}
@media screen and (max-width: 600px) {
  .hero {
    background-size:auto 100%;
    background-position:20% 50%;
  }
}


</style>

