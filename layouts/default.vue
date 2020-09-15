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
      <v-toolbar-title @click="$router.push('/')" v-text="title" />
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
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app>
      <span>MReiber &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-script-text-outline',
          title: 'Curriculum Vitae',
          to: '/cv',
        },
        {
          icon: 'mdi-code-tags',
          title: 'Projects',
          to: '/projects',
        },
      ],
      title: 'Matthias Schmid-Kietreiber',
    }
  },
}
</script>

<style scoped>
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
