<template>
    <div id="site-nav" v-on:mouseover="showMenu = true" v-on:mouseleave="showMenu = false">
        <div id="nav-current-section" v-show="!showMenu" class="hover-hand">
            <span id="nav-current-text">{{ currentSection }}</span>
        </div>
        <Transition>
            <div id="nav-menu" v-show="showMenu" class="hover-hand">
                <ul>
                    <li v-for="section in inactiveSections" :key="section" class="nav-item">
                        <a v-on:click="scrollToSection(section)" :id="section">{{ section }}</a>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SiteNav',
    props: {
        currentSection: {
            type: String,
            required: false,
            default: 'Home',
        },

        allSections: {
            type: Array<string>,
            required: false,
            default: () => ['Home'],
        },
    },

    data() {
        return {
            showMenu: false,
        };
    },

    computed: {
        inactiveSections: function (): Array<string> {
            /**
             * Return an array of all sections except the current section.
             */
            var modifiedSections = this.allSections.filter((section: string) => section !== this.currentSection);
            modifiedSections.unshift(this.currentSection)

            return modifiedSections;
        }
    },

    methods: {
        clearPastActive(): void {
            /**
             * Remove the active class from the previous section and menu item.
             */
            const pastActive: NodeListOf<HTMLElement> = document.querySelectorAll('.active');
            const pastActiveItem: NodeListOf<HTMLElement> = document.querySelectorAll('.active-menu-item');

            pastActive.forEach((item: HTMLElement) => {
                item.classList.remove('active');
            });

            pastActiveItem.forEach((item: HTMLElement) => {
                item.classList.remove('active-menu-item');
            });
        },

        markCurrentActive(): void {
            /**
             * Add the active class to the current section and menu item.
             */
            const activeItem: HTMLElement | null = document.querySelector(`#${this.currentSection}`);
            const activeMenuItem: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-item');

            if (activeItem) {
                activeItem.classList.add('active');
            }

            if (activeMenuItem[0]) {
                activeMenuItem[0].classList.add('active-menu-item');
            }
        },

        manageActiveClass(): void {
            /**
             * Remove the active class from the previous section and add it to the current section.
             */
            this.clearPastActive();
            this.markCurrentActive();
        },

        scrollToSection(desiredSection: string): void {
            /**
             * Scroll to the clicked section if it's not the current section.
             * 
             * @param {string} desiredSection - The section to scroll to
             */
            const desiredElement: HTMLElement | null = document.querySelector(`#${desiredSection.toLowerCase()}-section`)

            if (desiredElement && desiredElement.dataset.sectionName !== this.currentSection) {
                const elementLocation = desiredElement?.getBoundingClientRect().top + window.pageYOffset - 110;

                window.scrollTo({
                    top: elementLocation,
                    behavior: 'smooth',
                });
            }
        },
    },

    updated() {
        this.manageActiveClass()
    },
});
</script>

<style scoped>
#nav-current-section,
#nav-menu {
    color: var(--color-text);
    font-size: 2rem;
    padding: 5px;
    width: 200px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
}

#nav-current-section {
    background: var(--color-border);
    border-radius: 10px;
}

#nav-current-section:hover {
    background-color: var(--color-border-hover);
    transition: background-color 0.2s ease-in-out;
}

#nav-current-text,
#nav-menu a.active {
    color: var(--color-heading);
    font-weight: 800;
}

#nav-menu {
    display: block;
    position: fixed;
    top: 29px;
    left: 25px;
    background: var(--color-border-hover);
    border-radius: 10px;
}

#nav-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#nav-menu li {
    padding-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
}

#nav-menu a {
    text-decoration: none !important;
    color: var(--color-text);
}

#nav-menu a:hover:not(.active) {
    color: var(--color-hover);
    transition: color 0.2s ease-in-out;
}

#nav-menu .active-menu-item {
    padding-bottom: 5px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--color-border-hover);
    cursor: default;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>