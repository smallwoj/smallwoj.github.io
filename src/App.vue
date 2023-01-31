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
        <span class="secondary--text font-weight-medium text-h5 text-md-h3">Joshua Smallwood</span>
      </v-col>
      <v-spacer />
      <v-col 
        v-if="!$vuetify.breakpoint.mobile"
        cols="auto"
      >
        <v-btn
          icon
          href="https://www.linkedin.com/in/joshua-smallwood-b6a4a21a9/"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-col>
      <v-col 
        v-if="!$vuetify.breakpoint.mobile"
        cols="auto"
      >
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
          <tech-list />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col
          cols="12"
          md="6"
        >
          <project-list />
        </v-col>
        <v-spacer />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import PersonalInfo from './components/PersonalInfo';
import TechList from './components/TechList';
import ProjectList from './components/ProjectList';

export default {
  name: 'App',
  title: 'Joshua Smallwood',

  components: {
    PersonalInfo,
    TechList,
    ProjectList,
  },

  data: () => ({
    //
  }),
};
</script>
