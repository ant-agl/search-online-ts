<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import type { Rule } from "ant-design-vue/es/form";

const userStore = useUserStore();
const emit = defineEmits(["stepPrevNext", "updateUserData"]);
const props = defineProps({
  userData: {
    type: Object,
  },
});
interface User {
  name: string;
  surname: string;
  patronymic: string;
  location: Location | null;
  email: string;
  contacts: Array<Contact>;
}
interface Location {
  value: string | null;
  label: string | null;
}
const userDataDefault = computed(() => props.userData);
const userData = ref<User>({
  name: "",
  surname: "",
  patronymic: "",
  location: null,
  email: "",
  contacts: [
    {
      type: "vk",
      value: "https://vk.com",
      hide: true,
    },
  ],
  ...userDataDefault.value,
});

const optionsCities = ref([]);
const onFinish = (values: User) => {
  emit("updateUserData", values);
  emit("stepPrevNext", "next");
};
const prev = () => {
  emit("stepPrevNext", "prevRouter");
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
interface Contact {
  type: OptionType;
  value: string;
  hide: boolean;
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
    return !userData.value.contacts.find(({ type }) => type == value);
  });
});

const getOptionsForType = (type: OptionType): Option[] => {
  return [{ value: type, label: getValueOption(type) }, ...optionsFilter.value];
};

const getValueOption = (type: OptionType): string => {
  return options.find(({ value }) => value == type)?.label ?? "";
};

const addContact = () => {
  const optionsArry = options.map((item) => item.value);
  const contactsArry = userData.value.contacts.map((item) => item.type);
  const freeItems = optionsArry.filter((item) => !contactsArry.includes(item));
  if (freeItems.length) {
    userData.value.contacts.push({ type: freeItems[0], value: "", hide: true });
  }
};

const deleteContact = (type: OptionType) => {
  userData.value.contacts = userData.value.contacts.filter(
    (item) => item.type != type
  );
};

const hideContact = (type: OptionType) => {
  userData.value.contacts = userData.value.contacts.map((item) => {
    if (type === item.type) {
      return { ...item, hide: false };
    } else {
      return item;
    }
  });
};

const visibleContact = (type: OptionType) => {
  userData.value.contacts = userData.value.contacts.map((item) => {
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

// const isFormDirty = computed(() => {
//   return (
//     JSON.stringify(userDataDefault.value) !== JSON.stringify(userData.value)
//   );
// });

const rules: Record<string, Rule[]> = {
  email: [
    {
      type: "email",
      trigger: "change",
      message: "Пожалуйста, введите корректный адрес электронной почты.",
    },
    { required: true, message: "Электронная почта обязательна" },
  ],

  name: [
    {
      required: true,
      trigger: "change",
      message: "Имя обязательно",
    },
  ],
  surname: [
    {
      required: true,
      trigger: "change",
      message: "Фамилия обязательна",
    },
  ],
  patronymic: [
    {
      required: true,
      trigger: "change",
      message: "Отчество обязательно",
    },
  ],
  location: [
    {
      required: true,
      trigger: "change",
      message: "Выбор города обязателен",
    },
  ],
};

const getContactValueRules = (contact: Contact): Rule[] => {
  const rules: Rule[] = [];
  switch (contact.type) {
    case "email":
      rules.push(
        {
          type: "email",
          message: "Введите корректный адрес электронной почты",
        },
        { required: true, message: "Электронная почта обязательна" }
      );
      break;
    case "phone":
      rules.push(
        {
          pattern: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
          message: "Введите корректный номер телефона",
        },
        { required: true, message: "Телефон обязателен" }
      );
      break;
    case "vk":
    case "tg":
    case "site":
      rules.push(
        { type: "url", message: "Введите корректный URL" },
        { required: true, message: "Это поле обязательно" }
      );
      break;
  }
  return rules;
};
</script>

<template>
  <div class="user-profile">
    <div class="title-profile">Мой профиль</div>
    <a-form
      :rules="rules"
      :model="userData"
      name="basic"
      class="form-user"
      layout="vertical"
      label-wrap="true"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <div class="fio">
          <a-form-item name="name" label="Имя">
            <a-input
              v-model:value="userData.name"
              placeholder="Введите имя"
              allow-clear
            />
          </a-form-item>
          <a-form-item name="surname" label="Фамилия">
            <a-input
              v-model:value="userData.surname"
              placeholder="Введите фамилию"
              allow-clear
            />
          </a-form-item>

          <a-form-item name="patronymic" label="Отчество">
            <a-input
              v-model:value="userData.patronymic"
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
        <div v-for="(contact, i) in userData.contacts" :key="i" class="select">
          <a-form-item :name="['contacts', i, 'type']">
            <a-select
              v-model:value="contact.type"
              :options="getOptionsForType(contact.type)"
            ></a-select>
          </a-form-item>

          <a-form-item
            :name="['contacts', i, 'value']"
            :rules="getContactValueRules(contact)"
          >
            <a-input
              :key="contact.type"
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
  max-width: 636px;
  padding: 24px 60px 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.fio {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 14px;
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
  font-weight: 500;
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
