import '@/assets/main.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import VueGtag from 'vue-gtag';

const app = createApp(App)
const GA4_MEASUREID: string = import.meta.env.VITE_GA4_MEASUREID as string;
const vueGtagOptions = {
    config: { id: GA4_MEASUREID },
};

app.use(VueGtag, vueGtagOptions);
app.use(router);

app.mount('#app');
