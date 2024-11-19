<template>
  <div class="search-mobile_modal">
    <div class="wrapper-input">
      <a-input class="input" v-model:value="inputValue">
        <template #suffix>
          <img
            @click="clearInput"
            class="cross"
            src="@/img/icons/cross.svg"
            alt=""
          />
        </template>
      </a-input>
      <div class="cancel" @click="searchMobile = false">Отменить</div>
    </div>
    <div class="conclusion">
      <div class="item">
        <div class="value"><SearchOutlined /> Ламинат</div>
        <img src="@/img/icons/arrowRight.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

const inputValue = ref("");
const searchMobile = defineModel("open");
// Логика очистки
const clearInput = () => {
  inputValue.value = "";
};
</script>

<style scoped lang="scss">
.conclusion {
  margin-top: 16px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.value {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  color: var(--color-text);
}
.search-mobile_modal {
  position: fixed;
  z-index: 99;
  background-color: white;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 15px 16px;
}
.wrapper-input {
  display: flex;
  gap: 15px;
  align-items: center;
}
.input {
  width: 90%;
  background-color: white;
  padding: 5px 14px;

  color: var(--color-text) !important;
}
.cancel {
  font-size: 10px;
  color: var(--color-second-primary);
  font-weight: 500;
}
</style>
