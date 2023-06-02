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