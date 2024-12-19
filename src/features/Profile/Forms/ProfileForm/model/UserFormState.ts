import { LocationFormState } from "@/shared/types";

export interface UserFormState {
  firstName: string;
  lastName: string;
  patronymic: string;
  location: LocationFormState | null;
  email: string;
  contacts: Array<Contact>;
}

export interface Contact {
  type: OptionType;
  value: string;
  hide: boolean;
}

export interface Option {
  value: OptionType;
  label: string;
}

export type OptionType = "vk" | "tg" | "site" | "phone" | "email";
