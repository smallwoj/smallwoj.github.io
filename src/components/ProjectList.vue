<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col cols="auto">
        <h2>Projects</h2>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer v-if="!$vuetify.breakpoint.mobile" />
      <v-col cols="auto">
        <project-card
          title="Crazy Tennis!"
          image="https://img.itch.zone/aW1nLzQ5MDgxNTgucG5n/315x250%23c/iaYeh%2F.png"
          source-code="https://github.com/smallwoj/crazy-tennis"
          play="https://ninepatch.itch.io/crazy-tennis"
        >
          <template v-slot:text>
            <p>
              Crazy Tennis starts off as a completely normal, non-crazy sports game, 
              but soon shows itself to be a bullet hell combat game as you fight your 
              way through a cast of wacky opponents up to world champion Crazy Dennis.
              Written in Unity using C#.
            </p>
          </template>
          <template v-slot:carousel>
          <v-carousel
            cycle
            height="auto"
          >
            <v-carousel-item eager>
              <v-img 
                eager
                src="https://raw.githubusercontent.com/smallwoj/crazy-tennis/master/CRAZY%20TENNIS/Assets/images/Screenshots/Screenshot1.png"
              />
            </v-carousel-item>
            <v-carousel-item eager>
              <v-img 
                eager
                src="https://raw.githubusercontent.com/smallwoj/crazy-tennis/master/CRAZY%20TENNIS/Assets/images/Screenshots/Screenshot2.png"
              />
            </v-carousel-item>
            <v-carousel-item eager>
              <v-img 
                eager
                src="https://raw.githubusercontent.com/smallwoj/crazy-tennis/master/CRAZY%20TENNIS/Assets/images/Screenshots/Screenshot3.png"
              />
            </v-carousel-item>
          </v-carousel>
          </template>
        </project-card>
      </v-col>
      <v-col cols="auto">
        <project-card
          title="Join Sound Johnson"
          image="https://raw.githubusercontent.com/smallwoj/join-sound-johnson-py/c768fe6cddb0d2d9e95b8febcc90b0803bbc41c3/icon.svg"
          source-code="https://github.com/smallwoj/join-sound-johnson"
          discord-add="https://discord.com/application-directory/953092836608319549"
        >
          <template v-slot:text>
            <p>
              Join Sound Johnson is a Discord bot that allows users to set a video/audio attachment that plays when 
              they join a voice channel. Written in Rust and MySQL.
            </p>
          </template>
          <template v-slot:carousel>
            <v-container>
              <v-row>
                <v-spacer />
                <v-col cols="9">
                  <v-img 
                    eager
                    src="https://cdn.discordapp.com/attachments/764746270026760247/822670783825575946/unknown.png"
                  />
                </v-col>
                <v-spacer />
              </v-row>
            </v-container>
          </template>
        </project-card>
      </v-col>
      <v-col cols="auto">
        <project-card
          title="Packitt"
          image="https://img.itch.zone/aW1nLzgwMjU4MDQucG5n/original/QxX2ka.png"
          source-code="https://github.com/drkitt/packitt"
          play="https://ninepatch.itch.io/packitt"
        >
          <template v-slot:text>
            <p>
              "Bad and naughty objects get put in The Packitt Wiggler to atone for their crimes!" Packitt is about
              packing all of your objects in the wiggler so they don't fall out! Made in Godot for the 2022 CSS Game Jam.
            </p>
          </template>
          <template v-slot:carousel>
          <v-carousel
            cycle
            height="auto"
          >
            <v-carousel-item eager>
              <v-img 
                eager
                src="https://img.itch.zone/aW1hZ2UvMTM3ODEzOS84Mjk2MjI5LnBuZw==/original/RsfEIZ.png"
              />
            </v-carousel-item>
            <v-carousel-item eager>
              <v-img 
                eager
                src="https://img.itch.zone/aW1hZ2UvMTM3ODEzOS84Mjk2MjMxLnBuZw==/original/MhiBVt.png"
              />
            </v-carousel-item>
            <v-carousel-item eager>
              <v-img 
                eager
                src="https://img.itch.zone/aW1hZ2UvMTM3ODEzOS84Mjk2MjMwLnBuZw==/original/rIDu1k.png"
              />
            </v-carousel-item>
          </v-carousel>
          </template>
        </project-card>
      </v-col>
      <v-spacer v-if="!$vuetify.breakpoint.mobile" />
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components: { ProjectCard },
  computed: {
    projects() {
      return [
        {
          title: 'Crazy Tennis',
          desc: '',
          sourceCode: '',
          play: '',
        },
      ]
    }
  }
}
</script>
