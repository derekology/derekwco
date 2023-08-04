<template>
    <div id="site-header">
        <div id="site-logo">
            <a v-on:click="scrollToTop();" id="logo-icon" class="hover-hand">
                <AbbrevLogo />
            </a>
        </div>
        <span id="site-nav">
            <SiteNav :currentSection="currentSection" :allSections="allSections" />
            <span id="colour-scheme-toggle">
                <a v-if="darkModeEnabled" v-on:click="changeDarkModeEnabled();" class="hover-hand">
                    <LightModeIcon />
                </a>
                <a v-else v-on:click="changeDarkModeEnabled();" class="hover-hand">
                    <DarkModeIcon />
                </a>
            </span>
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
        scrollToTop(): void {
            /**
             * Scroll to the top section.
             */
            ScrollToSectionMixin.methods?.scrollToSection('intro', this.currentSection, -120); // Call the global Mixin to scroll to top section
        },

        changeDarkModeEnabled(): void {
            /**
             * Change the dark mode enabled state.
             */
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
}

#site-logo a {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#site-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
}

#site-nav #colour-scheme-toggle {
    margin: 10px 20px 0 20px;
}

#site-nav #colour-scheme-toggle svg {
    transform: scale(0.8);
}

#site-logo #logo-icon {
    width: 70px;
    margin-right: 5px;
    padding-bottom: 0px;
}
</style>