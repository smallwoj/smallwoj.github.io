<template>
  <v-card
    @click="dialog = true"
  >
    <v-img
      :src="image"
      width="100%"
    />
    <v-card-title>{{ title }}</v-card-title>
    <v-dialog
      v-model="dialog"
    >
      <v-card>
        <v-carousel
          cycle
          width="100%"
        >
          <slot name="carousel-images" />
        </v-carousel>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text><slot name="text" /></v-card-text>
        <v-card-actions>
          <v-btn
            @click="dialog = false"
          >
            <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
          <v-btn
            :href="sourceCode"
            target="_blank"
            color="primary"
          >
            <v-icon left>mdi-github</v-icon>
            Source Code
          </v-btn>
          <v-btn
            :v-if="play"
            :href="play"
            target="_blank"
            color="primary"
          >
            <v-icon left>mdi-play</v-icon>
            Play
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    sourceCode: {
      type: String,
      required: true,
    },
    play: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
