import { axiosPrivate } from "../utils/axios";

export const deleteAnnonceRequest = (id: string) => {
  return axiosPrivate.delete("annonces/" + id);
};
