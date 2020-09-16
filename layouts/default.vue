<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          class="drawer-toggle"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      shrink-on-scroll
      :src="require('@/assets/images/sun_rise.jpg')"
    >
      <v-app-bar-nav-icon
        class="drawer-toggle"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title
        class="title"
        @click="$router.push('/')"
        v-text="title"
      />
      <v-spacer />
      <v-tabs
        class="navigation-items"
        hide-slider
        color="blue"
        right
        icons-and-text
        show-arrows
      >
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          style="font-size: 25px"
          :to="item.to"
          router
          exact
        >
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-tab>
        <v-btn icon @click="goDark = !goDark">
          <v-icon>mdi-brightness-4</v-icon>
        </v-btn>
      </v-tabs>
    </v-app-bar>
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
export default {
  components: {
    Footer,
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-script-text-outline',
          title: 'Resume',
          to: '/cv',
        },
        {
          icon: 'mdi-code-tags',
          title: 'Projects',
          to: '/projects',
        },
      ],
      title: 'MReiber',
    }
  },
}
</script>

<style scoped>
.title {
  font-size: 30px !important;
  font-weight: bold !important;
  color: white !important;
}

.navigation-items {
  display: none;
  max-width: 50%;
}

@media (min-width: 1300px) {
  .drawer-toggle {
    display: none;
  }
  .navigation-items {
    display: block;
  }
}
</style>
