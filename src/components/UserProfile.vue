<script setup lang="ts">
import { ref, computed } from "vue";
import CitysSelect from "./App/CitysSelect.vue";
import { UserOutlined } from "@ant-design/icons-vue";
import UploadImage from "./App/UploadImage.vue";
import { useUserStore } from "@/stores/user";
import type { Rule } from "ant-design-vue/es/form";

const userStore = useUserStore();
const userDataDefault = computed(() => userStore.userData);
const userData = ref({ ...userDataDefault.value });
const onFinish = (values: object) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
const isFormDirty = computed(() => {
  return (
    JSON.stringify(userDataDefault.value) !== JSON.stringify(userData.value)
  );
});
const rules: Record<string, Rule[]> = {
  email: [
    {
      type: "email",
      trigger: "change",
      message: "Пожалуйста, введите корректный адрес электронной почты.",
    },
    { required: true, message: "Электронная почта обязательна" },
  ],
  tel: [{ min: 18, message: "Введите полный номер телефона" }],
  vk: [
    {
      type: "url",
      message: "Пример ссылки https://vk.com/никнейм",
    },
  ],
  tg: [
    {
      type: "url",
      message: "Пример ссылки https://tg.m/никнейм",
    },
  ],
  name: [
    {
      required: true,
      trigger: "change",
      message: "ФИО обязательно",
    },
    {
      min: 6,
      trigger: "change",
      message: "ФИО должно содержать минимум 6 символов.",
    },
  ],
};
</script>
<template>
  <UploadImage v-model:image-url="userData.img">
    <a-avatar :size="200">
      <template #icon>
        <a-image
          :width="200"
          :preview="false"
          :src="userData.img"
          v-if="userData.img" />

        <UserOutlined v-if="userData.img === null"
      /></template>
    </a-avatar>
  </UploadImage>
  <a-form
    :rules="rules"
    :model="userData"
    name="basic"
    layout="vertical"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item name="selectCity" label="Город">
      <CitysSelect
        v-model:valueSelect="userData.location"
        :defaultValue="userData.location"
      />
    </a-form-item>
    <a-form-item name="name" label="ФИО">
      <a-input
        v-model:value="userData.name"
        placeholder="Введите ФИО"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="email" label="Электронная почта">
      <a-input
        v-model:value="userData.email"
        placeholder="Введите электронную почту"
        allow-clear
      />
    </a-form-item>
    <a-typography-title :level="5">Контакты</a-typography-title>
    <a-form-item name="tel" label="Номер телефона">
      <a-input
        v-mask="'+7 (###) ###-##-##'"
        v-model:value="userData.tel"
        placeholder="Введите номер телефона"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="vk" label="Вк">
      <a-input
        v-model:value="userData.vk"
        placeholder="Вставьте ссылку Вк"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="tg" label="Телеграм">
      <a-input
        v-model:value="userData.tg"
        placeholder="Вставьте ссылку Телегам"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="hideNumber">
      Скрыть номер: <a-switch v-model:checked="userData.hideNumber" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 0, span: 10 }">
      <a-button type="primary" html-type="submit" :disabled="!isFormDirty"
        >Сохранить</a-button
      >
    </a-form-item>
  </a-form>
</template>

<style scoped>
.horizontal-form-item {
  display: flex;
  align-items: center;
}

.horizontal-form-item .ant-form-item-label {
  text-align: right; /* Выравнивание метки по правому краю */
  padding-right: 8px; /* Отступ справа от метки */
}

.horizontal-form-item .ant-form-item-control {
  flex-grow: 1; /* Разрешить элементу управления занимать оставшееся пространство */
}
</style>
