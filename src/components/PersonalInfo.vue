<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-avatar
          size="192"
        >
          <v-img
            src="https://avatars3.githubusercontent.com/u/31932412?s=460&u=18ff7c00a3148f056252793b3e3a956f081bd357&v=4"
          />
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <h2>Hello!</h2>
      </v-row>
      <v-row justify="center">
        <v-subheader>Welcome to my personal website!</v-subheader>
      </v-row>
      <v-row justify="center">
        <v-card >
          <v-card-title>About Me</v-card-title>
          <v-card-text>
            <p>
              I am a Computer Science graduate from the University of Manitoba in the Co-op Program. I am
              a full-time Software Engineer at FarmLink Marketing Solutions, where I work in the full stack to 
              develop a comprehensive web application.
            </p>
            <p>
              When developing, I emphasize code completeness, reliability, and efficiency. No code of mine leaves my
              development environment without extensive testing.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.linkedin.com/in/joshua-smallwood-b6a4a21a9/"
              target="_blank"
            >
              <v-icon left>mdi-linkedin</v-icon>
              LinkedIn
            </v-btn>
            <v-btn
              href="https://www.github.com/smallwoj/"
              target="_blank"
            >
              <v-icon left>mdi-github</v-icon>
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>
