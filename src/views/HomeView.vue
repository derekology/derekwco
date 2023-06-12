<template>
  <main>
    <div id="site-header-container" v-show="currentSection !== 'Intro'">
      <animated-component animationType="fade">
        <SiteHeader :currentSection="currentSection" :allSections="allSections" />
      </animated-component>
    </div>
    <div id="intro-section" class="section" data-section-name="Intro" ref="intro">
      <div class="section-body">
        <IntroSection />
      </div>
    </div>
    <div id="projects-section" class="section" data-section-name="Projects" ref="projects">
      <div class="section-body">
        <ProjectSection />
      </div>
    </div>
    <div id="skills-section" class="section" data-section-name="Skills" ref="skills">
      <div class="section-body">
        <SkillSection />
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
import ProjectSection from '@/components/sections/ProjectSection.vue';
import SkillSection from '@/components/sections/SkillSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SiteHeader,
    AnimatedComponent,
    IntroSection,
    ProjectSection,
    SkillSection,
    AboutSection,
  },

  data() {
    return {
      currentSection: 'Intro',
      viewportHeight: screen.height,
    };
  },

  computed: {
    allSections(): string[] {
      /**
       * Return an array of all sections to be shown in the menu.
       * 
       * @returns {string[]} - An array of all items to be shown in the menu
       */
      return this.getMenuItems();
    }
  },

  methods: {
    getAllSections(): NodeListOf<HTMLElement> {
      /**
       * Return a list of all sections on the page.
       * 
       * @returns {NodeListOf<HTMLElement>} - A list of all sections
       */
      return document.querySelectorAll('.section');
    },

    checkForViewportHeightChange(): boolean {
      /**
       * Check if the viewport height has changed.
       * 
       * @returns {boolean} - True if the screen height has changed, false otherwise
       */
      return this.viewportHeight !== window.innerHeight;
    },

    updateThresholdOnViewportHeightChange(): void {
      /**
       * Update the threshold for the IntersectionObserver if the screen height has changed.
       */
      if (this.checkForViewportHeightChange()) {
        this.viewportHeight = window.innerHeight;
        this.getCurrentSection();
      }
    },

    getCurrentSection(): void {
      /**
       * Set the current section based on the section that is in view.
       */
      const allSections: NodeListOf<HTMLElement> = this.getAllSections();

      allSections.forEach((section: HTMLElement) => {
        const threshold = screen.height < 768 ? 0.4 : 0.6;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && section.dataset.sectionName) {
              this.currentSection = section.dataset.sectionName;
            }
          },
          {
            threshold: threshold,
          });

        observer.observe(section);
      });
    },

    getMenuItems(): string[] {
      /**
       * Return an array of all sections to be shown in the menu.
       * 
       * @returns {string[]} - An array of all items to be shown in the menu
       */
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