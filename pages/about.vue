<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />       
        <v-container>
          <v-row class="py-16">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
              >
                 ¿Quiénes Somos?
              </h2>
              <h3
                class="text-h4 text-uppercase font-weight-thin text-center my-8"
              >
                 Empresa con más de 5 años fabricando prótesis funcionales para miembros superiores con impresión 3D.
              </h3>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Este emprendimiento familiar, comenzó en el año 2015 con la creación de la fundación CREOBOLIVIA, dedicada a la recolección y distribución de juguetes, víveres, panetones y artículos navideños para familias de comunidades rurales del departamento de La Paz. A partir de esa experiencia, los emprendedores observaron que las personas discapacitadas estaban en una situación de mayor vulnerabilidad, por lo que decidieron crear una solución.
              </p>
              <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                “Fusionamos nuestras dos pasiones: el altruismo y la tecnología, es así que nace la idea de fabricar prótesis con impresión 3D, teniendo esa base empezamos a publicitarnos en nuestras redes sociales y rápidamente logramos una buena aceptación del público”
              </blockquote>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                 Desde ese momento nace CREOTEC como un emprendimiento con orientación en responsabilidad social. Cuyo fin es diseñar y elaborar prótesis para personas de escasos recursos económicos, ya que a partir de un estudio a sus pacientes llegaron a la conclusión que la gente más vulnerable a sufrir alguna amputación no tiene recursos económicos sólidos, y no cuentan con el dinero para comprar una prótesis que ofrece el mercado. Fue de esa manera que la empresa asume la responsabilidad de atender al público con precios módicos y accesibles.
                 <br> <br>
                Fruto del trabajo sostenido y de la tenacidad emprendedora, Creotec ha cosechado maravillosas historias de superación personal, como es el caso de Richard quien pese a su doble amputación logró salir adelante y cumplir su sueño de ser empresario, y también Daniela que a su corta edad ya experimenta los beneficios de contar con una prótesis.

                Posteriormente, en 2020, el desafío nuevamente tocó la puerta de los hermanos Riveros quienes no quisieron quedarse ajenos a la necesidad de que en Bolivia hayan más respiradores para los pacientes con coronavirus, es así que crean Meditec, una unidad de negocio de su compañía dedicada a la fabricación a bajo costo de respiradores artificiales.
              </p>
            </v-col>
          </v-row>
        </v-container>
        <SectionsTeam :our-team="ourTeam" />

        <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="client1.jpeg"
              lazy-src="client1.jpeg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Nuestra Visión</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="client2.jpeg"
              lazy-src="client2.jpeg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Nuestra Misión</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium. Doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. emo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos
              </p>
            </div>
          </v-col>
        </v-row>

        <SectionsTimeline />
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
          src: 'pexels-moose-photos-1036641.jpg',
          heading: ' Sobre Nosotros ',
        },
      ],
      ourTeam: [
        {
          name: 'Antonio Riveros',
          position: 'Founder – CEO',
          // phone: '+1 (987) 1625346',
          //email: 'john@example.com',
          photo: 'person1.png',
        },
        {
          name: 'Rafael Riveros',
          position: 'Co Founder – COO',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person2.png',
        },
        {
          name: 'Josue Castillo',
          position: 'CTO En Robótica',
          // phone: '+1 (987) 6982456',
          // email: 'justin@example.com',
          photo: 'person3.png',
        },
        {
          name: 'Koryan Lee',
          position: 'Artista Plástica',
          // phone: '+1 (987) 6982456',
          // email: 'amelia@example.com',
          photo: 'person4.png',
        },
        {
          name: 'Mauricio De La Riva',
          position: 'Comunicación',
          // phone: '+1 (987) 6982456',
          // email: 'sebastian@example.com',
          photo: 'person5.png',
        },
        // {
        //   name: 'Eric Sutton',
        //   position: 'Advertising Executive',
        //   phone: '+1 (987) 6982456',
        //   email: 'audrey@example.com',
        //   photo: 'person-6.jpg',
        // },
        // {
        //   name: 'Xia Yen',
        //   position: 'Advertising Manager',
        //   phone: '+1 (987) 6982456',
        //   email: 'christian@example.com',
        //   photo: 'person-7.jpg',
        // },
        // {
        //   name: 'Bernadette	Springer',
        //   position: 'Employee Relations Manager',
        //   phone: '+1 (987) 6982456',
        //   email: 'bernadette@example.com',
        //   photo: 'person-8.jpg',
        // },
        // {
        //   name: 'Elizabeth Newman',
        //   position: 'Project Manager',
        //   phone: '+1 (987) 6982456',
        //   email: 'elizabeth@example.com',
        //   photo: 'person-9.jpg',
        // },
      ],
    }
  },
  head() {
    return {
      title: 'Acerca de',
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
