<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-col cols="auto">
        <v-btn
          icon
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <v-divider vertical />
      <v-col cols="auto">
        <h1 class="secondary--text">Joshua Smallwood</h1>
      </v-col>
      <v-spacer />
      <v-col cols="auto">
        <v-btn
          icon
          href="https://www.linkedin.com/in/joshua-smallwood-b6a4a21a9/"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          icon
          href="https://www.github.com/smallwoj/"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-spacer />
        <v-col
          cols="12"
          md="6"
        >
          <personal-info />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col
          cols="12"
          md="6"
        >
          <technologies />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col
          cols="12"
          md="6"
        >
          <projects />
        </v-col>
        <v-spacer />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import PersonalInfo from './components/PersonalInfo';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

export default {
  name: 'App',
  title: 'Joshua Smallwood',

  components: {
    PersonalInfo,
    Technologies,
    Projects,
  },

  data: () => ({
    //
  }),
};
</script>
