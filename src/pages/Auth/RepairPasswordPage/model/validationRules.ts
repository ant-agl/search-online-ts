import { Rule } from "ant-design-vue/es/form";
import GlobalTexts from "@/app/locale";

export const rules: Record<string, Rule[]> = {
  email: [
    {
      required: true,
      type: "email",
      message: GlobalTexts.validation.invalidEmail,
      trigger: "blur",
    },
  ],
};
