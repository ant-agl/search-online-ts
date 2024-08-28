export interface AuthIn {
  email: string;
  password: string;
  remember?: boolean;
}

export interface UserData {
  email: string;
  name?: string;
  location?: object;
  hideNumber: boolean;
  img: string;
  vk?: string;
  tg?: string;
  selectCity?: string;
  tel?: string;
}
export interface CodeCheck {
  code: string;
}
export interface UserRegistration {
  email: string;
  name: string;
  password: string;
}
export interface UserRegistrationFormState {
  selectCity: string;
  vk: string;
  tg: string;
  tel: string;
  hideNumber: boolean;
}
export interface OrgRegistrationFormState {
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

export interface UserOrganization {
  name: string;
  address: string;
  location: object;
  inn: string;
  email: string;
  phone: string;
  about: string;
  category: string;
  img: string;
}

export interface RegistrationUser {
  pass: string;
  checkPass: string;
  email: string;
  fio: string;
}
