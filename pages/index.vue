<template>
  <v-container style="margin-top: 10%">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <section>
          <div class="headingText">
            <h1><u>Hi there,👋</u></h1>
            <h1>happy to see you here!</h1>
          </div>
          <div class="normalText">
            <p>
              My name is Matthias and I'm a computer science student from
              austria.
            </p>
            <p>
              I'm currently in my third semester of the bachelor course
              <a
                target="_blank"
                href="https://www.fh-campuswien.ac.at/en/studies/study-courses/detail/computer-science-and-digital-communications-berufsbegleitend.html?tx_asfhcw_course%5Bcontroller%5D=Course&also=&cHash=238d8bb01497e1faea2295ea25552bcc"
              >
                Computer Science & Digital Communication
              </a>
            </p>
            <p>
              In my late 20s I decided to change career from technical
              engineering to information technology, the best decision of my
              life so far!
            </p>
          </div>
        </section>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          style="border-radius: 50%"
          :src="require('@/assets/images/profile_lessFormal.jpg')"
        />
      </v-col>
    </v-row>
    <v-row style="margin-top: 40px" justify="center">
      <h1 class="text-center">Skills</h1>
    </v-row>
    <v-row>
      <p>
        Always happy to learn new things, most of my skills are self taught
        through completing a project for school.
      </p>
    </v-row>
    <v-row justify="right" align="right">
      <v-col
        v-for="skill in skills"
        :key="skill"
        cols="12"
        sm="4"
        class="normalText"
      >
        {{ skill.tile }}
        <v-spacer />
        <v-progress-linear
          v-model="skill.progress"
          color="green"
          height="25"
          rounded
        >
          <template v-slot="{ value }">
            <strong>{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      star: 'mdi-star',
      starOutline: 'mdi-star-outline',
      skills: [
        {
          tile: 'Java',
          progress: 70,
        },
        {
          tile: 'Spring',
          progress: 50,
        },
        {
          tile: 'Hibernate',
          progress: 50,
        },
        {
          tile: 'C',
          progress: 40,
        },
        {
          tile: 'SQL',
          progress: 60,
        },
        {
          tile: 'Javascript',
          progress: 30,
        },
        {
          tile: 'HTML',
          progress: 50,
        },
        {
          tile: 'CSS',
          progress: 50,
        },
        {
          tile: 'Vue',
          progress: 75,
        },
        {
          tile: 'NUXT',
          progress: 75,
        },
      ],
    }
  },
}
</script>

<style scoped>
.headingText {
  font-size: 40px !important;
}

.normalText {
  font-size: 25px !important;
}
</style>
