export interface CategoryModel {
  id: number;
  name: string;
  parent_id?: number;
  on_moderating: boolean;
  disabled: false;
  children?: CategoryModel[];
}
