import { Rule } from "ant-design-vue/es/form";
import GlobalTexts from "@/app/locale";
// import { Contact } from "./UserFormState";

export const sellerRules: Record<string, Rule[]> = {
  companyName: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.fieldRequired,
    },
  ],
  companyType: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.fieldRequired,
    },
  ],
  legalAddress: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.enterLegalAddress,
    },
  ],
  inn: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.enterInn,
    },
    {
      min: 11,
      trigger: "blur",
      message: GlobalTexts.validation.invalidMinInn,
    },
    {
      max: 12,
      trigger: "blur",
      message: GlobalTexts.validation.invalidMaxInn,
    },
  ],
  ogrn: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.enterOgrn,
    },
    {
      len: 13,
      trigger: "blur",
      message: GlobalTexts.validation.invalidOgrn,
    },
  ],
  ogrnIp: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.enterOgrnIp,
    },
    {
      len: 15,
      trigger: "blur",
      message: GlobalTexts.validation.invalidOgrnIp,
    },
  ],
  kpp: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.enterKpp,
    },
    {
      len: 9,
      trigger: "blur",
      message: GlobalTexts.validation.invalidKpp,
    },
  ],
  companyDescription: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.descriptionRequired,
    },
  ],
  categories: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.validation.categoriesRequired,
    },
  ],
};

// export const getContactValueRules = (contact: Contact): Rule[] => {
//   const rules: Rule[] = [];
//   switch (contact.type) {
//     case "email":
//       rules.push(
//         {
//           type: "email",
//           message: GlobalTexts.validation.invalidEmail,
//         },
//         { required: true, message: GlobalTexts.validation.emailRequired }
//       );
//       break;
//     case "phone":
//       rules.push(
//         {
//           pattern: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
//           message: GlobalTexts.validation.invalidPhone,
//         },
//         { required: true, message: GlobalTexts.validation.phoneRequired }
//       );
//       break;
//     case "vk":
//     case "tg":
//     case "site":
//       rules.push(
//         { type: "url", message: GlobalTexts.validation.invalidLink },
//         { required: true, message: GlobalTexts.validation.fieldRequired }
//       );
//       break;
//   }
//   return rules;
// };
