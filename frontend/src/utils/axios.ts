import axios from "axios";
import { store } from "../store";
export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api",
});
export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api",
});

axiosPrivate.interceptors.request.use(
  async (request) => {
    const user = store.getState()?.user?.user;
    if (user?.token) {
      request.headers.setAuthorization("Bearer " + user?.token);
      return request;
    }
    // à rajouter dispatch(logout())
    throw new Error("déconnecté");
  },
  (err) => Promise.reject(err)
);
