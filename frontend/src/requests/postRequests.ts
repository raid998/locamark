import { CreateAnnonceInput } from "../schemas/annonce.schema";
import { LoginSchema, RegisterSchema } from "../schemas/user.schema";
import { axiosPrivate, axiosPublic } from "../utils/axios";

export const loginRequest = (data: LoginSchema) => {
  return axiosPublic.post("/auth/login", data);
};

export const registerRequest = (data: RegisterSchema) => {
  return axiosPublic.post("/auth/register", data);
};

export const createAnnonceRequest = (data: CreateAnnonceInput) => {
  return axiosPrivate.post("/annonces", data);
};
