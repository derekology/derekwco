<template>
    <div id="site-header">
        <div id="site-logo">
            <a v-on:click="scrollToTop();" class="hover-hand">
                <AbbrevLogo />
            </a>
        </div>
        <SiteNav :currentSection="currentSection" :allSections="allSections" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AbbrevLogo from '@/components/partials/LogoAbbrev.vue';
import SiteNav from '@/components/partials/SiteNav.vue';
import ScrollToSectionMixin from '@/assets/mixins/ScrollToSectionMixin.vue';

export default defineComponent({
    name: 'SiteHeader',

    props: {
        currentSection: {
            type: String,
            required: false,
            default: 'Home',
        },
        allSections: {
            type: Array<string>,
            required: false,
            default: () => ['Home'],
        }
    },

    mixins: [
        ScrollToSectionMixin,
    ],

    components: {
        AbbrevLogo,
        SiteNav,
    },

    methods: {
        scrollToTop(): void {
            /**
             * Scroll to the top section.
             */
            ScrollToSectionMixin.methods?.scrollToSection("intro", this.currentSection, -110); // Call the global Mixin to scroll to top section
        },
    }
});
</script>

<style scoped>
#site-header {
    background-color: var(--color-background-soft);
    z-index: 999;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 23px 25px;
}

#site-logo {
    width: 75px;
}
</style>