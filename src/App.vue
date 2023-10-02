<template>
  <div id="trim"></div>
  <RouterView @toggleDarkModeEnabled="toggleDarkModeEnabled" :darkModeEnabled="darkModeEnabled" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { pageview } from 'vue-gtag';

export default defineComponent({
  name: 'App',

  components: {
    RouterView,
  },

  data() {
    return {
      darkModeEnabled: false
    };
  },

  mounted() {
    this.determineInitialColourScheme();
    this.trackGA4();
    console.log(`Hi developer - welcome to my portfolio! If you're curious, this website was built using Vue.js.\n\nPlease let me know if you have any feedback or encounter any bugs!`);
  },

  updated() {
    this.updateColourScheme();
  },

  methods: {
    trackGA4() {
      /**
       * Send the current route to gtag.
       */
      pageview({ page_path: '/', page_title: 'Home' });
    },

    toggleDarkModeEnabled(): void {
      /**
       * Toggle the dark mode enabled state.
       */
      this.darkModeEnabled = !this.darkModeEnabled;
    },

    determineInitialColourScheme(): void {
      /**
       * Determine the initial colour scheme based on the user's preference.
       */
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? this.darkModeEnabled = true : this.darkModeEnabled = false;
      this.updateColourScheme();
    },

    updateColourScheme(): void {
      /**
       * Update the colour scheme based on the dark mode enabled state.
       */
      const root: HTMLElement | null = document.querySelector(':root');

      if (this.darkModeEnabled) {
        if (root && root.style) {
          root.style.setProperty('--color-background', 'var(--vt-c-black)')
          root.style.setProperty('--color-background-mute', 'var(--vt-c-black-mute)')
          root.style.setProperty('--color-background-soft', 'var(--vt-c-black-soft)')

          root.style.setProperty('--color-border', 'var(--vt-c-divider-dark-2)')
          root.style.setProperty('--color-border-hover', 'var(--vt-c-divider-dark-1)')
          root.style.setProperty('--color-border-hover-90', 'var(--vt-c-divider-dark-3)')

          root.style.setProperty('--color-heading', 'var(--vt-c-text-dark-1)')
          root.style.setProperty('--color-text', 'var(--vt-c-text-dark-2)')
          root.style.setProperty('--color-hover', 'var(--vt-c-text-dark-3)')
        }
      } else {
        if (root && root.style) {
          root.style.setProperty('--color-background', 'var(--vt-c-white)')
          root.style.setProperty('--color-background-mute', 'var(--vt-c-white-soft)')
          root.style.setProperty('--color-background-soft', 'var(--vt-c-white-mute)')

          root.style.setProperty('--color-border', 'var(--vt-c-divider-light-2)')
          root.style.setProperty('--color-border-hover', 'var(--vt-c-divider-light-1)')
          root.style.setProperty('--color-border-hover-90', 'var(--vt-c-divider-light-3)')

          root.style.setProperty('--color-heading', 'var(--vt-c-text-light-1)')
          root.style.setProperty('--color-text', 'var(--vt-c-text-light-1)')
          root.style.setProperty('--color-hover', 'var(--vt-c-text-light-2)')
        }
      }
    }
  },
});
</script>

<style scoped>
#trim {
  position: sticky;
  top: 0;
  width: 100%;
  height: 5px;
  background-color: var(--vt-c-trim);
  z-index: 999;
}
</style>