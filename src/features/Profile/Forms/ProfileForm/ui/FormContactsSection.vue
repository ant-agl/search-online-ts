<script setup lang="ts">
import { computed } from "vue";
import { InputField } from "@/shared/ui";
import {
  UserFormState,
  Option,
  OptionType,
  getContactValueRules,
} from "../model";

const props = defineProps<{
  userData: UserFormState;
}>();

const userData = computed(() => props.userData);

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
</script>

<template>
  <a-flex class="contacts">
    <div>
      Контактная информация
      <img @click="addContact" src="@/assets/img/menuProfile/plus.svg" alt="" />
    </div>
    <a-flex
      v-for="(contact, i) in userData.contacts"
      :key="i"
      class="select"
      justify="center"
      align="center"
    >
      <a-form-item :name="['contacts', i, 'type']">
        <a-select
          v-model:value="contact.type"
          :options="getOptionsForType(contact.type)"
        ></a-select>
      </a-form-item>

      <InputField
        v-model:value.trim="contact.value"
        v-mask="contact.type === 'phone' ? '+7 (###) ###-##-##' : ''"
        :key="contact.type"
        :name="['contacts', i, 'value']"
        :rules="getContactValueRules(contact)"
        :placeholder="$t.profile.enter"
        allow-clear
      />

      <a-flex class="button-contacts" justify="center" align="start">
        <div class="contact-visible">
          <img
            v-show="contact.hide"
            src="@/assets/img/menuProfile/visible.svg"
            class="visible"
            @click="hideContact(contact.type)"
          />
          <img
            v-show="!contact.hide"
            src="@/assets/img/menuProfile/hide-visible.svg"
            @click="visibleContact(contact.type)"
            class="hide"
          />
        </div>

        <img
          class="contact-delete"
          @click="deleteContact(contact.type)"
          src="@/assets/img/menuProfile/delete-profile.svg"
          alt=""
        />
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style scoped lang="scss">
.contacts {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 14px;
  margin-bottom: 24px;

  & img {
    cursor: pointer;
  }
}

.select {
  display: grid;
  width: 100%;
  grid-template-columns: 1.4fr 1.4fr 0.2fr;
  gap: 14px;
}

.button-contacts {
  gap: 3px;
}

.contact-visible,
.contact-delete {
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    border-color: var(--color-primary);
  }
}

:deep(.ant-form-item) {
  margin: 0;
}

@media (max-width: 700px) {
  .select {
    grid-template-columns: 1fr;
  }
}
</style>
