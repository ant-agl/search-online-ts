<template>
  <div v-if="modalClose" class="wrapper-modal-out" @click="hide">
    <div class="modal-out" @click.stop>
      <img class="closed" @click="hide" src="@/img/closed.svg" alt="" />
      <div class="text"><slot></slot></div>
      <div class="buttons">
        <a-button @click="hide" type="primary">нет</a-button>
        <a-button @click="callback">да</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const modalClose = defineModel("open");
const emit = defineEmits("callback");

const callback = () => {
  emit("callback");
};
const hide = () => {
  modalClose.value = false;
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
  gap: 18px;

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
  .text {
    font-size: 20px;
    font-weight: 450;
  }
}
.buttons {
  display: flex;
  gap: 16px;
  button {
    width: 84px;
  }
  :nth-child(2):hover {
    border-color: rgb(99, 1, 1, 70%);
    color: rgb(99, 1, 1, 70%);
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
