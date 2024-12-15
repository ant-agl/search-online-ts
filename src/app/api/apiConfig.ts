import axios from "axios";
import { errorMessage, toCamelCase } from "@/shared/utils";

const api = axios.create({
  baseURL: "https://api.найти.онлайн",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": localStorage.getItem("access_token"),
    // Authorization: "Basic " + localStorage.token ?? "",
    // "x-authorization-entity": localStorage.token ? "session" : "",
  },
});

api.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = toCamelCase(response.data);
    }
    return response;
  },
  (err) => {
    if (err.status == 401) {
      //TODO Нужно сбрасывать [token] если ошмбка: Unauthorized
      // removeToken();
      // setToken("");
      // location.reload();
    } else {
      const message = err.response?.data?.message;
      if (message) {
        console.error("Error Message:", message);
        errorMessage(message);
      } else {
        console.error(
          "Response data does not contain a message:",
          err.response?.data
        );
        errorMessage("Что-то пошло не так...");
      }
    }
    return Promise.reject(err);
  }
);

export const setToken = (token: string) => {
  if (!token) localStorage.removeItem("token");
  else localStorage.token = token;

  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export default api;
