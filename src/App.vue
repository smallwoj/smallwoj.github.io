<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1 class="d-flex align-center">
        Joshua Smallwood
      </h1>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  title: 'Joshua Smallwood',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
