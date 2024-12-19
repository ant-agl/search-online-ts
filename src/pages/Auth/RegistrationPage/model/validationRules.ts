import { Rule } from "ant-design-vue/es/form";
import GlobalTexts from "@/app/locale";

export const rules: Record<string, Rule[]> = {
  password: [
    {
      required: true,
      message: GlobalTexts.validation.passwordRequired,
    },
    {
      min: 8,
      message: GlobalTexts.validation.minLengthEight,
    },
  ],
  email: [
    {
      required: true,
      type: "email",
      message: GlobalTexts.validation.invalidEmail,
    },
  ],
  name: [
    {
      required: true,
      message: GlobalTexts.validation.nameRequired,
    },
    {
      min: 2,
      message: GlobalTexts.validation.minLengthTwo,
    },
  ],
  surname: [
    {
      required: true,
      message: GlobalTexts.validation.lastNameRequired,
    },
    {
      min: 2,
      message: GlobalTexts.validation.minLengthTwo,
    },
  ],
};
