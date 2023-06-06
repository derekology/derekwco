<template>
    <div id="project-list">
        <div class="project" v-for="project in projects" :key="project.name"
            v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + project.image + ')' }">
            <div class="project-info">
                <div class="project-name section-header">
                    <h2>{{ project.name }}</h2>
                </div>
                <div class="project-details">
                    <div class="project-details-name section-header">
                        <h2>{{ project.name }}</h2>
                    </div>
                    <p>{{ project.description }}</p>
                    <div class="project-technologies">
                        <span class="project-technology" v-for="technology in project.technologies" :key="technology">{{
                            technology }}</span>
                    </div>
                    <div class="project-link"><a :href="project.link" target="_blank">View Project</a></div>
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
                    image: '/assets/projects/outfit-picker/1.png',
                    description: 'Weather-aware outfit picker',
                    technologies: ['Vue.js', 'GraphQL', 'Express.js'],
                    link: 'https://outfitpicker.wooprojects.com/'
                },
                {
                    name: 'Pass The Class',
                    image: '/assets/projects/pass-the-class/1.png',
                    description: 'CLI-based dungeon game',
                    technologies: ['Python'],
                    link: 'https://github.com/derekology/Pass-The-Class-CLI-Game/'
                },
                {
                    name: '::musings',
                    image: '/assets/projects/musings/1.png',
                    description: 'Front end for blog content',
                    technologies: ['Vue.js', 'Wordpress', 'REST API'],
                    link: 'https://musings.wooprojects.com/'
                },
                {
                    name: 'myMKTO',
                    image: '/assets/projects/mymkto/1.png',
                    description: 'Marketo Quick Reference Guide',
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
    flex-wrap: wrap;
    justify-content: center;
}

.project {
    height: 33.33vh;
    min-height: 280px;
    display: flex;
    width: 100%;
    justify-content: center;
    background-position: center;
    background-size: cover;
    transition: all 0.2s ease-in-out;
    filter: grayscale(100%);
    color: var(--vt-c-text-dark-3);
}

@media (min-width:768px) {
    .project {
        width: 50%;
    }
}

.project:hover {
    filter: none;
}

.project-info {
    padding: 45px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.project-name,
.project-details-name {
    font-family: 'Lato Bold', sans-serif;
    font-size: 32px;
    transition: all 0.2s ease-in-out;
}

.project:hover .project-name {
    display: none;
    transition: all 0.2s ease-in-out;
}

.project-details * {
    opacity: 0;
    height: 0px;
}

.project-details .project-link {
    display: block;
    width: auto;
    color: var(--vt-c-text-dark-3);
}

.project-details .project-link:hover {
    color: var(--vt-c-text-dark-1);
}

.project:hover .project-details * {
    opacity: 1;
    height: auto;
    transition: all 0.2s ease-in-out;
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