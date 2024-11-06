// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia } from "pinia";
import { ConfigProvider } from "ant-design-vue";
// Плагины
import VMask from "@ssibrahimbas/v-mask";
import AntdUi from "ant-design-vue";

// Стили
import "ant-design-vue/dist/reset.css";

// Создание приложения
const app = createApp(App);

// Подключение хранилища, маршрутизации и плагинов
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VMask);
app.use(AntdUi);
app.use(ConfigProvider);

// Монтирование приложения
app.mount("#app");
