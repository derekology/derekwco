<template>
    <div id="social-buttons">
        <SocialButtons />
    </div>
    <div id="info">
        <div id="intro-logo">
            <HorizontalLogo />
        </div>
        <div id="intro-tagline"><em>crafting software solutions that drive business results</em></div>
    </div>
    <div id="down-arrow" class="animate-bounce hover-hand" v-on:click="scrollToNextSection()">
        <DownArrowIcon />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialButtons from '@/components/partials/ButtonSocial.vue';
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
        /**
         * Animates the logo in the intro section.
         */
        animateLogo(): void {
            const logo = document.getElementById('intro-logo');
            if (logo) {
                logo.animate([
                    { opacity: 0, transform: 'translateY(50px)' },
                    { opacity: 0, transform: 'translateY(50px)' },
                    { opacity: 0, transform: 'translateY(50px)' },
                    { opacity: 0, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 1, transform: 'translateY(0px)' },
                ],
                    {
                        duration: 3000,
                        easing: 'ease-in-out',
                        fill: 'forwards',
                        delay: 500,
                    });
            }
        },

        /**
         * Animates the other elements in the intro section.
         */
        animateOtherElements(): void {
            const tagline = document.getElementById('intro-tagline');
            const socialButtons = document.getElementById('social-buttons');
            const downArrow = document.getElementById('down-arrow');

            if (tagline && socialButtons && downArrow) {
                tagline.animate([
                    { opacity: 0 },
                    { opacity: 1 },
                ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                    delay: 3000,
                });
                socialButtons.animate([
                    { opacity: 0 },
                    { opacity: 1 },
                ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                    delay: 3000,
                });
                downArrow.animate([
                    { opacity: 0 },
                    { opacity: 1 },
                ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                    delay: 3000,
                });
            }
        },

        /**
         * Animates the intro section.
         */
        animateIntro(): void {
            this.animateLogo();
            this.animateOtherElements();
        },

        /**
         * Scrolls to the next section.
         */
        scrollToNextSection(): void {
            ScrollToSectionMixin.methods?.scrollToSection('projects', 'intro', 48); // Call the global Mixin to scroll to the next section
        },
    },

    mounted() {
        this.animateIntro();
    },
});
</script>

<style scoped>
#intro-section>* {
    flex-grow: 1;
}

#social-buttons,
#intro-tagline,
#down-arrow {
    opacity: 0;
}

#social-buttons {
    display: flex;
    margin-right: 20px;
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
    width: 80%;
    flex-grow: 1;
}

#intro-logo {
    position: sticky;
    width: 80%;
    max-width: 250px;
    min-width: 60px;
    margin-bottom: 10px;
    opacity: 0;
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
    padding-bottom: 10em;
}

#down-arrow svg {
    margin-top: 1em;
}
</style>