import axios from "axios";

export default axios.create({
  baseURL: "https://search-api.ant-agl.ru",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": localStorage.getItem("token"),
    // Authorization: "Basic " + localStorage.token ?? "",
    // "x-authorization-entity": localStorage.token ? "session" : "",
  },
});
