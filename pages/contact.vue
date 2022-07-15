<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col md="5" cols="12">
              <div class="text-h6 font-weight-bold mb-5">Nuestra Oficina </div>
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>DIRECCIÓN</v-list-item-title>
                    <v-list-item-subtitle
                      >Av. Busch esquina Pasoskanki #1599</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>CORREO ELECTRONICO</v-list-item-title>
                    <v-list-item-subtitle
                      >ariveros@creo-tec.com</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>TELEFONO</v-list-item-title>
                    <v-list-item-subtitle>(+591) 77540218</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <div class="text-h6 font-weight-bold mt-12 mb-5">
Horarios de Atención             
 </div>
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>LUNES A VIERNES </v-list-item-title>
                    <v-list-item-subtitle>9am a 5pm</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>SABADOS</v-list-item-title>
                    <v-list-item-subtitle>9am a 2pm</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>DOMINGOS</v-list-item-title>
                    <v-list-item-subtitle>Cerrado</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col md="7" cols="12">
              <div class="text-h4 font-weight-black mb-8">Contactanos</div>
              <contactForm />
            </v-col>
          </v-row>
        </v-container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d239.09729206913124!2d-68.12101364380332!3d-16.49797085888567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f214f429342cd%3A0x682c496fdd9c18d2!2sDrontec!5e0!3m2!1ses!2sbo!4v1657903500699!5m2!1ses!2sbo"
          width="100%"
          height="600"
          frameborder="0"
          style="border: 0; display: block"
          allowfullscreen="true"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import contactForm from '~/components/sections/contactForm.vue'
export default {
  components: {
    contactForm,
  },
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3830745.jpg',
          heading: ' Contacto ',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Contacto',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>

<style scoped>
#footer-top {
  display: none !important;
}
</style>
