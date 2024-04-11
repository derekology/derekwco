<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ScrollToSectionMixin',

    methods: {
        /**
         * Scroll to the desired section if it's not the current section.
         * 
         * @param {string} desiredSection - The section to scroll to
         * @param {string} currentSection - The current section
         * @param {number} offset - The offset from the top of the desired section to scroll to
         */
        scrollToSection(desiredSection: string, currentSection: string, offset: number): void {
            const desiredElement: HTMLElement | null = document.querySelector(`#${desiredSection.toLowerCase()}-section`)

            if (desiredElement && desiredElement.dataset.sectionName !== currentSection) {
                const elementLocation = desiredElement?.getBoundingClientRect().top + window.scrollY + offset;

                window.scrollTo({
                    top: elementLocation,
                    behavior: 'smooth',
                });
            }
        },
    },
});
</script>