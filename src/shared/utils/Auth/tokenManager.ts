import api from "@/app/api/apiConfig";

export const refreshToken = async () => {
  try {
    const data = {
      refresh_token: localStorage.refresh_token,
    };
    const response = await api.post("/auth/refresh", data);
    console.log("refresh_token", response);
    setToken(response.data.access_token, response.data.refresh_token);
  } catch (error) {
    console.log("refresh_token error", error);
    return Promise.reject(error);
  }
};

export const setToken = (access_token: string, refresh_token: string) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
