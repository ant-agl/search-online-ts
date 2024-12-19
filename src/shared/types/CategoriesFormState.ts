export interface CategoriesFormState {
  value: string;
  label: string;
  disabled?: boolean;
  children?: CategoriesFormState[];
}
