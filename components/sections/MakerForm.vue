<template>
  <section id="maker-form">
    <v-container>
        <v-row>
          <v-bottom-navigation height="150">
          <v-btn value="recent" @click="active_form=1" class="mr-10">
            <span>Ver catálogo de prótesis</span>

            <v-icon>mdi-view-list</v-icon>
          </v-btn>

          <v-btn value="favorites" @click="active_form=2">
            <span>Crea tu propia protesis</span>

            <v-icon>mdi-creation</v-icon>
          </v-btn>
        </v-bottom-navigation>
        </v-row>
        <Catalog v-if="active_form == 1" cols="12"/>
        <div v-if="active_form == 2" class="mt-3">
          <v-row>
              <v-col cols="12" xs="12" md="5">
                  <v-img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      width="100%"
                      height="100%"
                      aspect-ratio="1.5"
                      container-width="100%"
                      container-height="100%"
                  ></v-img>
              </v-col>
              <v-col>
                  <v-card>
                      <v-card-title>
                          <span class="headline">Persona encargada de la toma de datos</span>
                      </v-card-title>
                      <v-card-text>
                          <v-form>
                              <v-text-field
                                  label="Nombre"
                                  v-model="form2.persona.nombre"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Apellido"
                                  v-model="form2.persona.apellidos"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Email"
                                  v-model="form2.persona.email"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Teléfono"
                                  v-model="form2.persona.telefono"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Pais"
                                  v-model="form2.persona.pais"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Ciudad"
                                  v-model="form2.persona.ciudad"
                                  required
                              ></v-text-field>
                          </v-form>
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                  <v-card>
                    <v-card-title>
                          <span class="headline">Datos del paciente</span>
                      </v-card-title>
                      <v-card-text>
                          <v-form>
                              <v-text-field
                                  label="Nombre"
                                  v-model="form2.paciente.nombre"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Apellidos"
                                  v-model="form2.paciente.apellidos"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  label="Teléfono"
                                  v-model="form2.paciente.telefono"
                                  required
                              ></v-text-field>
                          </v-form>
                      </v-card-text>
                  </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="5">
                  <v-img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      width="100%"
                      height="100%"
                      aspect-ratio="1.5"
                      container-width="100%"
                      container-height="100%"
                  ></v-img>
              </v-col>
          </v-row>
          <v-row>
              <v-col cols="12" xs="12" md="5">
                  <v-img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      width="100%"
                      height="100%"
                      aspect-ratio="1.5"
                      container-width="100%"
                      container-height="100%"
                  ></v-img>
              </v-col>
              <v-col>
                  <v-card>
                      <v-card-title>
                          <span class="headline">Caso clínico del paciente</span>
                      </v-card-title>
                      <v-card-text>
                          <v-form>
                              <label>Selecciona uno de los casos clínicos</label>
                              <v-radio-group v-model="form2.caso_clinico.hemisferio">
                                <v-radio
                                  v-for="n in ['Izquierdo', 'Derecho']"
                                  :key="n"
                                  :label="`${n}`"
                                  :value="n"
                                ></v-radio>
                              </v-radio-group>
                              <label>Causa de amputación</label>
                              <v-combobox
                                :items="causas"
                                v-model="form2.caso_clinico.descripcion.causa"
                                hint="En caso de no ser ninguno, describa la causa"
                              ></v-combobox>
                              <label>Fecha de amputación</label>
                              <br>
                              <v-date-picker v-model="form2.caso_clinico.descripcion.fecha"
                              ></v-date-picker>
                              <v-select
                                label="Sensibilidad al dolor"
                                :items="sensibilidades"
                                v-model="form2.caso_clinico.descripcion.sensibilidad">
                              </v-select>
                              <v-text-field
                                label="Otros detalles"
                                v-model="form2.caso_clinico.descripcion.otros_detalles"
                                required
                              ></v-text-field>
                          </v-form>
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                  <v-card>
                    <v-card-title>
                          <span class="headline">Requerimientos del paciente</span>
                      </v-card-title>
                      <v-card-text>
                          <v-form>
                              <v-select
                                label="Actividad para la que la desea"
                                :items="actividades"
                                v-model="form2.requerimientos.actividad"
                              ></v-select>
                              <v-select
                                label="Color de prótesis"
                                :items="colores"
                                v-model="form2.requerimientos.color"
                                item-text="colores[0]"
                              ></v-select>
                          </v-form>
                      </v-card-text>
                  </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="5">
                  <v-img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      width="100%"
                      height="100%"
                      aspect-ratio="1.5"
                      container-width="100%"
                      container-height="100%"
                  ></v-img>
              </v-col>
          </v-row>
          <v-row>
            <v-col>
                <v-btn color="primary" block>Enviar</v-btn>
            </v-col>
          </v-row>
        </div>
        
    </v-container>
  </section>
</template>

<script>
import Catalog from '@/components/sections/subsections/Catalog'
export default {
  name: 'MakerForm',
  components:{
    Catalog
  },
  data() {
    return {
      active_form: 2,
      causas: [
        "Laboral",
        "Accidente fortuito",
        "Nacimiento",
        "Accidente Vehicular",
        "Electricidad",
        "Enfermedad",
        "Negligencia médica"
      ],
      sensibilidades: [
        "Dolor en la punta del muñón",
        "Dolor a lo largo del muñón",
        "Sensibilidad al frio",
        "Ninguno"
      ],
      actividades: [
        "Actividades diarias",
        "Oficina",
        "Trabajo con herramientas pesadas",
        "Trabajo de campo"
      ],
      colores: [
        "Piel",
        "Blanco",
        "Azul",
        "Negro",
        "Rojo"
      ],
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
      form2: {
        persona: {
          nombre: '',
          apellidos: '',
          telefono: '+591 ',
          email: '',
          pais: '',
          ciudad: '',
        },
        paciente: {
          nombre: '',
          apellidos: '',
          telefono: '+591 ',
        },
        caso_clinico: {
          hemisferio: '',
          descripcion: {
            causa: '',
            fecha: '',
            sensibilidad_dolor: '',
            otros_detalles: '',
          }
        },
        requerimientos: {
          actividad: '',
          color: '',
        },
        medidas: {
          d1: 0.0,
          d2: 0.0,
          d3: 0.0,
          d4: 0.0,
          l0: 0.0,
          l1: 0.0,
          l2: 0.0,
          l3: 0.0,
          l4: 0.0,
          b1: 0.0,
          b2: 0.0,
          a1: 0.0,
          a2: 0.0,
          a3: 0.0,
          a4: 0.0,
        }
      }
    }
  },
  methods: {
    send_form(){
      if(this.active_form == 1){
        //TODO: Upload form1 to firestore
        this.$fire.firestore.collection("orders").doc("data / "+Math.random()*100).set(this.form1)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      }else{
        this.$fire.firestore.collection("maker_orders").doc("data"+Math.random()*100).set(this.form2)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      }
    },
  }
}
</script>