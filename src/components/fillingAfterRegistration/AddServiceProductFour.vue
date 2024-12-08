<template>
  <div class="product-service_img padding">
    <AppPictures v-model:images="serviceProduct.images" />
    <div class="back-next">
      <a-button @click="prev" class="back" type="primary" ghost>Назад</a-button>
      <a-button class="next" @click="save" type="primary">Готово</a-button>
    </div>
    <ModalDone v-model:open="openModal">
      <template v-slot:title>{{
        flagBuy
          ? "Супер! Вы оставили свою первую заявку"
          : props.serviceProduct?.select === "Товар"
          ? "Супер! Вы добавили свой первый товар"
          : "Супер! Вы добавили свою первую услугу"
      }}</template>
      <template v-slot:text>Скоро появится в каталоге</template>
      <template v-slot:next>{{
        flagBuy ? "Искать еще" : "Добавить еще"
      }}</template>
    </ModalDone>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppPictures from "../App/AppPictures.vue";
import ModalDone from "../modals/ModalDone.vue";

const emit = defineEmits(["stepPrevNext", "updateServiceProductData"]);
const props = defineProps({
  serviceProduct: {
    type: Object,
  },
  flagBuy: {
    type: Boolean,
  },
});
const openModal = ref(false);
const serviceProduct = ref({
  images: [
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    ...props.serviceProduct?.images,
  ],
});
const save = () => {
  emit("updateServiceProductData", serviceProduct.value);
  openModal.value = true;
};
const prev = () => {
  emit("updateServiceProductData", serviceProduct.value);
  emit("stepPrevNext", "prev");
};
</script>

<style scoped lang="scss">
.informationText {
  max-width: 636px;
}
</style>
