export interface UserRegistrationType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserLoginType {
  email: string;
  password: string;
}

export interface RepairPasswordType {
  email: string;
}

export interface NewPasswordType {
  verification_code: string;
  new_password: string;
}
