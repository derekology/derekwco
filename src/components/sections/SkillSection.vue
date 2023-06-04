<template>
    <div id="skills-list">
        <span class="section-header">Development</span>
        <p>
            HTML/CSS/JS/TS, EJS, Node.js, Express, Bootstrap, Vue, Google Firebase, Python
        </p>
        <span class="section-header">Automation / Scripting</span>
        <p>
            Python, Javascript, Selenium, Twill, Bash, AMPScript, SSJS, Velocity
        </p>
        <span class="section-header">Databases</span>
        <p>
            SQL, GraphQL, PostgreSQL, NoSQL, Google Firestore, MongoDB
        </p>
        <span class="section-header">Platforms</span>
        <p>
            Adobe Marketo Engage, Salesforce Marketing / Sales Cloud, MailChimp, MailerLite, Wix, Wordpress,
            Manjaro, Arch, Ubuntu, Windows
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SkillSection',
});
</script>

<style scoped>
#skills-list {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
}

p {
    margin-bottom: 3em;
    font-size: 1.5rem;
    line-height: 1.75em;
}
</style>