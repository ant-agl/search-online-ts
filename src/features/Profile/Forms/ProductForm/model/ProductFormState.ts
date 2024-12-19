import { UploadFile } from "ant-design-vue";

export interface ProductFormState {
  select: "item" | "service";
  categories: Array<string>;
  productTitle: string;
  productDescription: string;
  priceSelect: "fix" | "range";
  fixPrice: number;
  minPrice: number;
  maxPrice: number;
  delivery: boolean;
  productionTime: ProductionTimeType;
  commentary: string;
  images: Array<UploadFile>;
}

interface ProductionTimeType {
  fromTime: string;
  toTime: string;
}
