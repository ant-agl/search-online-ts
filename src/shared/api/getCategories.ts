import api from "@/app/api/apiConfig";
import { CategoryModel } from "../model";
import { CategoriesFormState } from "../types";

export const getCategory = async (param: "item" | "service") => {
  try {
    const response = await api.get<{ result: CategoryModel[] }>(
      "/common/category/tree",
      {
        params: {
          t: param,
        },
      }
    );
    console.log("get_category", response);
    const cities = convertModelToType(response.data.result);
    return cities;
  } catch (error) {
    console.log("get_cities error", error);
    return Promise.reject(error);
  }
};

const convertModelToType = (
  category: CategoryModel[]
): CategoriesFormState[] => {
  return category.map((item: CategoryModel) => ({
    value: item.id.toString(),
    label: item.name,
    disabled: item.disabled,
    children: convertModelToType(item.children || []),
  }));
};
