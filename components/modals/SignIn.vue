<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
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
            v-model="formPassword1"
            label="Contraseña"
            type="password"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

        <v-divider></v-divider>

        <v-card-actions>
        <v-row justify="center">
          <div class="my-2">
            <v-btn small color="primary" @click="login()" :class="$vuetify.theme.dark ? 'fill-light-color' : 'fill-dark-color'">Iniciar sesión</v-btn>
          </div>
        </v-row>
      </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formEmail: "",
      formPassword1: ""
    };
  },

  methods: {
    // async login() {
    login(){
        console.log(this.formEmail);
        console.log(this.formPassword1);
    //   try {
    //     await this.$store.dispatch("login", {
    //       username: this.formEmail,
    //       password: this.formPassword1
    //     });

    //   } catch (e) {
    //     this.formError = e.message;
    //   }
    }
  }
};
</script>