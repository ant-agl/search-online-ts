<script setup lang="ts">
import { reactive } from "vue";
import { UserRegistrationFormState } from "@/types/user";
import CitysSelect from "./App/CitysSelect.vue";

const onFinish = (values: object) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};

const formState = reactive<UserRegistrationFormState>({
  selectCity: "",
  vk: "",
  tg: "",
  tel: "",
  hideNumber: false,
});
</script>
<template>
  <a-typography-title>Расскажи о себе</a-typography-title>
  <a-form
    :model="formState"
    name="basic"
    layout="vertical"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      name="selectCity"
      label="Город"
      :rules="[{ required: true, message: 'Выбор города обязателен' }]"
    >
      <CitysSelect v-model:valueSelect="formState.selectCity" />
    </a-form-item>

    <a-typography-title :level="5">Контакты</a-typography-title>
    <a-form-item
      name="tel"
      label="Номер телефона"
      :rules="[{ min: 19, message: 'Введите полный номер телефона' }]"
    >
      <a-input
        v-mask="'+7 (###) ###-##-##'"
        v-model:value="formState.tel"
        placeholder="Введите номер телефона"
        allow-clear
      />
    </a-form-item>
    <a-form-item
      name="vk"
      label="Вк"
      :rules="[
        {
          type: 'url',
          message: 'Пример ссылки https://vk.com/никнейм',
        },
      ]"
    >
      <a-input
        v-model:value="formState.vk"
        placeholder="Вставьте ссылку Вк"
        allow-clear
      />
    </a-form-item>
    <a-form-item
      name="tg"
      label="Телеграм"
      :rules="[
        {
          type: 'url',
          message: 'Пример ссылки https://t.m/никнейм',
        },
      ]"
    >
      <a-input
        v-model:value="formState.tg"
        placeholder="Вставьте ссылку Телегам"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="hideNumber">
      Скрыть номер: <a-switch v-model:checked="formState.hideNumber" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 0, span: 10 }">
      <a-button type="primary" html-type="submit">Далее</a-button>
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
