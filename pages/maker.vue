<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <h2
            class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
          >
            Conviértete En Un Agente De Cambio
          </h2>
          <p class="text-h6 text-uppercase font-weight-light text-center my-16">
            Creotec puede ayudarte a donar una prótesis a personas de bajos recursos.

          </p>
          <v-row>
            <v-col
              v-for="(card, index) in cards"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              xl="2"
              class="text-center"
            >
              <v-avatar size="80" class="mb-5" color="primary">
                <v-icon dark large>
                  {{ card.icon }}
                </v-icon>
              </v-avatar>
              <div
                class="title text-uppercase mt-1 mb-4"
                v-text="card.title"
              ></div>
              <p v-text="card.text"></p>
              <v-row no-gutters>
                <v-col cols="12"> </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <SectionsMakerForm />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'maker.jpeg',
          heading: ' Maker ',
        },
      ],
      cards: [
        {
          title: 'Pedido',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-truck-delivery',
        },
        {
          title: 'Pruebas',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-hammer-screwdriver',
        },
        {
          title: 'Entrega o Envio',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-hand-coin',
        },
        // {
        //   title: 'Fast Loading',
        //   text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        //   icon: 'mdi-speedometer',
        // },
        // {
        //   title: 'Unlimited Colors',
        //   text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        //   icon: 'mdi-infinity',
        // },
        // {
        //   title: 'Premium Sliders',
        //   text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        //   icon: 'mdi-slide',
        // },
      ],
    }
  },
  head() {
    return {
      title: 'Maker',
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
