<template>
  <v-card height="100%">
    <v-row>
      <v-spacer />
      <v-col cols="auto">
        <v-icon x-large>
          {{ icon }}
        </v-icon>
      </v-col>
      <v-spacer />
    </v-row>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text><slot /></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: String,
      required: true,
    },
  }
}
</script>
