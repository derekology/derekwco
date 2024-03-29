<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-if="animate" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'AnimatedComponent',

    props: {
        animationType: {
            type: String,
            required: false,
            default: 'fade'
        }
    },

    setup() {
        const target = ref();
        const animate = ref(false);
        const observer = new IntersectionObserver(
            ([entry]) => {
                animate.value = entry.isIntersecting;
            },
            {
                threshold: 0.1
            }
        );

        onMounted(() => {
            observer.observe(target.value);
        });

        return {
            animate,
            target
        };
    }
});
</script>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
    transition: none;
}

/* For fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* For zoom animations */
.zoom-enter-active,
.zoom-leave-active {
    transition: transform 300ms ease;
}

.zoom-enter-from,
.zoom-leave-to {
    transform: scale(0.9);
}
</style>