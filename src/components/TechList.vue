<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col cols="auto">
        <h2>Languages</h2>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-col 
        cols="12"
        md="6"
      >
        <tech-card
          title="Python"
          icon="mdi-language-python"
        >
          <p>Python is my go to language for any small automation tasks and large-scale projects.</p>
          <p>The frameworks I've worked with are Django, Flask, NumPy, and Pandas.</p>
        </tech-card>
      </v-col>
      <v-spacer />
      <v-col 
        cols="12"
        md="6"
      >
        <tech-card
          title="Vue.js"
          icon="mdi-vuejs"
        >
          <p>
            Back in the day, I considered myself more as a backend developer. It wasn't until I learned Vue.js on the job that that changed. 
          </p>
          <p>
            This website was made in Vue.js alongside the material design component library Vuetify.
          </p>
        </tech-card>
      </v-col>
      <v-spacer />
      <v-col 
        cols="12"
        md="6"
      >
        <tech-card
          title="C#"
          icon="mdi-language-csharp"
        >
          <p>C# is the main language I've used for creating video games. The frameworks I've used are Unity and Monogame.</p>
        </tech-card>
      </v-col>
      <v-spacer />
      <v-col 
        cols="12"
        md="6"
      >
        <tech-card
          title="Java"
          icon="mdi-language-java"
        >
          <p>Java is the main language taught at my university, so I have a large amount of experience with it.</p>
        </tech-card>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-col 
        cols="12"
        md="6"
      >
        <tech-card
          title="C++"
          icon="mdi-language-cpp"
        >
          <p>C++ is dear to me as it is the first programming language I have learned.</p>
        </tech-card>
      </v-col>
      <v-col 
        cols="12"
        md="6"
      >
        <tech-card
          title="MySQL"
          icon="mdi-database"
        >
          <p>MySQL is the main database management system I use.</p>
        </tech-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import TechCard from './TechCard.vue'

export default {
  components: { TechCard },

  data() {
    return {
      // tech: [
      //   {
      //     title: 'Python',
      //     icon: 'mdi-language-python',
      //     content: `
      //       Python is my go to language for any small automation tasks and large-scale projects.

      //       The frameworks I've worked with are Django, Flask, NumPy, and Pandas.
      //     `,
      //   },
      //   {
      //     title: 'Vue.js',
      //     icon: 'mdi-vuejs',
      //     content: `
      //       Back in the day, I considered myself more as a backend developer. It wasn't until I learned Vue.js on the job that
      //       that changed. This website was made in Vue.js alongside the component library Vuetify.
      //     `,
      //   },
      //   {
      //     title: 'C#',
      //     icon: 'mdi-language-csharp',
      //     content: `
      //       C# is the main language I've used for creating video games. The frameworks I've used are Unity and Monogame.
      //     `,
      //   },
      // ]
    }
  }
}
</script>
