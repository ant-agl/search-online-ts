export interface UserProfileModel {
  id: number;
  info: UserProfileInfo;
  city: string;
  avatar: string;
  contacts: UserProfileContacts;
  legalInfo?: UserProfileLegalInfo;
  rating?: number;
  fullFilled: boolean;
  isBlocked?: boolean;
  updated_at: string;
}

export interface UserProfileInfo {
  firstName: string;
  lastName: string;
  middleName: string;
  types: Array<string>;
}

export interface UserProfileContacts {
  id: 0;
  type: string;
  value: string;
  isHidden: boolean;
}

export interface UserProfileLegalInfo {
  type: string;
  companyName: string;
  companyDescription: string;
  legalAddress: string;
  inn: string;
  ogrn: string;
  ogrnip: string;
  kpp: string;
}
