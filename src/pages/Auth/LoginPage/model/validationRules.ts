import { Rule } from "ant-design-vue/es/form";
import GlobalTexts from "@/app/locale";

export const rules: Record<string, Rule[]> = {
  password: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.passwordRequired,
    },
  ],

  email: [
    {
      required: true,
      type: "email",
      trigger: "blur",
      message: GlobalTexts.validation.invalidEmail,
    },
  ],
};
