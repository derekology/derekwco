<template>
    <div id="skills-list">
        <span class="section-header">Development</span>
        <p>
            Python, Java, C, HTML/CSS/JS/TS, EJS, Node.js, Express, Bootstrap, Vue, React, Google Firebase
        </p>
        <span class="section-header">Automation / Scripting</span>
        <p>
            JavaScript, Bash, Groovy, Selenium, Twill, AMPScript, SSJS, Velocity
        </p>
        <span class="section-header">Databases</span>
        <p>
            SQL, Microsoft SQL Server, PostgreSQL, GraphQL, NoSQL, MongoDB, Google Firestore, Supabase
        </p>
        <span class="section-header">DevOps</span>
        <p>
            Git, Github, BitBucket, SourceTree, Jenkins, Ansible
        </p>
        <span class="section-header">Software / Platforms</span>
        <p>
            Wordpress, Linux, Windows, Adobe Marketo Engage, Salesforce Marketing / Sales Cloud,
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