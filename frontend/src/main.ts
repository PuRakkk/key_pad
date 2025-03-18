import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import "./assets/main.css"; // Tailwind styles

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount("#app");
