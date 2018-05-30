<template>
<div class="row">
  <h1 class="head">Login Here!!</h1>
  <div class="col-md-4 main">
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <label class="lab">Email</label>
        <input class="inpt" type="text" id="em" v-model="eml">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <label class="lab">Password</label>
        <input class="inpt" type="password" id="ps" v-model="psw">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-sm-1 col-lg-1">
            <label class="container">
              <input type="checkbox" v-on:click= "hide_fun()">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-md-11 col-xs-11 col-sm-11 col-lg-11 pass">
            Show password
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <div v-on:click= "login_fun()" class="main-btn">Login</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      eml: '',
      psw: ''
    }
  },
  methods: {
    hide_fun: function () {
      var x = document.getElementById('ps')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    login_fun: function () {
      let newEmail = this.eml
      let newPass = this.psw
      let locEmail = this.$localStorage.get('email')
      let locPass = this.$localStorage.get('password')
      if (newEmail === locEmail && newPass === locPass) {
        this.$router.push({path: '/dashboard'})
        return true
      } else {
        alert('Invalid email or password!!')
        return false
      }
    }
  }
}
</script>

<style>
body {
  margin-right: 20%;
}

.hd-btn {
  background-color: rgb(135, 135, 211);
  border: 1px solid rgb(135, 135, 211);
  color: white;
  padding: 6px;
  text-align: center;
  font-family: 'IM Fell French Canon SC', serif;
  border-radius: 0.2rem;
  width: 100%;
  font-size: 1.2em;
  cursor: pointer;
}

.head {
  margin-left: 22%;
  color: rgb(135, 135, 211);
  font-family: 'Ubuntu', sans-serif;
  font-size: 3em;
}

.main {
  color: white;
  text-align: center;
  font-family: 'Bitter', serif;
  margin-left: 45%;
  box-shadow: 0 4px 8px 0 rgba(141, 135, 135, 0.507);
  margin-top: 3%;
}

.main-btn {
  background-color: rgb(135, 135, 211);
  border: 1px solid rgb(135, 135, 211);
  color: white;
  padding: 6px;
  text-align: center;
  font-family : 'Raleway', sans-serif;
  border-radius: 0.2rem;
  width: 100%;
  font-size: 1.2em;
  cursor: pointer;
}

.signup {
  text-align: left;
  font-size: 1.3em;
  border: 1px solid white;
  color: rgba(0, 0, 0, 0.425);
  background-color: white;
  border-radius: 1rem;
  margin-top: 5%;
  margin-bottom: 5%;
}

.inpt {
  font-size: 1.3em;
  border-radius: 0.2rem;
  border: 1px solid rgb(212, 209, 209);
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.lab {
  font-family: 'Raleway', sans-serif;
}

.container {
  margin-left: 30px;
}

.pass {
  margin-top: -27px;
  margin-left: 12%;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  border: 1px solid rgba(170, 165, 165, 0.89);
  margin-left: 20px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin-left: 10px;
}

.container input:checked ~ .checkmark {
  background-color: rgba(170, 165, 165, 0.89);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
