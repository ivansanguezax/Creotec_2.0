<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <h2
            class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
          >
            Nuestro Catalogo
          </h2>
          <p class="text-h6 text-uppercase font-weight-light text-center my-16">
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse
            condimentum porttitor cursumus.
          </p>
          <Catalog />
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Catalog from '@/components/sections/subsections/Catalog'
export default {
  components: {
    Catalog,
  },
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-ekaterina-bolovtsova-4048767.jpg',
          heading: 'Protesis ',
        },
      ],
      cards: [
        {
          title: 'Material Design',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-material-design',
        },
        {
          title: 'Powerful template',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-desktop-mac',
        },
        {
          title: 'Retina Ready',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-eye',
        },
        {
          title: 'Fast Loading',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-speedometer',
        },
        {
          title: 'Unlimited Colors',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-infinity',
        },
        {
          title: 'Premium Sliders',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-slide',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Protesis',
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
