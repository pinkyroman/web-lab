<template>
  <div class="container">
    <AppHeader 
      id="header"
      :title="title"
    />
    <AppNav
      :items="navItems"
      @selected="onNavItemSelected"
    />
    <AppContents :current-view="currentView"/>
  </div>
</template>

<style>
@import './assets/app.css';
</style>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppContents from './components/AppContents.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav,
    AppContents
  },
  data() {
    return {
      title: 'Vue.js 3 Sample App',
      navItems: [
        {
          title: 'Dashboard',
          view: '../views/DashboardView.vue',
        },
        {
          title: 'Monitoring',
          view: '../views/MonitoringView.vue',
        },
        {
          title: 'Alarms',
          view: '../views/AlarmsView.vue',
        },
      ],
      currentView: '',
    };
  },
  mounted() {
    this.currentView = this.navItems[0].view;
  },
  methods: {
    onNavItemSelected(item) {
      this.currentView = item.view;
    },
  },
};
</script>