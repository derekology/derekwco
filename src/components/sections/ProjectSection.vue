<template>
    <div id="project-list">
        <div class="project" v-for="project in projects" :key="project.name"
            v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + project.image + ')' }">
            <div class="project-info">
                <div class="project-name section-header">
                    <h2>{{ project.name }}</h2>
                </div>
                <div class="project-details">
                    <p>{{ project.description }}</p>
                    <div class="project-technologies">
                        <span class="project-technology" v-for="technology in project.technologies" :key="technology">{{
                            technology }}</span>
                    </div>
                    <a :href="project.link" target="_blank">View Project</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectSection',

    data() {
        return {
            projects: [
                {
                    name: 'Outfit Picker',
                    image: '/public/assets/projects/outfit-picker/1.png',
                    description: 'Weather-aware outfit picker',
                    technologies: ['Vue.js', 'GraphQL', 'Express.js'],
                    link: 'https://outfitpicker.wooprojects.com/'
                },
                {
                    name: 'Pass The Class',
                    image: '/public/assets/projects/pass-the-class/1.png',
                    description: 'CLI-based dungeon game',
                    technologies: ['Python'],
                    link: 'https://github.com/derekology/Pass-The-Class-CLI-Game/'
                },
                {
                    name: 'read',
                    image: '/public/assets/projects/read/1.png',
                    description: 'Blog',
                    technologies: ['Wordpress', 'WPBakery Builder'],
                    link: 'https://derekw.co/'
                },
                {
                    name: 'myMKTO',
                    image: '/public/assets/projects/mymkto/1.png',
                    description: 'Marketo Quick Answers',
                    technologies: ['Wordpress'],
                    link: 'https://mymkto.com/'
                },
            ]
        }
    },
});
</script>

<style scoped>
#project-list {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.project {
    height: 33.33vh;
    min-height: 280px;
    max-height: 450px;
    display: flex;
    justify-content: center;
    background-position: center;
    background-size: cover;
    transition: all 0.2s ease-in-out;
    filter: grayscale(100%);
    color: var(--vt-c-text-dark-3);
}

.project:hover {
    filter: none;
}

.project-info {
    padding: 45px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.project-name {
    font-family: 'Lato Bold', sans-serif;
    font-size: 5vw;
    transition: all 0.2s ease-in-out;
}

.project:hover .project-name {
    transition: all 0.2s ease-in-out;
}

.project-details {
    opacity: 0;
    height: 0px;
    transition: all 0.2s ease-in-out;
}

.project:hover .project-details {
    opacity: 1;
    height: 55%;
    transition: all 0.2s ease-in-out;
}

.project-details a {
    color: var(--vt-c-text-dark-3);
}

.project-details a:hover {
    color: var(--vt-c-text-dark-1);
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.project-technology {
    font-size: smaller;
    line-height: 1.5em;
    padding: 0 10px;
    margin: 10px;
    border-radius: 40px;
    border: solid 1px var(--vt-c-text-dark-3);
}
</style>