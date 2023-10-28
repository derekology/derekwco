<template>
    <div id="project-list">
        <div class="project" v-for="project in projects" :key="project.name"
            v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + project.image + ')' }">
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
                    <div v-show="project.link" class="project-link"><a :href="project.link" target="_blank">View Project</a>
                    </div>
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
                    description: 'OpenAI-powered weather-aware outfit picker using the MERN stack. Rewrite of an older project that used Vue.js, GraphQL, and Postgres, focusing on organization and documentation.',
                    technologies: ['OpenAI', 'MongoDB', 'Express.js', 'React', 'Node.js'],
                    link: 'https://outfitpicker.wooprojects.com/?utm_source=derekwco&utm_medium=portfolio'
                },
                {
                    name: 'Pass The Class',
                    image: '/assets/projects/pass-the-class/1.png',
                    description: 'CLI-based dungeon game themed as a college course. Created for a programming class, the focus was on organization, decomposition, documentation, and testing.',
                    technologies: ['Python'],
                    link: 'https://github.com/derekology/Pass-The-Class-CLI-Game/'
                },
                {
                    name: '> cmdpedia',
                    image: '/assets/projects/cmdpedia/1.png',
                    description: 'Quick reference guide for command syntaxes. Created to better understand stores and data structures, as well as to become more familiar with the command line.',
                    technologies: ['Vue.js', 'Pinia', 'Postgres', 'Supabase'],
                    link: 'https://cmdpedia.wooprojects.com/?utm_source=derekwco&utm_medium=portfolio'
                },
                {
                    name: '::musings',
                    image: '/assets/projects/musings/1.png',
                    description: 'Front end for the content hosted on my Wordpress blog. I wanted to fine-tune the experience, as well as speed up load times.',
                    technologies: ['Vue.js', 'Bootstrap', 'Wordpress', 'REST API'],
                    link: 'https://musings.wooprojects.com/?utm_source=derekwco&utm_medium=portfolio'
                },
                {
                    name: 'TableTrek',
                    image: '/assets/projects/tabletrek/1.png',
                    description: 'MVP for an OpenAI-powered Michelin restaurant recommendation app. Working in a team of four, I built the map, details, itinerary, and easter egg features.',
                    technologies: ['EJS', 'OpenAI', 'Leaflet.js', 'MongoDB', 'Node.js', 'Express.js'],
                    link: 'https://tabletrek.cyclic.app/?utm_source=derekwco&utm_medium=portfolio'
                },
                {
                    name: 'myMKTO',
                    image: '/assets/projects/mymkto/1.png',
                    description: 'Wordpress-based quick reference for Marketo created as a resource for coworkers. I wanted a simple, self-serve guide for frequently asked questions.',
                    technologies: ['Wordpress', 'WPBakery'],
                    link: 'https://mymkto.com/?utm_source=derekwco&utm_medium=portfolio'
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
    height: 50vh;
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
    padding: 45px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
}

.project-name,
.project-details-name {
    font-family: 'Lato Bold', sans-serif;
    font-size: 30px;
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
    padding-top: 1em;
    display: block;
    width: auto;
}

.project-details .project-link a {
    color: var(--vt-c-text-dark-3) !important;
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