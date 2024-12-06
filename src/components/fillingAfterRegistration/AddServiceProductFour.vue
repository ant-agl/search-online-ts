<template>
  <div class="product-service_img padding">
    <AppPictures />
    <div class="back-next">
      <a-button @click="prev" class="back" type="primary" ghost>Назад</a-button>
      <a-button class="next" html-type="submit" type="primary">Далее</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppPictures from "../App/AppPictures.vue";

const emit = defineEmits(["stepPrevNext", "updateServiceProductData"]);
const props = defineProps({
  orgData: {
    type: Object,
  },
});

const serviceProduct = ref({
  images: "",
});

const prev = () => {
  emit("updateServiceProductData", serviceProduct);
  emit("stepPrevNext", "prev");
};
</script>

<style scoped lang="scss">
.informationText {
  max-width: 636px;
}
</style>
