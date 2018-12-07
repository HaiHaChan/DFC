<template>
  <div class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="../assets/logo/logo.jpg">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            <a>
              Home
            </a>
          </router-link>
          <a class="navbar-item">
            Blog
          </a>
          <router-link class="navbar-item" to="/dammei">
          <a>
            Dammei
          </a>
          </router-link>
          <a class="navbar-item">
            Confession
          </a>
          <a class="navbar-item">
            Review
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Event
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" v-show="notAuth">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"  @click="openModal()">
                Log in
              </a>
            </div>
            <div class="buttons" v-show="!notAuth">
              <router-link to="/posts/create">
                <a class="button is-primary">
                  <strong>+ Write</strong>
                </a>
              </router-link>
              <a class="button is-light" @click="logout">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <Login v-if="showModal" @close="closeModal"></Login>

    <Slider></Slider>
  
  </div>
</template>

<script>
import Login from './Login.vue'
import Slider from './Slider.vue'

export default {
  name: 'Header',
  components: {
    Login,
    Slider,
  },
  data() {
    return {
      notAuth: true,
      showModal: false,
    }
  },
  methods: {
    openModal: function()  {
      this.showModal = true
    },
    closeModal:  function(isAuth = false) {
      this.showModal = false
      if (isAuth == true) {
        this.notAuth = false
      }
    },
    logout: function() {
      this.notAuth = true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin: auto;
  width: 60%;
  padding: 10px;
  background-color: pink;
}
.navbar-item img {
    max-height: 3rem !important;
}
</style>
