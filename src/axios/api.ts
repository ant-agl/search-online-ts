import axios from "axios";

export default axios.create({
  baseURL: "http://api.найти.онлайн:8000",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": localStorage.getItem("token"),
    // Authorization: "Basic " + localStorage.token ?? "",
    // "x-authorization-entity": localStorage.token ? "session" : "",
  },
});
