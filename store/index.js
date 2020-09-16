export const state = () => ({
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
})

export const mutations = {}

export const actions = {}

export const getters = {
  getNavBarItems(state) {
    return state.items
  },
}
