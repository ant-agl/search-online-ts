export interface UserProfileFillingType {
  city_id: number;
  type: string;
  contacts: UserProfileContactsType;
  main_category?: Array<number>;
  company_data?: CompanyData;
}

export interface UserProfileContactsType {
  type?: string;
  is_hidden: boolean;
}

export interface AddContact extends UserProfileContactsType {
  value: string;
}

export interface UpdateContact extends UserProfileContactsType {
  new_value: string;
}

export interface CompanyData {
  type: string;
  companyName: string;
  companyDescription: string;
  legalAddress: string;
  inn: string;
  ogrn: string;
  ogrnip: string;
  kpp: string;
}

// export interface UserData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   location?: object;
//   selectCity?: string;
//   hideNumber: boolean;
//   img: string;
//   vk?: string;
//   tg?: string;
//   tel?: string;
// }

// export interface AuthIn {
//   email: string;
//   password: string;
//   remember?: boolean;
// }

// export interface CodeCheck {
//   code: string;
// }

// export interface UserRegistration {
//   first_name: string;
//   last_name: string;
//   password: string;
//   email: string;
// }

// export interface UserRegistrationFormState {
//   hideNumber: boolean;
//   selectCity: string;
//   vk: string;
//   tg: string;
//   tel: string;
// }

// export interface OrgRegistrationFormState {
//   selectOrg: string;
//   name: string;
//   descriptionCompany: string;
//   inn: string;
//   kpp: string;
//   ogrn: string;
//   ogrnIp: string;
//   addressUr: string;
// }

// export interface UserOrganization {
//   name: string;
//   address: string;
//   location: object;
//   inn: string;
//   email: string;
//   phone: string;
//   about: string;
//   category: string;
//   img: string;
// }

// export interface RegistrationUser {
//   fio: string;
//   password: string;
//   checkPassword: string;
//   email: string;
// }

// export interface RepairEmail {
//   email: string;
// }
