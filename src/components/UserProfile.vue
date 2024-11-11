<script setup lang="ts">
import { ref, computed } from "vue";

import { useUserStore } from "@/stores/user";
import type { Rule } from "ant-design-vue/es/form";
import type { SelectProps } from "ant-design-vue";
const userStore = useUserStore();
const userDataDefault = computed(() => userStore.userData);
const userData = ref({ ...userDataDefault.value });
const onFinish = (values: object) => {
  console.log("Success:", values);
};
const options = [
  { value: "Вконтакте" },
  { value: "Телеграм" },
  { value: "Сайт" },
  { value: "Телефон" },
  { value: "Почта" },
];
const randomIndex = Math.floor(Math.random() * options.length);
const size = ref<SelectProps["size"]>("middle");
const selectOne = ref(options[randomIndex]);

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
        <div class="fio">
          <a-form-item name="name" label="Фамилия">
            <a-input
              v-model:value="userData.name"
              placeholder="Введите фамилию"
              allow-clear
            />
          </a-form-item>
          <a-form-item name="surname" label="Имя">
            <a-input
              v-model:value="userData.name"
              placeholder="Введите имя"
              allow-clear
            />
          </a-form-item>
          <a-form-item name="patronymic" label="Отчество">
            <a-input
              v-model:value="userData.name"
              placeholder="Введите отчество"
              allow-clear
            />
          </a-form-item>
        </div>
        <a-col span="12">
          <a-form-item name="email" label="Электронная почта">
            <a-input
              disabled="true"
              v-model:value="userData.email"
              placeholder="Введите электронную почту"
              allow-clear
            /> </a-form-item
        ></a-col>
      </a-row>
      <div class="select">
        <a-select
          v-model:value="selectOne"
          :size="size"
          :options="options"
        ></a-select>
        <a-input allow-clear />
        <div>
          <img src="@/img/menuProfile/visible.svg" class="visible" alt="" />
          <img src="@/img/menuProfile/hide-visible.svg" class="hide" />
        </div>

        <img src="@/img/menuProfile/delete-profile.svg" alt="" />
      </div>

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
.hide {
  display: none;
}
.select {
  display: grid;

  grid-template-columns: 17fr 17fr 0.3fr 03fr;
  gap: 5px;
}
.user-profile {
  background-color: var(--color-back-modal);

  padding: 24px 60px 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.fio {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
