import { axiosPrivate } from "../utils/axios";

export const getAllAnnoncesRequest = (currentPage: number) => {
  return axiosPrivate.get("/annonces?page=" + currentPage);
};

export const getMesAnnoncesRequest = (id: string, currentPage: number) => {
  return axiosPrivate.get("/users/" + id + "/annonces?page=" + currentPage);
};

export const getAnnonceContentRequest = (id: string) => {
  return axiosPrivate.get("/annonces/" + id);
};

export const getMonProfilRequest = (id: string) => {
  return axiosPrivate.get("/users/" + id + "/mon-profil");
};

export const getProfilContentRequest = (id: string) => {
  return axiosPrivate.get("/mon-profil/" + id);
};
