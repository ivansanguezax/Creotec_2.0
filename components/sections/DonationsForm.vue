<template>
  <v-container>
    <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <span class="headline">Solicita una protesis</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="form1.nombre"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form1.apellidos"
                  label="Apellidos"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form1.telefono"
                  label="Teléfono"
                  autocomplete="phone"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form1.email"
                  label="Correo"
                  autocomplete="email"
                  required
                ></v-text-field>
                <span>
                  Seleccione su solicitud
                </span>              
                <v-radio-group v-model="form1.solicitud">
                <v-radio
                  v-for="n in ['Solicitud de compra de prótesis', 'Solicitud de donación de prótesis', 'Solicitud de empresa para proyecto RSE']"
                  :key="n"
                  :label="`${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="send_form">Enviar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            form1: {
                nombre: '',
                apellidos: '',
                telefono: '+591 ',
                email: '',
                solicitud: '',
            },
        }
    },
}
</script>

<style>

</style>