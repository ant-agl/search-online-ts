<script setup lang="ts">
import { ref, computed } from "vue";
import CitysSelect from "./App/CitysSelect.vue";
import { UserOutlined } from "@ant-design/icons-vue";
import UploadImage from "./App/UploadImage.vue";
import { useStore } from "vuex";
const store = useStore();
const userDataDefault = computed(() => store.getters.userData);

const userData = ref({ ...userDataDefault.value });
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const isFormDirty = computed(() => {
  return !Object.keys({ ...userDataDefault.value, ...userData.value }).every(
    (key) => userDataDefault.value[key] === userData.value[key]
  );
});
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
    :model="userData"
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
      <CitysSelect v-model:valueSelect="userData.location" />
    </a-form-item>
    <a-form-item name="name" label="ФИО">
      <a-input
        v-model:value="userData.name"
        placeholder="Введите ФИО"
        allow-clear
      />
    </a-form-item>
    <a-form-item
      name="email"
      label="Электронная почта"
      :rules="[{ type: 'email', message: 'Неверный формат почты' }]"
    >
      <a-input
        v-model:value="userData.email"
        placeholder="Введите электронную почту"
        allow-clear
      />
    </a-form-item>
    <a-typography-title :level="5">Контакты</a-typography-title>
    <a-form-item
      name="phone"
      label="Номер телефона"
      :rules="[{ min: 19, message: 'Введите полный номер телефона' }]"
    >
      <a-input
        v-mask="'+7 (###) ###-##-##'"
        v-model:value="userData.phone"
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
        v-model:value="userData.vk"
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
          message: 'Пример ссылки https://tg.m/никнейм',
        },
      ]"
    >
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
