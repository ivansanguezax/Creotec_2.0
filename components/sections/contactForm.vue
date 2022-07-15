<template>
  <v-form>
    <v-row class="mb-n6">
      <v-col><v-text-field label="Nombre" dense outlined></v-text-field></v-col>
      <v-col><v-text-field label="Correo Electronico" dense outlined></v-text-field></v-col>
    </v-row>

    <v-row class="mb-n6">
      <v-col
        ><v-text-field label="Asunto" dense outlined></v-text-field
      ></v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-textarea
          dense
          label="Tu mensaje"
          auto-grow
          outlined
          rows="8"
          row-height="20"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-btn class="my-2" color="primary">Enviar mensjaje</v-btn
        ><v-btn class="my-2 ml-3">Limpiar</v-btn></v-col
      >
    </v-row>
  </v-form>
</template>
