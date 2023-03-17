import { axiosPrivate } from "../utils/axios";

export const getAllAnnoncesRequest = () => {
  return axiosPrivate.get("/annonces");
};

export const getMesAnnoncesRequest =(id: string) => {
  return axiosPrivate.get("/annonces/" + id)
}