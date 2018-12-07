<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p class="help is-danger" v-if="msg != ''">{{ msg }}</p>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Username" v-model="user">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="pw">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </p>
            </div>
            <div class="field">
            <p class="control">
                <button class="button is-success" @click="login">
                Login
                </button>
            </p>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
      return {
          msg: '',
          user: '',
          pw: '',
          admin: {
              name: 'admin',
              pw: '111111',
          },
          isAuth: false
      }
  },

  methods: {
      login: function() {
        console.log(this.user == this.admin.name && this.pw == this.admin.pw);
        if (this.user == this.admin.name && this.pw == this.admin.pw) {
            this.isAuth = true
            this.$emit(`close`, this.isAuth)
        } else {
            this.msg = "error!!!"
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
