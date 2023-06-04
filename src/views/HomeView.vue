<template>
  <main>
    <div id="site-header-container" v-show="currentSection !== 'Intro'">
      <animated-component animationType="fade">
        <SiteHeader :currentSection="currentSection" :allSections="allSections" />
      </animated-component>
    </div>
    <div id="intro-section" class="section" data-section-name="Intro" ref="intro">
      <IntroSection />
    </div>
    <div id="projects-section" class="section" data-section-name="Projects" ref="projects">
      <ProjectSection />
    </div>
    <div id="skills-section" class="section" data-section-name="Skills" ref="skills">
      <SkillSection />
    </div>
    <div id="about-section" class="section" data-section-name="About" ref="about">
      <AboutSection />
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
    };
  },

  computed: {
    allSections(): string[] {
      /**
       * Return an array of all sections to be shown in the menu.
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

    getCurrentSection(): void {
      /**
       * Set the current section based on the section that is in view.
       */
      const allSections: NodeListOf<HTMLElement> = this.getAllSections();

      allSections.forEach((section: HTMLElement) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && section.dataset.sectionName) {
              this.currentSection = section.dataset.sectionName;
            }
          },
          {
            threshold: 0.33,
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
  },
});
</script>

<style scoped>
.section {
  margin-top: 110px;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

#intro-section {
  margin-top: 0px;
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