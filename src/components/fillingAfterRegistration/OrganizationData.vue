<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { SelectProps } from "ant-design-vue";
import LabelTooltip from "../App/LabelTooltip.vue";
import CategoryCascader from "../App/CategoryCascader.vue";
const emit = defineEmits(["stepPrevNext", "updateOrgData"]);
const props = defineProps({
  orgData: {
    type: Object,
  },
});
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
  emit("updateOrgData", values);
  emit("stepPrevNext", "next");
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
const prev = () => {
  emit("updateOrgData", formState);
  emit("stepPrevNext", "prev");
};

// Стейт формы
const formState = reactive({
  selectOrg: "",
  name: "",
  inn: "",
  kpp: "",
  ogrn: "",
  ogrnIp: "",
  adressUr: "",
  descriptionCompany: "",
  categorys: [],
  ...props.orgData,
});

// Валидационные правила
const validationRules = {
  name: (selectOrg: string) => [
    {
      required: true,
      message:
        selectOrg === "ООО"
          ? "Введите наименование организации"
          : "Введите ФИО",
    },
  ],
  inn: [
    { required: true, message: "Введите ИНН" },
    { min: 14, message: "ИНН состоит из 11 цифр" },
  ],
  kpp: [
    { required: true, message: "Введите КПП" },
    { min: 11, message: "КПП состоит из 9 цифр" },
  ],
  ogrn: [
    { required: true, message: "Введите ОГРН" },
    { min: 15, message: "ОГРН состоит из 11 цифр" },
  ],
  ogrnIp: [
    { required: true, message: "Введите ОГРНИП" },
    { min: 17, message: "ОГРНИП состоит из 13 цифр" },
  ],
  adressUr: [{ required: true, message: "Введите Юр.Адресс" }],
  descriptionCompany: [{ required: true, message: "Описание обязательно" }],
  categorys: [{ required: true, message: "Категория обязательна" }],
};

// Следим за изменениями в категории
watch(formState.categorys, (newV) => {
  console.log(newV);
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
      <div class="wrapper-forma">
        <div class="forma">
          <a-form-item
            name="name"
            :label="
              formState.selectOrg === 'ООО' ? 'Название организации' : 'ФИО'
            "
            :rules="validationRules.name(formState.selectOrg)"
          >
            <a-input
              v-model:value="formState.name"
              :placeholder="
                formState.selectOrg === 'ООО'
                  ? 'Введите наименование организации'
                  : 'Введите ФИО'
              "
              allow-clear
            />
          </a-form-item>

          <a-form-item
            name="selectOrg"
            label="Тип организации"
            :rules="[
              { required: true, message: 'Выбор организации обязателен' },
            ]"
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
            v-if="['ООО', 'ИП', 'Самозанятый'].includes(formState.selectOrg)"
            :rules="validationRules.inn"
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
            label="КПП"
            v-if="['ООО'].includes(formState.selectOrg)"
            :rules="validationRules.kpp"
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
            v-if="['ООО'].includes(formState.selectOrg)"
            :rules="validationRules.ogrn"
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
            v-if="['ИП'].includes(formState.selectOrg)"
            :rules="validationRules.ogrnIp"
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
            v-if="['ООО'].includes(formState.selectOrg)"
            :rules="validationRules.adressUr"
          >
            <a-input
              v-model:value="formState.adressUr"
              placeholder="Введите юридический адрес"
              allow-clear
            />
          </a-form-item>
        </div>

        <a-form-item
          name="descriptionCompany"
          v-if="['ООО', 'ИП', 'Самозанятый'].includes(formState.selectOrg)"
          :rules="validationRules.descriptionCompany"
        >
          <template #label>
            <LabelTooltip
              label="Описание организации"
              title="Какое то описание"
            />
          </template>

          <a-textarea
            v-model:value="formState.descriptionCompany"
            placeholder="Напишите об организации"
            :auto-size="{ minRows: 5, maxRows: 10 }"
          />
        </a-form-item>
      </div>

      <a-form-item name="categorys" :rules="validationRules.categorys">
        <template #label>
          <LabelTooltip label="Категория" title="Какое то описание" />
        </template>
        <CategoryCascader v-model:value="formState.categorys" />
      </a-form-item>

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

<style scoped lang="scss">
.salesman {
  padding: 24px 60px 84px;
  background-color: white;
}
.wrapper-forma {
  max-width: 636px;
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

@media (max-width: 700px) {
  .forma {
    grid-template-columns: 1fr;
  }
  .salesman {
    padding: 24px 20px 18px 20px;
  }
  :deep(.ant-form-item) {
    margin-bottom: 0px;
  }
  .save {
    margin-top: 20px;
    justify-content: center;
  }
}
</style>
