<template>
  <v-container style="margin-top: 10%">
    <v-row>
      <v-col cols="12" sm="6">
        <section>
          <div>
            <h1><u>Hi there,👋</u></h1>
            <h1>happy to see you here!</h1>
          </div>
          <div>
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
            <p>I love to learn new things and especialy in developing</p>
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
  </v-container>
</template>

<script>
export default {}
</script>
