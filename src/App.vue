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
  --color-second-primary: #5d169c;
  --color-back: #f9f3ff;
  --color-back-modal: rgb(255, 255, 255, 60%);
  --color-text: rgba(0, 0, 0, 0.7);
}
* {
  font-family: "Montserrat", sans-serif;
}
body {
  background-color: #fcf8ff !important;
}
.title {
  font-size: 28px;
  font-family: "Russo One", sans-serif;
}
a {
  text-decoration: none;
  color: var(--color-primary);
  &:hover {
    color: var(--color-primary);
  }
}
.ant-input-affix-wrapper {
  border-radius: 30px;
  padding: 10px 14px;
  background-color: #f2f2f2;
  .ant-input {
    background: inherit;
  }
}
.ant-input-prefix {
  margin-inline-end: 10px !important;
}
.ant-input {
  border-radius: 20px;
  padding: 10px 14px;
  background-color: #f2f2f2;
}
.css-dev-only-do-not-override-keyed0.ant-btn {
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
}
.ant-btn {
  border-radius: 20px;
}
:where(
    .css-dev-only-do-not-override-keyed0
  ).ant-btn-primary.ant-btn-background-ghost:hover {
  background-color: #7318c4 !important;
  color: white !important;
}

.ant-select {
  .ant-select-selector {
    padding: 7px 15px !important;
    height: auto !important;
    border: none !important;
    border-radius: 20px !important;
    background-color: #f2f2f2 !important;
  }

  .ant-select-selection-search {
    inset-inline-start: 15px !important;
    inset-inline-end: 15px !important;
  }

  .ant-select-selection-search-input {
    height: 100% !important ;
  }
}

.ant-picker {
  padding: 9px 15px;
  box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: none;

  input {
    line-height: 30px;
  }
}

.ant-slider-rail {
  background-color: #d9d9d9;
}

.ant-modal {
  .ant-modal-content {
    background-color: #f3f2e0;
    padding: 20px;
    border-radius: 15px;
  }
  .ant-modal-title {
    font-family: "Jura";
    background-color: #f3f2e0;
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    padding-right: 15px;
    padding-bottom: 15px;
  }
  .ant-modal-body {
    font-size: 13px;
    padding-bottom: 15px;
  }
  .ant-modal-footer {
    display: flex;
    gap: 20px;
    button {
      width: 100%;
    }
  }
}
.ant-modal-mask {
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
<template>
  <a-config-provider :theme="theme"><router-view /> </a-config-provider>
</template>
