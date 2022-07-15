<template>
  <section class="primary darken-1 white--text py-16">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            Pasos para obtener tu prótesis
          </h2>
          <div
            class="text-h5 text-md-h4 text-center font-weight-black py-3 mb-10"
          >
            Creotec puede donar prótesis a personas de bajos recursos
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-avatar
            size="80"
            class="display-1 white font-weight-bold primary--text mb-5"
            style="opacity: 1.15"
            >{{ card.callout }}</v-avatar
          >
          <div class="title text-uppercase mt-1 mb-4" v-text="card.title"></div>

          <p v-text="card.text"></p>
          <v-row no-gutters>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-btn x-large rounded color="white primary--text mx-auto mt-10 px-16">
          <v-icon dark left> mdi-check-bold </v-icon>Pidelo Ya!
        </v-btn>
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
          title: 'Solicitud',
          text: 'Solicitas tu prótesis y te confirmamos el inicio de su fabricación',
          callout: '01',
        },
        {
          title: 'Pruebas',
          text: 'El equipo de Creotec diseña la prótesis a tu medida.',
          callout: '02',
        },
        {
          title: 'Pago Final',
          subtitle: 'Income Flow',
          text: 'Pago final y entrega de tu prótesis terminada y la garantía.',
          callout: '03',
        },
      ],
    }
  },
}
</script>
