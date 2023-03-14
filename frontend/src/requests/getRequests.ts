import { axiosPrivate } from "../utils/axios";

export const getAllAnnoncesRequest = () => {
  return axiosPrivate.get("/annonces");
};
