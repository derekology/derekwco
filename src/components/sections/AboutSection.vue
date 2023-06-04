<template>
    <div id="about-header">
        <div id="display-picture">
            <ProfilePicture />
        </div>
    </div>
    <div id="about-body">
        <div id="about-text">
            <p>
                I'm Derek, a Computer Systems Technology student at the British Columbia Institute
                of Technology (BCIT) with a passion for using technology to solve real-world problems. Prior to my tech
                journey, I had a background in business administration and marketing
                automation working with companies such as <a href="https://www.ceridian.com/" target="_blank">Ceridian</a>,
                <a href="https://www.rockymountaineer.com/" target="_blank">Rocky Mountaineer</a>, and <a
                    href="https://www.spud.ca/" target="_blank">Spud</a>.
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