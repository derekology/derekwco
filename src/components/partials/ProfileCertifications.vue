<template>
    <img id="cert-adobe-mce" src="/assets/cert-adobe-mce.png" alt="Adobe Marketo Engage Expert Certification Badge"
        title="Adobe Marketo Engage Expert Certification" draggable="false" style="background-color: #FFFFFF;" />
    <img id="cert-salesforce-mca" src="/assets/cert-salesforce-mca.png"
        alt="Salesforce Marketing Cloud Administrator Certification Badge"
        title="Salesforce Marketing Cloud Administrator Certification" draggable="false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProfileCertifications',
});
</script>

<style scoped>
img {
    height: 75px;
    margin: 15px 25px;
}

#cert-adobe-mce {
    background-color: rgba(255, 255, 255, 0.4);
}
</style>