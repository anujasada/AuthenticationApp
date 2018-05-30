<template>
<div class="row">
  <h1 class="head">Signup Here!!</h1>
  <div class="col-md-4 col-xs-4 col-sm-4 col-lg-4 main">
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <label class="lab">Email</label>
        <input class="inpt" type="text" id="em" v-model="eml">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <label class="lab">Password</label>
        <input class="inpt" type="password" id="ps" v-model="pass">
    </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 signup">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-sm-1 col-lg-1">
            <label class="container">
                <input type="checkbox" v-on:click="hide_fun()">
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
        <p v-on:click="validate" class="main-btn">Signup</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 login">
        <p>Already have an account??  <a v-bind:href= "url">Login</a></p>
      </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      pass: '',
      eml: '',
      url: 'http://localhost:8080/#/login'
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

    validate: function () {
      var email = this.eml
      var password = this.pass
      this.emailvalidation(email)
      this.passvalidation(password)
      this.validation(email, password)
      this.localstore(email, password)
    },

    emailvalidation: function (email) {
      var mailformat = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
      if (email.match(mailformat)) {
        return true
      } else if (email === '') {
        alert('Email cannot be blank!')
        return false
      } else {
        alert('Enter a valid email address!')
        return false
      }
    },

    passvalidation: function (password) {
      let passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
      if (password.match(passformat)) {
        return true
      } else if (password === '') {
        alert('Password cannot be blank!!')
        return false
      } else {
        alert('Password should contain minimum 1 alphabet, 1 number, 1 special character and total 8-16 characters!!')
        return false
      }
    },

    validation: function (email, password) {
      if (this.emailvalidation(email) === true && this.passvalidation(password) === true) {
        this.$router.push({path: '/login'})
      }
    },

    localstore: function (email, password) {
      alert('hello')
      this.$localStorage.set('s', true)
      this.$localStorage.set('email', email)
      this.$localStorage.set('password', password)
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
  box-shadow: 0 4px 8px 0 rgba(83, 81, 81, 0.507);
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

.login {
  color: rgb(70, 70, 131);
  font-size: 1.3em;
  font-family: 'Raleway', sans-serif;
}

.login a {
  text-decoration: none;
  color: rgb(233, 95, 95);
}

.login a:hover {
  color: rgb(70, 70, 131);
}
</style>
