<template>
  <div class="product-service_text padding">
    <a-form
      :model="serviceProduct"
      name="basic"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item name="informationText" class="informationText">
        <template #label>
          <LabelTooltip
            label="Информация, необходимая от покупателя при отклике"
            title="Какое то описание"
          />
        </template>
        <a-textarea
          v-model:value="serviceProduct.informationText"
          placeholder="Текст"
          :auto-size="{ minRows: 7 }"
        />
      </a-form-item>

      <!-- Кнопки -->
      <div class="back-next">
        <a-button @click="prev" class="back" type="primary" ghost
          >Назад</a-button
        >
        <a-button class="next" html-type="submit" type="primary"
          >Далее</a-button
        >
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LabelTooltip from "../App/LabelTooltip.vue";

const emit = defineEmits(["stepPrevNext", "updateServiceProductData"]);
const props = defineProps({
  orgData: {
    type: Object,
  },
});

const serviceProduct = ref({
  informationText: "",
});

const onFinish = (values: object) => {
  console.log("Success:", values);
};

const prev = () => {
  emit("updateServiceProductData", serviceProduct);
  emit("stepPrevNext", "prev");
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
  console.log(serviceProduct.value);
};
</script>

<style scoped lang="scss">
.informationText {
  max-width: 636px;
}
</style>
