import { LoginSchema, RegisterSchema } from "../schemas/user.schema";
import { axiosPublic } from "../utils/axios";

export const loginRequest = async (data: LoginSchema) => {
  return axiosPublic.post("/auth/login", data);
};

export const registerRequest = async (data: RegisterSchema) => {
  return axiosPublic.post("/auth/register", data);
};
