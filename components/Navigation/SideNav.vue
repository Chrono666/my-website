<template>
  <v-navigation-drawer
    :value="value"
    absolute
    temporary
    app
    @input="$emit('input', $event)"
  >
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
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
