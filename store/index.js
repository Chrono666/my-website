export const state = () => ({
  drawer: false,
  items: [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
    {
      icon: 'mdi-code-tags',
      title: 'Projects',
      to: '/projects',
    },
  ],
  skills: [
    {
      tile: 'Java',
      progress: 60,
      icon: require('@/assets/icons/java.png'),
      description:
        'The first programming language I learned at school and probably the one I am currently most familiar with',
    },
    {
      tile: 'Spring',
      progress: 50,
      icon: require('@/assets/icons/spring-framework-icon.jpg'),
    },
    {
      tile: 'Hibernate',
      progress: 50,
      icon: require('@/assets/icons/hibernate-icon.png'),
    },
    {
      tile: 'C',
      progress: 20,
      icon: require('@/assets/icons/c-icon.png'),
    },
    {
      tile: 'PostgreSQL',
      progress: 50,
      icon: require('@/assets/icons/postgresql.png'),
    },
    {
      tile: 'Javascript',
      progress: 30,
      icon: require('@/assets/icons/js-icon.png'),
    },
    {
      tile: 'HTML',
      progress: 50,
      icon: require('@/assets/icons/html-icon.png'),
    },
    {
      tile: 'CSS',
      progress: 30,
      icon: require('@/assets/icons/css-icon.png'),
    },
    {
      tile: 'Vue.js',
      progress: 60,
      icon: require('@/assets/icons/vue.png'),
    },
    {
      tile: 'NUXT.js',
      progress: 60,
      icon: require('@/assets/icons/nuxt.png'),
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {
  getNavBarItems(state) {
    return state.items
  },
  getSkills(state) {
    return state.skills
  },
}
