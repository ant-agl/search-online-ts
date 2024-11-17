import { defineStore } from "pinia";
import api from "@/axios/api";
import {
  AuthIn,
  UserData,
  UserOrganization,
  UserRegistration,
  CodeCheck,
  RepairEmail,
} from "@/types/user";

// Типизация состояния
interface State {
  isAuth: boolean;
  userData: UserData;
  userOrganization: UserOrganization;
}

// Начальное состояние
const initialState: State = {
  isAuth: true,
  userData: {
    name: "Джеки Чан",
    email: "Djeki@mail.ru",
    tel: "+7 (938) 526-97-83",
    location: { value: "", label: "" },
    hideNumber: false,
    vk: "https://vk.com",
    tg: "https://tg.me",
    img: "",
  },
  userOrganization: {
    name: "Night City",
    address: "Rublevka",
    location: {},
    inn: "213-123-123 55",
    email: "Night@mail.ru",
    phone: "+7 (938) 526-97-83",
    about: "It is Cool company",
    category: "",
    img: require("@/img/nofoto.png"),
  },
};

export const useUserStore = defineStore("user", {
  state: (): State => initialState,

  getters: {
    // Переименованный getter
    getUserOrganization: (state) => state.userOrganization,
  },

  actions: {
    updateUserData(payload: Partial<UserData>) {
      this.userData = { ...this.userData, ...payload };
    },
    updateUserImg(payload: string) {
      console.log(payload);
      this.userData.img = payload;
    },

    async registrationUserData(data: UserRegistration) {
      console.log(data);
      try {
        const response = await api.post("/api/v1/users/register", data);
        console.log("registration", response);
        return response;
      } catch (error) {
        console.log("registration_user error", error);
        return Promise.reject(error);
      }
    },

    async authActivate(data: CodeCheck) {
      console.log(data);
      try {
        const response = await api.post("/registration/activate", data);
        console.log("activate", response);
        return response;
      } catch (error) {
        console.log("activate_user error", error);
        return Promise.reject(error);
      }
    },

    async userResetPassword(data: RepairEmail) {
      console.log(data);
      try {
        const response = await api.post("/auth/password/repair", data);
        console.log("recover_password", response);
        return response;
      } catch (error) {
        console.log("recover_password error", error);
        return Promise.reject(error);
      }
    },

    async userRecoverPassword(data: CodeCheck) {
      console.log(data);
      try {
        const response = await api.post("/registration/recover_password", data);
        console.log("recover_password", response);
        return response;
      } catch (error) {
        console.log("recover_password error", error);
        return Promise.reject(error);
      }
    },

    async login(data: AuthIn) {
      console.log(data);
      try {
        const response = await api.post("/auth/token", data);

        console.log("login", response);
        return response;
      } catch (error) {
        console.log("login error", error);
        return Promise.reject(error);
      }
    },

    async searchCity(data: object) {
      try {
        const response = await api.post("/city/search", data);
        console.log("city", response);
        return response;
      } catch (error) {
        console.log("search city error", error);
        return Promise.reject(error);
      }
    },

    async getCities() {
      try {
        const response = await api.get("/common/cities");
        console.log("get city", response);
        return response;
      } catch (error) {
        console.log("get city error", error);
        return Promise.reject(error);
      }
    },
  },
});
