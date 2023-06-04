<template>
    <a href="https://github.com/derekology/" target="_blank" class="social-icon">
        <GithubIcon />
    </a>
    <a href="https://linkedin.com/in/derekology/" target="_blank" class="social-icon">
        <LinkedinIcon />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GithubIcon from '@/components/partials/IconGithub.vue'
import LinkedinIcon from '@/components/partials/IconLinkedin.vue'

export default defineComponent({
    name: 'SocialButtons',

    components: {
        LinkedinIcon,
        GithubIcon,
    },
});
</script>

<style scoped>
.social-icon {
    color: var(--color-text);
    margin: 10px 20px;
    transform: scale(1.5)
}

.social-icon:hover {
    color: var(--color-hover);
    transition: color 0.2s ease-in-out;
}
</style>