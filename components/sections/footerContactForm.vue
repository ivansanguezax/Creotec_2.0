<template>
  <v-form>
    <v-text-field label="Nombre" dense outlined></v-text-field>
    <v-text-field label="Correo Electronico" dense outlined></v-text-field>
    <v-text-field label="Tema" dense outlined></v-text-field>
    <v-textarea
      dense
      label="Tu mensaje"
      auto-grow
      outlined
      rows="8"
      row-height="20"
    ></v-textarea>
    <v-btn outlined block color="primary">ENVIAR MENSAJE</v-btn>
  </v-form>
</template>
