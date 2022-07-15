<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
 
    <v-card class="mx-auto" outlined style="width:540px; padding: 12px;">
      <v-list-item three-line>
        <v-list-item-content>
          <h1 :style="'text-align: center;'">Login</h1>

          <v-text-field
            class="col-md-12"
            v-model="formUsername"
            label="email"
            hint="Accepted charaters: a-Z, A-Z, 0-9 _ (underscore)"
          ></v-text-field>

          <v-text-field
            class="col-md-12"
            v-model="formPassword1"
            label="password"
            type="password"
            hint="At least 4 charaters"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-row justify="center">
          <div class="my-2">
            <v-btn small color="primary" @click="login()" :class="$vuetify.theme.dark ? 'fill-light-color' : 'fill-dark-color'">Login</v-btn>
          </div>
        </v-row>
      </v-card-actions>
      <a href="/register" :style="'color: #888888;'"></a>
    </v-card>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>


<script>
export default {
  data() {
    return {
      formUsername: "",
      formPassword1: ""
    };
  },

  methods: {
    // async login() {
    login(){
        console.log(this.formUsername);
        console.log(this.formPassword1);
    //   try {
    //     await this.$store.dispatch("login", {
    //       username: this.formUsername,
    //       password: this.formPassword1
    //     });

    //   } catch (e) {
    //     this.formError = e.message;
    //   }
    }
  }
};
</script>

