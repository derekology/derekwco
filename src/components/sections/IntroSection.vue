<template>
    <div id="social-buttons">
        <SocialButtons />
    </div>
    <div id="info">
        <div id="intro-logo">
            <HorizontalLogo />
        </div>
        <div id="intro-tagline">Computer Systems Technology student at the British Columbia Institute of Technology</div>
    </div>
    <div id="down-arrow" class="animate-bounce hover-hand" v-on:click="scrollToNextSection()">
        <DownArrowIcon />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialButtons from '@/components/partials/SocialButtons.vue';
import DownArrowIcon from '@/components/partials/IconDownArrow.vue';
import HorizontalLogo from '@/components/partials/LogoHorizontal.vue';
import ScrollToSectionMixin from '@/assets/mixins/ScrollToSectionMixin.vue';

export default defineComponent({
    name: 'IntroSection',

    components: {
        SocialButtons,
        DownArrowIcon,
        HorizontalLogo,
    },

    mixins: [
        ScrollToSectionMixin,
    ],

    methods: {
        scrollToNextSection(): void {
            ScrollToSectionMixin.methods?.scrollToSection("projects", "intro", 0); // Call the global Mixin to scroll to the next section
        },
    }
});
</script>

<style scoped>
#intro-section>* {
    flex-grow: 1;
}


#social-buttons {
    display: flex;
    margin-top: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}

#info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 6em;
    width: 80%;
    flex-grow: 3;
}

#intro-logo {
    position: sticky;
    width: 80%;
    max-width: 250px;
    min-width: 60px;
    margin-bottom: 10px;
}

#intro-tagline {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1rem;
}

#down-arrow {
    text-align: center;
    font-size: small;
    font-style: italic;
}

#down-arrow svg {
    margin-top: 1em;
}
</style>