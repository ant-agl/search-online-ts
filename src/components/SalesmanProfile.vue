<script setup lang="ts">
import { reactive, ref } from "vue";
import type { SelectProps } from "ant-design-vue";
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
  selectOrg: "",
  name: "",
  inn: "",
  kpp: "",
  ogrn: "",
  ogrnIp: "",
  adressUr: "",
  descriptionCompany: "",
});
</script>

<template>
  <div class="salesman">
    <div class="title-profile">Моя организация</div>
    <a-form
      :model="formState"
      name="basic"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <div class="forma">
        <a-form-item
          name="name"
          :label="
            formState.selectOrg == 'ООО' ? 'Наименование организации' : 'ФИО'
          "
        >
          <a-input
            v-model:value="formState.name"
            :placeholder="
              formState.selectOrg == 'ООО'
                ? 'Введите наименование организации'
                : 'Введите ФИО'
            "
            allow-clear
          />
        </a-form-item>
        <a-form-item
          name="selectOrg"
          label="Тип организации"
          :rules="[{ required: true, message: 'Выбор организации обязателен' }]"
        >
          <a-select
            v-model:value="formState.selectOrg"
            placeholder="Выберите организацию"
            :options="options"
            @change="handleChange"
          ></a-select>
        </a-form-item>

        <a-form-item
          name="inn"
          label="ИНН"
          v-show="['ООО', 'ИП', 'Самозанятый'].includes(formState.selectOrg)"
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
          label="Юридический адрес"
          v-show="['ООО'].includes(formState.selectOrg)"
        >
          <a-input
            v-model:value="formState.adressUr"
            placeholder="Введите юридический адрес"
            allow-clear
          />
        </a-form-item>
      </div>
      <a-form-item
        v-show="['ООО', 'ИП', 'Самозанятый'].includes(formState.selectOrg)"
        name="descriptionCompany"
        label="Описание организации "
      >
        <a-textarea
          v-model:value="formState.descriptionCompany"
          placeholder="Напишите об организации"
          :auto-size="{ minRows: 5, maxRows: 10 }"
        />
      </a-form-item>
      <div class="save">
        <a-button type="primary" html-type="submit">Сохранить</a-button>
      </div>
    </a-form>
  </div>
</template>

<style scoped lang="scss">
.salesman {
  padding: 24px 60px 84px;
  background-color: white;
}
.forma {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.save {
  display: flex;
  justify-content: flex-end;
}
:deep(.ant-btn-primary) {
  padding: 6px 34px;
  line-height: 0;
}
.title-profile {
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
