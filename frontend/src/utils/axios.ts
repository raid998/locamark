import axios from "axios";
import { logout } from "../features/userSlice";
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

axiosPrivate.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response && err.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);
