import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import "./assets/main.css"; // Tailwind styles

// Import FontAwesome library and components
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import specific icons
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faAnglesRight);

const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router); // Use Vue Router
app.mount("#app");
