import { defineStore } from "pinia";
// import { reactive, computed } from "vue";

import * as authUtils from "@/shared/utils/Auth";

import api from "@/app/api/apiConfig";

import * as types from "../types";
import * as authApi from "../api/authApi";
import * as profileApi from "../api/profileApi";

// interface State {
//   isAuth: boolean;
//   userData: UserData;
//   userOrganization: UserOrganization;
// }

// const initialState: State = {
//   isAuth: true,
//   userData: {
//     firstName: "Джеки",
//     lastName: "Чан",
//     email: "Djeki@mail.ru",
//     tel: "+7 (938) 526-97-83",
//     location: { value: "", label: "" },
//     hideNumber: false,
//     vk: "https://vk.com",
//     tg: "https://tg.me",
//     img: "",
//   },
//   userOrganization: {
//     name: "Night City",
//     address: "Rublevka",
//     location: {},
//     inn: "213-123-123 55",
//     email: "Night@mail.ru",
//     phone: "+7 (938) 526-97-83",
//     about: "It is Cool company",
//     category: "",
//     img: "",
//   },
// };

export const useUserStore = defineStore("user", () => {
  // Состояние
  // const state = reactive(initialState);

  // Геттеры
  // const getUserOrganization = computed(() => state.userOrganization);

  // Actions
  // const updateUserData = (payload: Partial<UserData>) => {
  //   state.userData = { ...state.userData, ...payload };
  // };

  // const updateUserImg = (payload: string) => {
  //   console.log(payload);
  //   state.userData.img = payload;
  // };

  const setAuthToken = (accessToken: string, refreshToken: string) => {
    authUtils.setToken(accessToken, refreshToken);
    // state.isAuth = true;
  };

  const removeAuthToken = () => {
    authUtils.removeToken();
    // state.isAuth = false;
  };

  const loginUser = async (data: types.UserLoginType) =>
    authApi.loginUserApi(data);

  const repairPassword = async (emailData: types.RepairPasswordType) =>
    authApi.repairPasswordApi(emailData);

  const newPassword = async (data: types.NewPasswordType) =>
    authApi.newPasswordApi(data);

  const registrationUserData = async (data: types.UserRegistrationType) =>
    authApi.registerUserApi(data);

  const getUserData = async () => {
    return profileApi.getUserProfile();
  };

  // const authActivate = async (data: CodeCheck) => {
  //   console.log(data);
  //   try {
  //     const response = await api.post("/registration/activate", data);
  //     console.log("activate", response);
  //     return response;
  //   } catch (error) {
  //     console.log("activate_user error", error);
  //     return Promise.reject(error);
  //   }
  // };

  // const userResetPassword = async (data: RepairEmail) => {
  //   console.log(data);
  //   try {
  //     const response = await api.post("/auth/password/repair", data);
  //     console.log("recover_password", response);
  //     return response;
  //   } catch (error) {
  //     console.log("recover_password error", error);
  //     return Promise.reject(error);
  //   }
  // };

  // const userRecoverPassword = async (data: CodeCheck) => {
  //   console.log(data);
  //   try {
  //     const response = await api.post("/registration/recover_password", data);
  //     console.log("recover_password", response);
  //     return response;
  //   } catch (error) {
  //     console.log("recover_password error", error);
  //     return Promise.reject(error);
  //   }
  // };

  // const login = async (data: AuthIn) => {
  //   console.log(data);
  //   try {
  //     const response = await api.post("/auth/token", data);
  //     console.log("login", response);
  //     return response;
  //   } catch (error) {
  //     console.log("login error", error);
  //     return Promise.reject(error);
  //   }
  // };

  const searchCity = async (data: object) => {
    try {
      const response = await api.post("/city/search", data);
      console.log("city", response);
      return response;
    } catch (error) {
      console.log("search city error", error);
      return Promise.reject(error);
    }
  };

  const getCities = async () => {
    try {
      const response = await api.get("/common/cities");
      console.log("get city", response);
      return response;
    } catch (error) {
      console.log("get city error", error);
      return Promise.reject(error);
    }
  };

  // Возвращаем состояние, геттеры и экшены
  return {
    // state,
    // getUserOrganization,
    // updateUserData,
    // updateUserImg,
    loginUser,
    repairPassword,
    newPassword,
    registrationUserData,
    setAuthToken,
    removeAuthToken,
    getUserData,
    // authActivate,
    // userResetPassword,
    // userRecoverPassword,
    // login,
    searchCity,
    getCities,
  };
});
