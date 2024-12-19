<script setup lang="ts">
import GlobalTexts from "@/app/locale";
import { computed } from "vue";

const props = defineProps<{
  accountType: "sell" | "user";
  select: "item" | "service";
}>();

const modalVisible = defineModel<boolean>("modalVisible");

const texts = computed(() =>
  GlobalTexts.confirmation.getTextsConfirmation(props.accountType, props.select)
);

const handleOk = () => {};

const handleCancel = () => {
  modalVisible.value = false;
};
</script>

<template>
  <a-modal v-model:open="modalVisible" centered>
    <a-flex vertical>
      <span>
        {{ texts.skipModal }}
      </span>
    </a-flex>
    <template #footer>
      <a-flex justify="center" align="center">
        <a-button
          class="modal-btn"
          key="back"
          type="primary"
          @click="handleCancel"
          >Нет</a-button
        >
        <a-button class="modal-btn" key="submit" @click="handleOk">Да</a-button>
      </a-flex>
    </template>
  </a-modal>
</template>

<style lang="scss" scoped>
.modal-btn {
  border-radius: 30px;
  padding: 0px 34px;
}
</style>
