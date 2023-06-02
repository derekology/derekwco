<template>
    <div id="site-header">
        <div id="site-logo">
            <a v-on:click="returnToTop();" class="hover-hand">
                <StackedLogo />
            </a>
        </div>
        <SiteNav :currentSection="currentSection" :allSections="allSections" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StackedLogo from '@/components/partials/LogoStacked.vue';
import SiteNav from '@/components/partials/SiteNav.vue';

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

    components: {
        StackedLogo,
        SiteNav,
    },

    methods: {
        returnToTop(): void {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
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
    padding: 10px 25px;
}

#site-logo {
    width: 125px;
}
</style>