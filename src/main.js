import { createApp } from 'vue'; // Import createApp from 'vue'
import App from './App.vue';
import router from './router'; // Import the router

const app = createApp(App); // Use createApp directly

app.use(router); // Use the router in your application

app.mount('#app');
