<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const theme = ref({
  token: {
    colorPrimary: "#5D169C", // Основной цвет темы
  },

  // components: {
  //   Input: {
  //     borderRadius: "20px",
  //     paddingBlock: "10px",
  //     height: "42px",
  //   },
  // },
});

const layouts = {
  auth: defineAsyncComponent(() => import("./layouts/AuthLayout.vue")),
  main: defineAsyncComponent(() => import("./layouts/MainLayout.vue")),
};

const layout = computed(() => {
  const layoutName = route.meta.layout as keyof typeof layouts;
  return layouts[layoutName] ?? layouts.main;
});
</script>

<template>
  <a-config-provider :theme="theme">
    <a-app>
      <component :is="layout">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </component>
    </a-app>
  </a-config-provider>
</template>

<style lang="scss">
@use "swiper/css";
@use "swiper/css/pagination";
@import url("./styles/scss/custom.scss");
@import url("./styles/scss/style.scss");
@import url("./styles/scss/transition.scss");
@import url("./styles/scss/vars.scss");
</style>
