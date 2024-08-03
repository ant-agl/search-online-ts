import { ActionContext } from "vuex";
import api from "@/axios/api";

// Начальное состояние
const state: State = {
  userData: {
    name: "Джеки Чан",
    email: "Djeki@mail.ru",
    phone: "+7 (938) 526-97-83",
    location: { value: "615", label: "Москва, Москва" },
    hideNumber: false,
    vk: "https://vk.com",
    tg: "https://tg.me",
    img: require("@/assets/images/user/nofoto.png"),
  },
  userOrganization: {
    name: "Night City",
    address: " Rublevka",
    location: {},
    inn: "213-123-123 55",
    email: "Night@mail.ru",
    phone: "+7 (938) 526-97-83",
    about: "It is Cool company",
    category: "",
    img: require("@/assets/images/user/nofoto.png"),
  },
};

// Типизация геттеров
const getters = {
  userData: (s: State) => s.userData,
  userOrganization: (s: State) => s.userOrganization,
};

// Типизация мутаций
const mutations = {
  updateUserData(state: State, payload: Partial<UserData>) {
    state.userData = { ...state.userData, ...payload };
  },
  updateUserImg(state: State, payload: string) {
    console.log(payload);
    state.userData.img = payload;
  },
};

// Типизация экшенов
const actions = {
  async registrationUserData(
    context: ActionContext<State, State>,
    data: AuthUp
  ) {
    console.log(data);
    try {
      const response = await api.post("/registration", data);
      console.log("registration", response);
      return response;
    } catch (error) {
      console.log("registration_user error", error);
      return Promise.reject(error);
    }
  },
  async authActivate(context: ActionContext<State, State>, data: string) {
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
  async userResetPassword(context: ActionContext<State, State>, data: string) {
    console.log(data);
    try {
      const response = await api.post(
        "/registration/recover_password_query",
        data
      );
      console.log("recover_password", response);
      return response;
    } catch (error) {
      console.log("recover_password error", error);
      return Promise.reject(error);
    }
  },
  async userRecoverPassword(
    context: ActionContext<State, State>,
    data: string
  ) {
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
  async login(context: ActionContext<State, State>, data: AuthIn) {
    console.log(data);
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("token", response.data.token);
      console.log("login", response);
      return response;
    } catch (error) {
      console.log("login error", error);
      return Promise.reject(error);
    }
  },
  async searchCity(context: ActionContext<State, State>, data: string) {
    try {
      const response = await api.post("/city/search", data);
      console.log("city", response);
      return response;
    } catch (error) {
      console.log("search city error", error);
      return Promise.reject(error);
    }
  },
  async getCity(context: ActionContext<State, State>, data: number) {
    try {
      const response = await api.post("/city/get", data);
      console.log("get city", response);
      return response;
    } catch (error) {
      console.log("get city error", error);
      return Promise.reject(error);
    }
  },
};

// Экспорт модуля Vuex
export default {
  state,
  getters,
  mutations,
  actions,
};
