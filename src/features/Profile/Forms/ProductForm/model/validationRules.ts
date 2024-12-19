import { Rule } from "ant-design-vue/es/form";
import GlobalTexts from "@/app/locale";

export const productCategoryRules: Record<string, Rule[]> = {
  select: [
    {
      required: true,
    },
  ],
  categories: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.categoryRequired,
    },
  ],
};

// const createPriceValidator = (field: string): Rule => ({
//   required: true,
//   validator: (rule, value) => {
//     if (
//       serviceProduct.value.priceSelect === "Фиксированная" &&
//       field === "fixPrice"
//     ) {
//       if (value <= 0) {
//         return Promise.reject("Цена не может быть меньше или равна 0");
//       }
//     } else if (
//       serviceProduct.value.priceSelect === "Диапазон" &&
//       field === "minPrice"
//     ) {
//       if (value <= 0) {
//         return Promise.reject(
//           "Минимальная цена не может быть меньше или равна 0"
//         );
//       }
//     }
//     return Promise.resolve();
//   },
//   trigger: "change",
// });

export const productAboutRules: Record<string, Rule[]> = {
  productTitle: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.titleRequired,
    },
  ],
  productDescription: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.validation.descriptionRequired,
    },
  ],
  // description: [
  //   {
  //     required: true,
  //     trigger: "change",
  //     message: GlobalTexts.validation.descriptionRequired,
  //   },
  // ],
  // priceSelect: [
  //   {
  //     required: true,
  //   },
  // ],
  // fixPrice: [createPriceValidator("fixPrice")],
  // minPrice: [createPriceValidator("minPrice")],
};
