<template>
  <div id="trim"></div>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',

  components: {
    RouterView,
  },

  mounted() {
    console.log(`Hi developer - welcome to my portfolio! If you're curious, this website was built using Vue.js.\n\nPlease let me know if you have any feedback or encounter any bugs!`)
  }
});
</script>

<style scoped>
#trim {
  position: sticky;
  top: 0;
  width: 100%;
  height: 5px;
  background-color: var(--vt-c-trim);
  z-index: 999;
}
</style>