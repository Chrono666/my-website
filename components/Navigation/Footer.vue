<template>
  <v-footer fixed app>
    <v-row>
      <span>MReiber &copy; {{ new Date().getFullYear() }}</span>
    </v-row>
    <v-row>
      <div v-for="(link, i) in links" :key="i">
        <v-btn :href="link.to" class="mx-4" icon>
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: 'mdi-linkedin',
          to: 'linkedin.com/in/matthias-schmid-kietreiber-b824721b4',
        },
        {
          icon: 'mdi-github',
          to: 'https://github.com/Chrono666/',
        },
        {
          icon: 'mdi-email',
          to: 'mailto:matthias.schmid.k@web.de',
        },
      ],
      icons: ['mdi-linkedin', 'mdi-github', 'mdi-email'],
    }
  },
}
</script>
