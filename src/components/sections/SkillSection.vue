<template>
    <div id="skills-list">
        <span class="section-header">Development</span>
        <p>
            Python, Java, C, HTML/CSS/JS/TS, EJS, Node.js, Express, Bootstrap, Vue, React, Google Firebase
        </p>
        <span class="section-header">Automation / Scripting</span>
        <p>
            Python, JavaScript, Selenium, Twill, Bash, AMPScript, SSJS, Velocity
        </p>
        <span class="section-header">Databases</span>
        <p>
            SQL, Microsoft SQL Server, GraphQL, PostgreSQL, NoSQL, MongoDB, Google Firestore, Supabase
        </p>
        <span class="section-header">Software / Platforms</span>
        <p>
            Git, Github, SourceTree, Wordpress, Linux, Windows, Adobe Marketo Engage, Salesforce Marketing / Sales Cloud,
            MailChimp, MailerLite
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
}

p {
    margin-bottom: 3em;
    font-size: 1.5rem;
    line-height: 1.75em;
}
</style>