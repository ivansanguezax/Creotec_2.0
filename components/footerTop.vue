<template>
  <section
    id="footer-top"
    :class="
      $vuetify.theme.dark
        ? 'blue-grey darken-4 grey--text text--lighten-1'
        : 'grey lighten-3 grey--text text--darken-4'
    "
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="py-12"
          ><v-row no-gutters>
            <v-col cols="12">
              <Logo />
            </v-col>
            <v-col cols="12">
              <p class="mt-8 text-justify" style="max-width: 400px">
                Las prótesis de Creotec son accesibles para tu economía y de alta calidad. Creotec te envia pruebas de la prótesis hasta que esta sea perfecta para ti
              </p>
            </v-col>
            <v-col cols="12">
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>DIRECCIÓN</v-list-item-title>
                    <v-list-item-subtitle
                      >Av. Busch esquina Pasoskanki #1599</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>CORREO ELECTRONICO</v-list-item-title>
                    <v-list-item-subtitle
                      >ariveros@creo-tec.com</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>TELEFONO</v-list-item-title>
                    <v-list-item-subtitle>(+591) 77540218</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
              <div class="d-flex justify-center mt-5">
                <v-btn
                  v-for="(socialm, i) in social"
                  :key="`social-${i}`"
                  class="d-flex"
                  icon
                  large
                  color="primary"
                  :href="socialm.link"
                  target="_blank"
                >
                  <v-icon>{{ socialm.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row></v-col
        >
        <v-col cols="1" class="text-center hidden-sm-and-down col col-2 py-12">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="12" md="5" class="py-12">
          <h3 class="mb-8">ENVIAR TU MENSAJE</h3>
          <footerContactForm />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import footerContactForm from '~/components/sections/footerContactForm.vue'
export default {
  components: {
    footerContactForm,
  },
  data() {
    return {
      social: [
        {
          platform: 'Facebook',
          link: 'https://www.facebook.com/creotec',
          icon: 'mdi-facebook',
        },
        {
          platform: 'Instagram',
          link: 'https://www.instagram.com/creotecbolivia/',
          icon: 'mdi-instagram',
        },
        {
          platform: 'Linkedin',
          link: 'https://www.linkedin.com/company/creotec-bolivia/',
          icon: 'mdi-linkedin',
        },
        {
          platform: 'Youtube',
          link: 'https://www.youtube.com/channel/UCFhowzZjG86I_UZh2AByZmw',
          icon: 'mdi-youtube',
        },
      ],
    }
  },
}
</script>
