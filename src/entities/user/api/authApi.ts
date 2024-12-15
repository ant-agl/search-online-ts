import api from "@/app/api/apiConfig";
import {
  UserRegistrationType,
  UserLoginType,
  RepairPasswordType,
  NewPasswordType,
} from "../types";
import { UserRegistrationModel, UserLoginModel } from "../models";

const apiAuthPath = "/auth";
const apiAuthPasswordPath = `${apiAuthPath}/password`;
const apiProfilePath = "/api/v1/users";

export const registerUserApi = async (data: UserRegistrationType) => {
  try {
    const response = await api.post<UserRegistrationModel>(
      `${apiProfilePath}/register`,
      data
    );
    console.log("registration", response);
    return response;
  } catch (error) {
    console.log("registration_user error", error);
    return Promise.reject(error);
  }
};

export const loginUserApi = async (data: UserLoginType) => {
  try {
    const response = await api.post<UserLoginModel>(
      `${apiAuthPath}/token`,
      data
    );
    console.log("login", response);
    return response;
  } catch (error) {
    console.log("login_user error", error);
    return Promise.reject(error);
  }
};

export const repairPasswordApi = async (emailData: RepairPasswordType) => {
  try {
    const res = await api.post(`${apiAuthPasswordPath}/repair`, emailData);
    console.log("repair is success", res);
  } catch (error) {
    console.log("repair_password error", error);
    return Promise.reject(error);
  }
};

export const newPasswordApi = async (data: NewPasswordType) => {
  try {
    const res = await api.post(`${apiAuthPasswordPath}/new`, data);
    console.log("new_password recieved", res);
  } catch (error) {
    console.log("new_password error", error);
    return Promise.reject(error);
  }
};
