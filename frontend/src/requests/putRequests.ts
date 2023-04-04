import { IAnnonce, IUser } from "../types";
import { axiosPrivate } from "../utils/axios";

export const editAnnonceRequest = async (
  id: string,
  data: FormData
) => {
  return axiosPrivate.put("/annonces/" + id, data);
};

export const editProfilRequest = async (id: string, data: Partial<IUser>) => {
  return axiosPrivate.put("/users/" + id, data);
};
