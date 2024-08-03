interface OrgRegistrationFormState {
  selectOrg: string;
  selectCategory: string;
  selectCity: string;
  nameCompany: string;
  adresStore: string;
  descriptionCompany: string;
  vk: string;
  tg: string;
  tel: string;
  name: string;
  inn: string;
  kpp: string;
  ogrn: string;
  ogrnIp: string;
  adressUr: string;
}
interface FormAuthInFormState {
  email: string;
  password: string;
  remember: boolean;
}
interface UserRegistrationFormState {
  selectCity: string;
  vk: string;
  tg: string;
  tel: string;
  hideNumber: boolean;
}
export {
  OrgRegistrationFormState,
  FormAuthInFormState,
  UserRegistrationFormState,
};
