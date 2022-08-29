import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import './assets/main.css';
import 'primeicons/primeicons.css';
const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.mount('#app');
