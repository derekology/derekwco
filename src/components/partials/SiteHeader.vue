<template>
    <div id="site-header">
        <div id="site-logo">
            <span id="colour-scheme-toggle">
                <a v-if="darkModeEnabled" v-on:click="changeDarkModeEnabled();" class="hover-hand">
                    <LightModeIcon />
                </a>
                <a v-else v-on:click="changeDarkModeEnabled();" class="hover-hand">
                    <DarkModeIcon />
                </a>
            </span>
            <a v-on:click="scrollToTop();" id="logo-icon" class="hover-hand">
                <AbbrevLogo />
            </a>
        </div>
        <span id="site-nav">
            <SiteNav :currentSection="currentSection" :allSections="allSections" />
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AbbrevLogo from '@/components/partials/LogoAbbrev.vue';
import DarkModeIcon from '@/components/partials/DarkModeIcon.vue';
import LightModeIcon from '@/components/partials/LightModeIcon.vue';
import SiteNav from '@/components/partials/SiteNav.vue';
import ScrollToSectionMixin from '@/assets/mixins/ScrollToSectionMixin.vue';

export default defineComponent({
    name: 'SiteHeader',

    props: {
        currentSection: {
            type: String,
            required: false,
            default: 'Intro',
        },
        allSections: {
            type: Array<string>,
            required: false,
            default: () => ['Intro'],
        },
        darkModeEnabled: {
            type: Boolean,
            required: true,
        },
    },

    mixins: [
        ScrollToSectionMixin,
    ],

    components: {
        AbbrevLogo,
        DarkModeIcon,
        LightModeIcon,
        SiteNav,
    },

    methods: {
        /**
         * Scrolls to the top section.
         */
        scrollToTop(): void {
            ScrollToSectionMixin.methods?.scrollToSection('intro', this.currentSection, -120); // Call the global Mixin to scroll to top section
        },

        /**
         * Changes the dark mode enabled state.
         */
        changeDarkModeEnabled(): void {
            this.$emit('passDarkModeEnabled');
        },
    }
});
</script>

<style scoped>
#site-header {
    background-color: var(--color-background-soft);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 23px 25px;
    transition: color 0.5s, background-color 0.5s;
}

#site-logo a {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#site-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
}

#colour-scheme-toggle {
    margin: 5px 20px 0 30px;
}

#colour-scheme-toggle svg {
    transform: scale(0.8);
}

#site-logo #logo-icon {
    width: 70px;
    padding-bottom: 0px;
}
</style>