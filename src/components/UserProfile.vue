<script setup lang="ts">
import { ref, computed } from "vue";

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
  <div class="user-profile">
    <div class="title">Мой профиль</div>
    <div class="warning">Профиль заполнен не полностью</div>
    <a-form
      :rules="rules"
      :model="userData"
      name="basic"
      class="form-user"
      layout="vertical"
      labelWrap="true"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <!-- <a-form-item name="selectCity" label="Город">
      <CitysSelect
        v-model:valueSelect="userData.location"
        :defaultValue="userData.location"
      />
    </a-form-item> -->
      <a-row gutter="24">
        <a-col span="12">
          <a-form-item name="name" label="ФИО">
            <a-input
              v-model:value="userData.name"
              placeholder="Введите ФИО"
              allow-clear
            /> </a-form-item
        ></a-col>
        <a-col span="12">
          <a-form-item name="email" label="Электронная почта">
            <a-input
              v-model:value="userData.email"
              placeholder="Введите электронную почту"
              allow-clear
            /> </a-form-item
        ></a-col>
      </a-row>

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
  </div>
</template>

<style scoped>
.user-profile {
  background-color: var(--color-back-modal);

  padding: 24px 60px 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title {
  font-weight: 500;
}
.warning {
  border: 1.5px solid #ffe49d;
  background: #fff6e0;
  height: 52px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 10%);
}
.form-user {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
