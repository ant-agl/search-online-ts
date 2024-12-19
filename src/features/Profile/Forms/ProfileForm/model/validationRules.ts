import { Rule } from "ant-design-vue/es/form";
import GlobalTexts from "@/app/locale";
import { Contact } from "./UserFormState";

export const userRules: Record<string, Rule[]> = {
  firstName: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.nameRequired,
    },
  ],
  lastName: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.lastNameRequired,
    },
  ],
  patronymic: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.patronymicRequired,
    },
  ],
  location: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.cityRequired,
    },
  ],
  email: [
    {
      required: true,
      message: GlobalTexts.validation.emailRequired,
    },
    {
      type: "email",
      trigger: "change",
      message: GlobalTexts.validation.invalidEmail,
    },
  ],
};

export const getContactValueRules = (contact: Contact): Rule[] => {
  const rules: Rule[] = [];
  switch (contact.type) {
    case "email":
      rules.push(
        {
          type: "email",
          message: GlobalTexts.validation.invalidEmail,
        },
        { required: true, message: GlobalTexts.validation.emailRequired }
      );
      break;
    case "phone":
      rules.push(
        {
          pattern: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
          message: GlobalTexts.validation.invalidPhone,
        },
        { required: true, message: GlobalTexts.validation.phoneRequired }
      );
      break;
    case "vk":
    case "tg":
    case "site":
      rules.push(
        { type: "url", message: GlobalTexts.validation.invalidLink },
        { required: true, message: GlobalTexts.validation.fieldRequired }
      );
      break;
  }
  return rules;
};
