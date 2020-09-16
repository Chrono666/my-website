<template>
  <v-app dark>
    <NavBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Navigation/Footer'
import NavBar from '@/components/Navigation/NavBar'
export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>
