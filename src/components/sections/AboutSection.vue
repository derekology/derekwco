<template>
    <div id="about-header">
        <div id="display-picture">
            <ProfilePicture />
        </div>
    </div>
    <div id="about-body">
        <div id="about-text">
            <p>
                I'm Derek, an experienced professional from Vancouver, Canada with a passion for using technology to
                solve real-world problems.
            </p>
            <p>
                After completing my Bachelor of Business Administration at Simon Fraser University, I spent years
                crafting intricate marketing programs for hospitality, e-commerce, retail, and SaaS organizations. Along the
                way, I discovered a passion for the technical facets of my work and a knack for creative problem-solving.
            </p>
            <p>
                My curiosity led me to self-learn programming on platforms like Codecademy and Udacity, followed by a
                part-time course at Lighthouse Labs. Fuelled by a desire for mastery, I finally took the leap of
                immersing myself in the rigorous Computer Systems Technology program at the British Columbia Institute of
                Technology.
            </p>
            <p>
                If you'd like to chat over coffee—virtually or in real life—feel free to reach out on <a
                    href="https://www.linkedin.com/in/derekology/">LinkedIn</a> or by <a href="mailto:me@derekw.co"
                    target="_blank">email</a>.
            </p>
            <div id="about-certifications">
                <ProfileCertifications />
            </div>
        </div>
        <div id="about-social-buttons">
            <SocialButtons />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialButtons from '@/components/partials/ButtonSocial.vue';
import ProfilePicture from '@/components/partials/ProfilePicture.vue';
import ProfileCertifications from '@/components/partials/ProfileCertifications.vue';

export default defineComponent({
    name: 'AboutSection',

    components: {
        SocialButtons,
        ProfilePicture,
        ProfileCertifications,
    },
});
</script>

<style scoped>
#display-picture {
    display: flex;
}

#display-picture img {
    border-radius: 50%;
    border: 2px solid var(--color-hover);
    height: 125px;
    width: 125px;
    margin: 0 auto;
    display: block;
    z-index: 9;
}

#about-body {
    margin-top: -45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
}

#about-text {
    background-color: var(--color-border);
    border-radius: 20px;
    max-width: 90%;
    padding: 75px 5% 35px;
}

#about-text p {
    margin-bottom: 25px;
    text-align: center;
}

#about-certifications {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

#about-social-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}
</style>