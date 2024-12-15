import api from "@/app/api/apiConfig";
import { UserProfileFillingType } from "../types";

const apiPath = "/api/v1/users";

//* ProfileInfo Api

export const fillUserProfile = async (data: UserProfileFillingType) => {
  try {
    const response = await api.post(`${apiPath}/profile`, data);
    console.log("fill_profile", response);
    return response;
  } catch (error) {
    console.log("fill_profile error", error);
    return Promise.reject(error);
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get(`${apiPath}/profile`);
    console.log("get_profile", response);
    return response;
  } catch (error) {
    console.log("get_profile error", error);
    return Promise.reject(error);
  }
};

export const updateUserProfile = async () => {};

export const updateProfileAvatar = async () => {};

export const deleteUserProfile = async () => {};

//* ContactInfo Api

export const addContact = async () => {};

export const getContacts = async () => {};

export const updateContact = async () => {};

export const deleteContact = async () => {};
