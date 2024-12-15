// main.ts
import { createApp } from "vue";
import { store } from "./providers/store";
import App from "./App.vue";
import router from "./providers/router";
import GlobalTexts from "@/app/locale";
import "./registerServiceWorker";

// Плагины
import VMask from "@ssibrahimbas/v-mask";
import AntdUi from "ant-design-vue";

// Стили
import "ant-design-vue/dist/reset.css";

// Создание приложения
const app = createApp(App);

app.use(store).use(router).use(VMask).use(AntdUi);
app.config.globalProperties.$t = GlobalTexts;
// Монтирование приложения
app.mount("#app");
