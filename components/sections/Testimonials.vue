<template>
  <section
    id="testimonials"
    :class="$vuetify.theme.dark ? 'black' : 'white'"
    class="py-16"
  >
    <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-8 my-8">
      Valoración de los clientes
    </h2>
    <v-carousel
      cycle
      draggable="true"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in testimonials" :key="i" class="">
        <v-container fill-height>
          <div style="max-width: 700px" class="mx-auto text-center">
            <v-avatar size="128" class="mb-7">
              <img
                :src="`/team/${item.avtar}`"
                alt="John"
                width="128"
                height="128"
              />
            </v-avatar>
            <h3
              :class="
                $vuetify.theme.dark
                  ? 'black'
                  : 'white grey--text text--darken-2'
              "
              class="mb-1 font-weight-black text-uppercase"
            >
              {{ item.name }}
            </h3>
            <div class="mb-10 font-weight-light grey--text text-uppercase">
              {{ item.post }}
            </div>
            <v-row>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-open</v-icon
                ></v-col
              >
              <v-col cols="10">
                <div
                  :class="
                    $vuetify.theme.dark
                      ? 'black'
                      : 'white grey--text text--darken-2'
                  "
                  class="mb-5 font-italic"
                >
                  Desde mi accidente perdí mi trabajo y vida social. Con mi prótesis buscare trabajo para mantener a mi familia.
                </div>
              </v-col>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-close</v-icon
                ></v-col
              >
            </v-row>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          avtar: 'icon-user.jpeg',
          name: 'Blanca Caracara',
        },
        {
          avtar: 'icon-user2.jpg',
          name: 'Jorge Marca',
        },
        {
          avtar: 'icon-user3.jpg',
          name: 'Jorge Marca',
        },
        {
          avtar: 'icon-user.jpeg',
          name: 'Blanca Caracara',
        },
        {
          avtar: 'icon-user2.jpg',
          name: 'Jorge Marca',
        },
      ],
    }
  },
}
</script>
