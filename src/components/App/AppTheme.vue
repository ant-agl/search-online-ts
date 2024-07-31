<template>
  <!-- Style switcher -->
  <div
    id="style-switcher"
    @click="toggleSwitcher"
    :style="{ left: switcherLeft }"
  >
    <div>
      <h6>Select your color</h6>
      <ul class="pattern list-unstyled mb-0">
        <li>
          <a
            class="color-list color1"
            href="javascript:void(0);"
            @click.prevent="loadTheme('light')"
          ></a>
        </li>
        <li>
          <a
            class="color-list color2"
            href="javascript:void(0);"
            @click.prevent="loadTheme('blue')"
          ></a>
        </li>
        <li>
          <a
            class="color-list color3"
            href="javascript:void(0);"
            @click.prevent="loadTheme('green')"
          ></a>
        </li>
      </ul>
      <div class="mt-3">
        <h6>Light/dark Layout</h6>
        <div class="text-center mt-3">
          <!-- light-dark mode -->
          <a
            href="javascript:void(0);"
            id="mode"
            class="mode-btn text-white rounded-3"
            @click="toggleMode"
          >
            <i class="uil uil-brightness mode-dark mx-auto"></i>
            <i class="uil uil-moon mode-light"></i>
          </a>
          <!-- END light-dark Mode -->
        </div>
      </div>
    </div>
    <div class="bottom d-none d-md-block">
      <a href="javascript:void(0);" class="settings rounded-end"
        ><i class="mdi mdi-cog mdi-spin"></i
      ></a>
    </div>
  </div>
  <!-- end switcher-->

  <!--start back-to-top-->
  <button @click="topFunction" id="back-to-top">
    <i class="mdi mdi-arrow-up"></i>
  </button>
  <!--end back-to-top-->
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";

const theme = ref<string>(localStorage.getItem("theme") || "light");
const themeNight = ref<string>(localStorage.getItem("themeNight") || "light");
const currentStyles = reactive({
  currentStyleApp: null as HTMLLinkElement | null,
  currentStyleBootstrap: null as HTMLLinkElement | null,
});

const switcherLeft = ref<string>("-165px");
const showBackToTop = ref<boolean>(false);

const loadTheme = (theme: string) => {
  const removeOldStyles = () => {
    if (currentStyles.currentStyleApp) {
      document.head.removeChild(currentStyles.currentStyleApp);
    }
    if (currentStyles.currentStyleBootstrap) {
      document.head.removeChild(currentStyles.currentStyleBootstrap);
    }
  };

  removeOldStyles();

  let appCssPath: Promise<any>;
  let bootstrapCssPath: Promise<any>;

  switch (theme) {
    case "light":
      appCssPath = import("@/assets/css/app.min.css");
      bootstrapCssPath = import("@/assets/css/bootstrap.min.css");
      break;
    case "green":
      appCssPath = import("@/assets/css/app-green.min.css");
      bootstrapCssPath = import("@/assets/css/bootstrap-green.min.css");
      break;
    case "blue":
      appCssPath = import("@/assets/css/app-blue.min.css");
      bootstrapCssPath = import("@/assets/css/bootstrap-blue.min.css");
      break;
    default:
      return;
  }

  currentStyles.currentStyleApp = createLinkTag(appCssPath);
  currentStyles.currentStyleBootstrap = createLinkTag(bootstrapCssPath);

  document.head.appendChild(currentStyles.currentStyleApp);
  document.head.appendChild(currentStyles.currentStyleBootstrap);

  localStorage.setItem("theme", theme);
};

const createLinkTag = (href: Promise<any>): HTMLLinkElement => {
  const linkTag = document.createElement("link");
  linkTag.rel = "stylesheet";
  href.then((module) => {
    linkTag.href = module.default;
  });
  return linkTag;
};

const toggleMode = () => {
  themeNight.value = themeNight.value === "light" ? "dark" : "light";
  document.body.setAttribute("data-layout-mode", themeNight.value);
  localStorage.setItem("themeNight", themeNight.value);
};

const topFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleSwitcher = () => {
  switcherLeft.value = switcherLeft.value === "-165px" ? "0px" : "-165px";
};

const scrollFunction = () => {
  showBackToTop.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", scrollFunction);
  loadTheme(theme.value);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollFunction);
});
</script>

<style>
@import "@/assets/libs/choices.js/public/assets/styles/choices.min.css";
@import "@/assets/css/app.min.css";
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/icons.min.css";
</style>
