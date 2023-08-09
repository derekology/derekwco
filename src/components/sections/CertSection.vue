<template>
    <div id="certs-list">
        <div class="certification-tile" v-for="certification in certifications" :key="certification.id">
            <div class="certification-header">
                <div class="details">
                    <div class="title">{{ certification.title }}</div>
                    <div class="issuingOrganization">{{ certification.issuingOrganization }}</div>
                </div>
                <div class="badge">
                    <img :id=certification.id class="image" :src=certification.image :alt=certification.imageAlt
                        :title=certification.imageTitle draggable="false" />
                </div>
            </div>
            <div class="description">{{ certification.description }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CertsSection',

    data() {
        return {
            certifications: [
                {
                    id: 'cert-adobe-mce',
                    title: 'Marketo Engage Expert',
                    issuingOrganization: 'Adobe',
                    description:
                        'Certified in strategizing, executing, and analyzing data-driven marketing campaigns using Marketo\'s robust automation tools.',
                    image: '/assets/cert-adobe-mce.png',
                    imageAlt: 'Adobe Marketo Engage Expert Certification Badge',
                    imageTitle: 'Adobe Marketo Engage Expert Certification',
                },
                {
                    id: 'cert-salesforce-mca',
                    title: 'Marketing Cloud Administrator',
                    issuingOrganization: 'Salesforce',
                    description: 'Certified in administrating Salesforce Marketing Cloud through building campaigns, optimizing journeys, and managing data.',
                    image: '/assets/cert-salesforce-mca.png',
                    imageAlt: 'Salesforce Marketing Cloud Administrator Certification Badge',
                    imageTitle: 'Salesforce Marketing Cloud Administrator Certification',
                },
            ]
        };
    },
});
</script>

<style scoped>
#certs-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    padding: 3em 0;
}

p {
    margin-bottom: 3em;
    font-size: 1.5rem;
    line-height: 1.75em;
}

img {
    height: 70px;
    margin-left: 20px;
}

.certification-tile {
    background-color: var(--color-border);
    margin: 10px;
    padding: 20px 25px;
    border-radius: 10px;
}

.certification-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
}

.title {
    font-size: 1.5rem;
    font-weight: bold;
}

.issuingOrganization {
    font-size: 1.1rem;
    font-style: italic;
    padding-bottom: 1em;
}

.badge {
    display: flex;
    justify-content: end;
    align-items: center;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
}

@media (min-width: 768px) {
    .certification-tile {
        max-width: 30%;
    }

    .certification-header {
        min-height: 125px;
    }
}
</style>