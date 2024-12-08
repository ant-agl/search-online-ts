<template>
  <div v-if="modalClose" class="wrapper-modal-out" @click="hide">
    <div class="modal-out" @click.stop>
      <img class="closed" @click="hide" src="@/img/closed.svg" alt="" />
      <img src="@/img/checkMarkServiceProduct.svg" alt="" />
      <div class="title-text">
        <div class="titleModal"><slot name="title"></slot></div>
        <div class="text"><slot name="text"></slot></div>
      </div>

      <div class="buttons">
        <a-button @click="hide">Перейти в профиль</a-button>
        <a-button @click="callback" type="primary"
          ><slot name="next"></slot
        ></a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const modalClose = defineModel("open");
const emit = defineEmits("callback");

const callback = () => {
  emit("callback");
};
const hide = () => {
  modalClose.value = false;
  router.push({
    name: "MenuProfile",
  });
};
</script>

<style scoped lang="scss">
.wrapper-modal-out {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  left: 0;
  top: 0;
}
.modal-out {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 34px;

  background-color: white;
  border-radius: 20px;
  height: max-content;
  padding: 44px 55px 30px 55px;
  .closed {
    position: absolute;
    right: 25px;
    top: 25px;
    cursor: pointer;
  }
  .title-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;
  }
  .titleModal {
    font-size: 24px;
    font-weight: 500;
  }
  .text {
    font-size: 20px;
    font-weight: 450;
  }
}
.buttons {
  display: flex;
  gap: 16px;
  button {
    width: 214px;
  }
}
@media (max-width: 700px) {
  .modal-out {
    width: 90%;
    padding: 0 42px;
    .text {
      font-size: 14px;
      text-align: center;
    }
    .closed {
      right: 8px;
      top: 8px;
    }
  }
}
</style>
