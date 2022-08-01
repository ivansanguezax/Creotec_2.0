<template>
  <div class="text-center">
    <v-dialog
      width="500"
      v-model="signInDialog"
      v-if="!$fire.auth.currentUser"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-1"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Registrate
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Registro
        </v-card-title>

        <v-list-item three-line>
        <v-list-item-content>

          <v-text-field
            class="col-md-12"
            v-model="formEmail"
            label="Correo"
          ></v-text-field>

          <v-text-field
            class="col-md-12"
            v-model="formPassword"
            label="Contraseña"
            type="password"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

        <v-divider></v-divider>

        <v-card-actions>
        <v-row justify="center">
          <div class="my-2">
            <v-btn small color="primary" @click="signup" :class="$vuetify.theme.dark ? 'fill-light-color' : 'fill-dark-color'">Registrarse</v-btn>
          </div>
        </v-row>
      </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      width="500"
      v-model="signUpDialog"
      v-if="!$fire.auth.currentUser"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-1"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Inicia Sesión
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Inicio de sesión
        </v-card-title>

        <v-list-item three-line>
        <v-list-item-content>

          <v-text-field
            class="col-md-12"
            v-model="formEmail"
            label="Correo"
          ></v-text-field>

          <v-text-field
            class="col-md-12"
            v-model="formPassword"
            label="Contraseña"
            type="password"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <a class="ml-4" href="#" @click="forgotPassword">¿Olvidaste tu contraseña?</a>

        <v-divider></v-divider>

        <v-card-actions>
        <v-row justify="center">
          <div class="my-4">
            <v-btn small color="primary" @click="login()" :class="$vuetify.theme.dark ? 'fill-light-color' : 'fill-dark-color'">Iniciar sesión</v-btn>
          </div>
        </v-row>
      </v-card-actions>
      </v-card>
    </v-dialog>
    <a href="#" @click="signout" color="success" v-else>
      Hola, {{ user }}
    </a>
    <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formEmail: "",
      formPassword: "",
      snackbar: false,
      snackbarText: "No error message",
      user: "Sergio",
      signInDialog: false,
      signUpDialog: false,
    };
  },
  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.formEmail, this.formPassword)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        console.log(user)
        console.log(that.$fire.auth.currentUser.multiFactor.user.email)
        that.signInDialog = false
        that.user = (that.$fire.auth.currentUser.multiFactor.user.email).split('@')[0]
        that.$router.push('/')
        location.reload();
      })
    },
    forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.formEmail)
      .then(function (){
        that.snackbarText = 'Link de restablecer contraseña enviada a ' + that.formEmail
        that.snackbar = true
      })
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      })
    },
    signup() {
      let that = this
      this.$fire.auth.createUserWithEmailAndPassword(this.formEmail, this.formPassword)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        console.log(user)
        that.signUpDialog = false
        that.$router.push('/')
        location.reload();
      })
    },
    signout() {
        this.$fire.auth.signOut()
        this.$router.push('/')
        location.reload();
    },
  }
};
</script>