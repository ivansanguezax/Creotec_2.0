<template>
  <section id="intro" class="py-16">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="600">
        <v-avatar color="primary" size="70" class="mb-8">
          <v-icon x-large dark>mdi-web</v-icon>
        </v-avatar>
        <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-7">
          Prótesis de bajo costo
        </h2>
        <p class="title font-weight-light">
          Las prótesis de Creotec son accesibles para tu economía y de alta calidad. Creotec te envia pruebas de la prótesis hasta que esta sea perfecta para ti
        </p>
      </v-responsive>

      <v-row class="pt-12">
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <v-row no-gutters>
            <v-col :cols="card.callout ? 9 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="card.subtitle"></div>
                <h4
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em"
                  v-text="card.title"
                ></h4>
                <p v-text="card.text"></p>
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <span
                class="text-h3 grey--text font-weight-bold pr-8"
                style="opacity: 0.1"
                >{{ card.callout }}</span
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Consigue tu Prótesis',
          text: 'Conoce como Creotec hace tu prótesis personalizada',
          callout: '01',
        },
        {
          title: 'Solicita una donación',
          text: 'Creotec puede donar prótesis a personas de bajos recursos',
          callout: '02',
        },
        {
          title: 'Creotec para empresas',
          text: "Hacemos proyectos de RSE para impactar a tu comunidad",
          callout: '03',
        },
        
      ],
    }
  },
}
</script>
