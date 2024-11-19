import axios from "axios";

export default axios.create({
  baseURL: "https://api.найти.онлайн",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": localStorage.getItem("access_token"),
    // Authorization: "Basic " + localStorage.token ?? "",
    // "x-authorization-entity": localStorage.token ? "session" : "",
  },
});
