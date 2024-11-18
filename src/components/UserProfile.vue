<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import { useUserStore } from "@/stores/user";
import type { Rule } from "ant-design-vue/es/form";

const userStore = useUserStore();
const userDataDefault = computed(() => userStore.userData);
const userData = ref({ ...userDataDefault.value });
const optionsCities = ref([]);
const onFinish = (values: object) => {
  console.log("Success:", values);
  console.log("Success:", userData);
};
interface getCities {
  id: number;
  name: string;
}
onMounted(() => {
  userStore.getCities().then((res) => {
    const cities = res.data.result.map((city: getCities) => {
      return { value: city.id, label: city.name };
    });
    optionsCities.value = cities;
  });
});
type OptionType = "vk" | "tg" | "site" | "phone" | "email";
interface Option {
  value: OptionType;
  label: string;
}
const options: Option[] = [
  { value: "vk", label: "Вконтакте" },
  { value: "tg", label: "Телеграм" },
  { value: "site", label: "Сайт" },
  { value: "phone", label: "Телефон" },
  { value: "email", label: "Почта" },
];
const optionsFilter = computed<Option[]>(() => {
  return options.filter(({ value }) => {
    return !contacts.value.find(({ type }) => type == value);
  });
});
const getOptionsForType = (type: OptionType): Option[] => {
  return [{ value: type, label: getValueOption(type) }, ...optionsFilter.value];
};
const getValueOption = (type: OptionType): string => {
  return options.find(({ value }) => value == type)?.label ?? "";
};

interface Contact {
  type: OptionType;
  value: string;
  hide: boolean;
}
const contacts = ref<Contact[]>([
  {
    type: "vk",
    value: "https://vk.com",
    hide: true,
  },
]);
const addContact = () => {
  const optionsArry = options.map((item) => item.value);
  const contactsArry = contacts.value.map((item) => item.type);
  const freeItems = optionsArry.filter((item) => !contactsArry.includes(item));
  if (freeItems.length) {
    contacts.value.push({ type: freeItems[0], value: "", hide: true });
  }
};
const deleteContact = (type: OptionType) => {
  contacts.value = contacts.value.filter((item) => item.type != type);
  console.log(type);
};
const hideContact = (type: OptionType) => {
  contacts.value = contacts.value.map((item) => {
    if (type === item.type) {
      return { ...item, hide: false };
    } else {
      return item;
    }
  });
};
const visibleContact = (type: OptionType) => {
  contacts.value = contacts.value.map((item) => {
    if (type === item.type) {
      return { ...item, hide: true };
    } else {
      return item;
    }
  });
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
    <div class="title-profile">Мой профиль</div>
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
      <a-row>
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
        <div class="city-email">
          <a-form-item name="location" label="Город">
            <a-select
              v-model:value="userData.location"
              :options="optionsCities"
            ></a-select>
          </a-form-item>
          <a-form-item name="email" label="Электронная почта">
            <a-input
              disabled="true"
              v-model:value="userData.email"
              placeholder="Введите электронную почту"
              allow-clear
            />
          </a-form-item>
        </div>
      </a-row>
      <div class="contacts-title">
        Контактная информация
        <img @click="addContact" src="@/img/menuProfile/plus.svg" alt="" />
      </div>
      <div class="contacts">
        <div v-for="(contact, i) in contacts" :key="i" class="select">
          <a-form-item :name="contact.type">
            <a-select
              v-model:value="contact.type"
              :options="getOptionsForType(contact.type)"
            ></a-select>
          </a-form-item>

          <a-form-item :name="contact.type">
            <a-input
              v-mask="contact.type === 'phone' ? '+7 (###) ###-##-##' : ''"
              allow-clear
              v-model:value="contact.value"
            />
          </a-form-item>
          <div class="button-contacts">
            <div class="contact-visible">
              <img
                v-show="contact.hide"
                src="@/img/menuProfile/visible.svg"
                class="visible"
                @click="hideContact(contact.type)"
              />
              <img
                v-show="!contact.hide"
                src="@/img/menuProfile/hide-visible.svg"
                @click="visibleContact(contact.type)"
                class="hide"
              />
            </div>

            <img
              class="contact-delete"
              @click="deleteContact(contact.type)"
              src="@/img/menuProfile/delete-profile.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="save">
        <a-button type="primary" html-type="submit" :disabled="!isFormDirty"
          >Сохранить</a-button
        >
      </div>
    </a-form>
  </div>
</template>

<style scoped lang="scss">
.contacts-title {
  margin-bottom: 20px;
  img {
    cursor: pointer;
  }
}

.select {
  display: grid;

  grid-template-columns: 17fr 17fr 0.6fr;
  gap: 5px;
}
.button-contacts {
  display: flex;
  align-items: flex-start;
  gap: 3px;
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
.city-email {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 14px;
}
.contacts {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.contact-visible,
.contact-delete {
  cursor: pointer;
}
.save {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
:deep(.ant-btn-primary) {
  padding: 6px 34px;
  line-height: 0;
}
.title-profile {
  margin-bottom: 0px;
  color: rgba(0, 0, 0, 0.7);
}

@media (max-width: 700px) {
  .fio {
    flex-direction: column;
  }
  .city-email {
    grid-template-columns: 1fr;
  }
  .select {
    grid-template-columns: 1fr;
  }
  :deep(.ant-form-item) {
    margin-bottom: 5px;
  }
}
@media (max-width: 500px) {
  .user-profile {
    padding: 24px 20px 18px 20px;
  }
  .save {
    margin-top: 20px;
    justify-content: center;
  }
  .warning {
    font-size: 12px;
  }
}
</style>
