<template>
    <v-row>
        <v-col v-for="element in catalogo" :key="element" md="6" xs="12">
                <v-card>
                <v-card-title>
                    <span class="heading">{{ element.nombre }}</span>
                </v-card-title>
                <v-card-text>
                    <v-img
                    :lazy-src="`${element.img}`"
                    :src="`${element.img}`"
                    ></v-img>
                    <span><b>{{ element.subtitulo}}</b></span>
                    <br>
                    <ul color="success" v-for="item in element.caracteristicas" :key="item">
                    <li>
                        {{item}}
                    </li>
                    </ul>
                    <br>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="send_form">
                        <span>Ver más</span>
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                    </v-card-actions>
                    
                </v-card-text>
                </v-card>
        </v-col>    
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            catalogo: [
                    {
                    nombre: "Prótesis de Dedo",
                    subtitulo: "Prótesis de Dedo Cosmética",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Apariencia Hiperrealista",
                        "Color de tu piel"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: "",
                },
                {
                    nombre: "Prótesis de Mano",
                    subtitulo: "Prótesis de Mano Cosmética",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Apariencia Hiperrealista",
                        "Color de tu piel"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: "",
                },
                {
                    nombre: "Prótesis de Antebrazo Funcional",
                    subtitulo: "Prótesis de Antebrazo Funcional",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Movimiento funcional",
                        "Colores personalizados"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: "",
                },
                {
                    nombre:"Prótesis de Antebrazo Mixta",
                    subtitulo: "Prótesis de Antebrazo Mixta",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Apariencia Hiperrealista",
                        "Movimiento funcional"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: "",
                },
                {
                    nombre:"Prótesis de Antebrazo de Gancho",
                    subtitulo: "Prótesis de Antebrazo de Gancho",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Movimiento funcional",
                        "Colores personalizados"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: ""
                },
                {
                    nombre: "Prótesis de Brazo",
                    subtitulo: "Prótesis de Brazo Cosmética",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Apariencia Hiperrealista",
                        "Color de tu piel"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: "",
                },
                {
                    nombre: "Prótesis Cosméticas",
                    subtitulo: "Prótesis Variadas Cosméticas",
                    caracteristicas: [
                        "Diseño Personalizado",
                        "Apariencia Hiperrealista",
                        "Color de tu piel"
                    ],
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    url: "",
                },
            ],
        }
    },
}
</script>