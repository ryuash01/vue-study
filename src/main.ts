import { createApp } from "vue";
import { createPinia } from "pinia";
import mitt from 'mitt';

import App from "./App.vue";

const app = createApp(App);
const emitter = mitt();

app.use(createPinia());
app.provide('emitter', emitter);

app.mount("#app");
