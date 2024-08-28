<script setup lang="ts">
import { reactive, ref } from "vue";
import type { SelectProps } from "ant-design-vue";
import CategorySelect from "./App/CategorySelect.vue";
import { OrgRegistrationFormState } from "@/types/user";

const options = ref<SelectProps["options"]>([
  { value: "ООО", label: "ООО" },
  { value: "ИП", label: "ИП" },
  { value: "Самозанятый", label: "Самозанятый" },
  { value: "Физлицо", label: "Физлицо" },
]);

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onFinish = (values: object) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};

const formState = reactive<OrgRegistrationFormState>({
  selectCity: "",
  vk: "",
  tg: "",
  tel: "",
  selectOrg: "",
  selectCategory: "",
  nameCompany: "",
  adresStore: "",
  descriptionCompany: "",
  name: "",
  inn: "",
  kpp: "",
  ogrn: "",
  ogrnIp: "",
  adressUr: "",
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
    <a-typography-title :level="5">Юридичкеские данные</a-typography-title>
    <a-form-item
      name="selectOrg"
      label="Форма предприятия"
      :rules="[{ required: true, message: 'Выбор предприятия обязателен' }]"
    >
      <a-select
        v-model:value="formState.selectOrg"
        placeholder="Select a person"
        style="width: 200px"
        :options="options"
        @change="handleChange"
      ></a-select>
    </a-form-item>
    <div v-show="['ООО', 'ИП', 'Самозанятый'].includes(formState.selectOrg)">
      <a-typography-title :level="5">{{
        formState.selectOrg
      }}</a-typography-title>

      <a-form-item
        name="name"
        :label="formState.name == 'ООО' ? 'Наименование организации' : 'ФИО'"
      >
        <a-input
          v-model:value="formState.name"
          :placeholder="
            formState.name == 'ООО'
              ? 'Введите наименование организации'
              : 'Введите ФИО'
          "
          allow-clear
        />
      </a-form-item>
      <a-form-item
        name="inn"
        label="ИНН "
        :rules="[{ min: 14, message: 'ИНН состоит из 11 цифр' }]"
      >
        <a-input
          v-model:value="formState.inn"
          placeholder="Введите ИНН"
          v-mask="'###-###-### ##'"
          allow-clear
        />
      </a-form-item>
      <a-form-item
        name="kpp"
        label="КПП "
        :rules="[{ min: 11, message: 'КПП состоит из 9 цифр' }]"
        v-show="['ООО'].includes(formState.selectOrg)"
      >
        <a-input
          v-model:value="formState.kpp"
          placeholder="Введите КПП"
          v-mask="'####-##-###'"
          allow-clear
        />
      </a-form-item>
      <a-form-item
        name="ogrn"
        label="ОГРН"
        :rules="[{ min: 15, message: 'ОГРН состоит из 11 цифр' }]"
        v-show="['ООО'].includes(formState.selectOrg)"
      >
        <a-input
          v-model:value="formState.ogrn"
          placeholder="Введите ОГРН"
          v-mask="'#-##-##-#####-#'"
          allow-clear
        />
      </a-form-item>
      <a-form-item
        name="ogrnIp"
        label="ОГРНИП"
        :rules="[{ min: 17, message: 'ОГРНИП состоит из 13 цифр' }]"
        v-show="['ИП'].includes(formState.selectOrg)"
      >
        <a-input
          v-model:value="formState.ogrnIp"
          placeholder="Введите ОГРНИП"
          v-mask="'#-##-##-#######-#'"
          allow-clear
        />
      </a-form-item>

      <a-form-item
        name="adressUr"
        label="Юридический адресс"
        v-show="['ООО'].includes(formState.selectOrg)"
      >
        <a-input
          v-model:value="formState.adressUr"
          placeholder="Введите юридический адресс"
          allow-clear
        />
      </a-form-item>
    </div>

    <a-typography-title :level="5">Общие данные</a-typography-title>
    <a-form-item name="selectCategory" label="Категория предоставляемых услуг">
      <CategorySelect />
    </a-form-item>
    <a-form-item name="nameCompany" label="Название компании ">
      <a-input
        v-model:value="formState.nameCompany"
        placeholder="Введите название компании"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="adresStore" label="Адресс магазина (при наличии) ">
      <a-input
        v-model:value="formState.adresStore"
        placeholder="Введите адресс магазина"
        allow-clear
      />
    </a-form-item>
    <a-form-item name="descriptionCompany" label="Описание компании ">
      <a-textarea
        v-model:value="formState.descriptionCompany"
        placeholder="Напишите о компании"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
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
    <a-form-item :wrapper-col="{ offset: 0, span: 10 }">
      <a-button type="primary" html-type="submit">Далее</a-button>
    </a-form-item>
  </a-form>
</template>
