<template>
    <div id="mobile-nav">
        <div id="nav-current-section" v-show="!showMenu" class="hover-hand" v-on:mouseover="showMenu = true">
            <span id="nav-current-text">{{ currentSection }}</span>
        </div>
        <Transition>
            <div v-show="showMenu" class="hover-hand nav-menu" v-on:mouseleave="showMenu = false">
                <ul>
                    <li v-for="section in inactiveSections" :key="section" class="nav-item">
                        <a v-on:click="scrollToSection(section)" :id="section">{{ section }}</a>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
    <div id="desktop-nav">
        <div class="nav-menu">
            <span v-for="section in allSections" :key="section" class="hover-hand nav-item">
                <a v-on:click="scrollToSection(section)" :id="section">{{ section }}</a>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollToSectionMixin from '@/assets/mixins/ScrollToSectionMixin.vue';

export default defineComponent({
    name: 'SiteNav',

    props: {
        currentSection: {
            type: String,
            required: false,
            default: 'Intro',
        },

        allSections: {
            type: Array<string>,
            required: false,
            default: () => ['Intro'],
        },
    },

    mixins: [
        ScrollToSectionMixin,
    ],

    data() {
        return {
            showMenu: false,
        };
    },

    computed: {
        inactiveSections: function (): Array<string> {
            /**
             * Return an array of all sections except the current section.
             * 
             * @returns {Array<string>} - An array of all sections except the current section
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
            const activeItem: NodeListOf<HTMLElement> = document.querySelectorAll(`#${this.currentSection}`);
            const activeMenuItem: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-item');

            if (activeItem) {
                activeItem.forEach((HTMLElement) => { HTMLElement.classList.add('active') });
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
            if (desiredSection !== this.currentSection) {
                ScrollToSectionMixin.methods?.scrollToSection(desiredSection, this.currentSection, -90); // Call the global Mixin to scroll to desired section
                this.showMenu = false;
            }
        },
    },

    mounted() {
        this.manageActiveClass();
    },

    updated() {
        this.manageActiveClass();
    },
});
</script>

<style scoped>
#nav-current-section,
.nav-menu {
    color: var(--color-text);
    font-size: 2rem;
    padding: 5px;
    width: 200px;
    line-height: 1.6;
    font-family: 'Lato', 'Segoe UI', 'Helvetica Neue', sans-serif;
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
.nav-menu a.active {
    color: var(--color-heading);
    font-weight: 800;
}

#mobile-nav .nav-menu {
    display: block;
    position: fixed;
    top: 31px;
    left: 25px;
    background: var(--color-border-hover-90);
    border-radius: 10px;
}

#mobile-nav .nav-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#mobile-nav .nav-menu li {
    padding-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
}

.nav-menu a {
    text-decoration: none !important;
    color: var(--color-text);
}

.nav-menu a:hover:not(.active) {
    color: var(--color-hover);
    transition: color 0.2s ease-in-out;
}

.nav-menu .active-menu-item {
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

#desktop-nav {
    display: none;
}

@media (min-width:768px) {
    #mobile-nav {
        display: none;
    }

    #desktop-nav {
        display: flex !important;
        flex-direction: row;
        flex-basis: 70%;
    }

    #desktop-nav .nav-menu {
        display: flex !important;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0.75em;
        width: 100% !important;
        max-width: 550px !important;
    }

    #desktop-nav .nav-menu .nav-item:first-child {
        display: none;
    }

    #desktop-nav .nav-menu .nav-item a {
        text-decoration: none;
    }
}
</style>