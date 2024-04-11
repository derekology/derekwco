<template>
  <main>
    <div id="site-header-container" v-show="currentSection !== 'Intro'">
      <animated-component animationType="fade">
        <SiteHeader :currentSection="currentSection" :allSections="allSections" @passDarkModeEnabled="passDarkModeEnabled"
          :darkModeEnabled="darkModeEnabled" />
      </animated-component>
    </div>
    <div id="intro-section" class="section" data-section-name="Intro" ref="intro">
      <div class="section-body">
        <IntroSection />
      </div>
    </div>
    <!-- <div id="projects-section" class="section" data-section-name="Projects" ref="projects">
      <div class="section-body">
        <ProjectSection />
      </div>
    </div> -->
    <div id="skills-section" class="section" data-section-name="Skills" ref="skills">
      <div class="section-body">
        <SkillSection />
      </div>
    </div>
    <div id="certs-section" class="section" data-section-name="Certs" ref="certs">
      <div class="section-body">
        <CertSection />
      </div>
    </div>
    <div id="about-section" class="section" data-section-name="About" ref="about">
      <div class="section-body">
        <AboutSection />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AnimatedComponent from '@/components/partials/AnimatedComponent.vue';
import SiteHeader from '@/components/partials/SiteHeader.vue';
import IntroSection from '@/components/sections/IntroSection.vue';
// import ProjectSection from '@/components/sections/ProjectSection.vue';
import SkillSection from '@/components/sections/SkillSection.vue';
import CertSection from '@/components/sections/CertSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';

export default defineComponent({
  name: 'HomeView',

  props: {
    darkModeEnabled: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    SiteHeader,
    AnimatedComponent,
    IntroSection,
    // ProjectSection,
    SkillSection,
    CertSection,
    AboutSection,
  },

  data() {
    return {
      currentSection: 'Intro',
      viewportHeight: window.innerHeight,
    };
  },

  computed: {
    /**
     * Returns an array of all sections to be shown in the menu.
     * 
     * @returns {string[]} - An array of all items to be shown in the menu
     */
    allSections(): string[] {
      return this.getMenuItems();
    }
  },

  methods: {
    /**
     * Passes the dark mode enabled state from child.
     */
    passDarkModeEnabled(): void {
      this.$emit('toggleDarkModeEnabled');
    },

    /**
     * Returns a list of all sections on the page.
     * 
     * @returns {NodeListOf<HTMLElement>} - A list of all sections
     */
    getAllSections(): NodeListOf<HTMLElement> {
      return document.querySelectorAll('.section');
    },

    /**
     * Updates the threshold for the IntersectionObserver if the screen height has changed.
     */
    updateThresholdOnViewportHeightChange(): void {
      if (this.viewportHeight != window.innerHeight) {
        this.viewportHeight = window.innerHeight;
        this.getCurrentSection();
      }
    },

    /**
     * Sets the current section based on the section that is in view.
     */
    getCurrentSection(): void {
      const activeSectionThresholdPercentage: number = 0.55;
      const allSections: NodeListOf<HTMLElement> = this.getAllSections();
      const activeSectionThreshold: number = this.viewportHeight * activeSectionThresholdPercentage

      allSections.forEach((section: HTMLElement) => {
        const sectionHeight: number = section.offsetHeight;
        const threshold = Math.min(activeSectionThreshold / sectionHeight, activeSectionThresholdPercentage);

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && section.dataset.sectionName) {
              this.currentSection = section.dataset.sectionName;
            }
          },
          {
            threshold: threshold,
          }
        );

        observer.observe(section);
      });
    },

    /**
     * Returns an array of all sections to be shown in the menu.
     * 
     * @returns {string[]} - An array of all items to be shown in the menu
     */
    getMenuItems(): string[] {
      const allSections: NodeListOf<HTMLElement> = this.getAllSections();
      const menuItems: string[] = [];

      allSections.forEach((section: HTMLElement) => {
        if (section.dataset.sectionName) {
          menuItems.push(section.dataset.sectionName);
        }
      });

      return menuItems;
    }
  },

  mounted() {
    this.getCurrentSection();
    window.addEventListener("resize", this.updateThresholdOnViewportHeightChange);
  },

  unmounted() {
    window.removeEventListener("resize", this.updateThresholdOnViewportHeightChange);
  }
});
</script>

<style scoped>
.section {
  min-height: calc(100vh - 115px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.section-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-body:not(#intro-section>*, #projects-section>*) {
  padding: 5em 2.5% 3em 2.5%;
}

#projects-section .section-body {
  padding: 2em 0% 2em 0%;
}

#intro-section {
  height: 100vh;
}

#site-header-container {
  position: sticky;
  top: 5px;
  width: 100%;
  height: 100px;
  z-index: 999;
}
</style>