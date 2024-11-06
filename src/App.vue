<script setup>
import { ref } from "vue";

const theme = ref({
  token: {
    colorPrimary: "#7318C4", // Основной цвет темы
  },

  // components: {
  //   Input: {
  //     borderRadius: "20px",
  //     paddingBlock: "10px",
  //     height: "42px",
  //   },
  // },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import "swiper/css";
@import "swiper/css/pagination";
:root {
  --color-primary: #7318c4;
  --color-back: #f9f3ff;
  --color-back-modal: rgb(255, 255, 255, 60%);
}
* {
  font-family: "Montserrat", sans-serif;
}
body {
  background-color: #fcf8ff !important;
}
a:hover {
  color: var(--color-primary);
}
.ant-input-affix-wrapper {
  border-radius: 30px;
  padding: 10px 14px;
  background-color: #f2f2f2;
  .ant-input {
    background: inherit;
  }
}
</style>
<template>
  <a-config-provider :theme="theme"><router-view /> </a-config-provider>
</template>
