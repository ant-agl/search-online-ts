interface ErrorResponse {
  response?: {
    data: {
      detail?: string;
    };
  };
}
interface AuthIn {
  email: string;
  password: string;
}

interface AuthUp {
  name: string;
  email: string;
  password: string;
}
interface UserData {
  name: string;
  email: string;
  phone: string;
  location: object;
  hideNumber: boolean;
  img: string;
  vk: string;
  tg: string;
}

interface UserOrganization {
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

interface State {
  userData: UserData;
  userOrganization: UserOrganization;
}
