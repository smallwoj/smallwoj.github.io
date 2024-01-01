<template>
  <v-hover v-slot="{ hover }">
  <v-card
    @click="dialog = true"
    height="100%"
    max-width="300px"
    :elevation="hover ? 12 : 2"
    :class="{ 'on-hover': hover }"
  >
    <v-img
      :src="image"
      max-width="250px"
      max-height="200px"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title>{{ title }}</v-card-title>
    </v-img>
    <v-dialog 
      v-model="dialog"
      :max-width="dialogSize"
    >
      <v-card>
        <slot name="carousel" />
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
            v-if="play"
            :href="play"
            target="_blank"
            color="primary"
          >
            <v-icon left>mdi-play</v-icon>
            Play
          </v-btn>
          <v-btn
            v-if="discordAdd"
            :href="discordAdd"
            target="_blank"
            color="primary"
          >
            <v-icon left>mdi-plus</v-icon>
            Add to server
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
  </v-hover>
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
    discordAdd: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    dialogSize() {
      if (this.$vuetify.breakpoint.mobile) {
        return '75%';
      }
      else {
        return '50%';
      }
    }
  },
}
</script>
