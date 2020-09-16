<template>
  <v-app-bar
    fixed
    app
    shrink-on-scroll
    :src="require('@/assets/images/sun_rise.jpg')"
  >
    <v-app-bar-nav-icon class="drawer-toggle" @click.stop="drawer = !drawer" />
    <SideNav v-model="drawer" :items="items" />
    <v-toolbar-title class="title" @click="$router.push('/')" v-text="title" />
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
</template>
<script>
import SideNav from '@/components/Navigation/SideNav'
export default {
  components: { SideNav },
  data() {
    return {
      drawer: false,
      items: this.$store.getters.getNavBarItems,
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
