import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import en from './locales/en.json'
import es from './locales/es.json'
import App from "./App.vue";
import router from "./router";


const app = createApp(App);
app.use(createPinia());
app.use(router);
// Crear una instancia de VueI18n
const i18n = new createI18n({
  legacy: false,
  locale: "en", // Establecer el idioma predeterminado a inglés
  messages: {
    en: en,
    es: es,
  },
});

app.use(i18n);

app.mount("#app");
