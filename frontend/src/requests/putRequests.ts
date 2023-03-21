import { IAnnonce } from "../types";
import { axiosPrivate } from "../utils/axios";

export const editAnnonceRequest = async (id: string, data: Partial<IAnnonce>) => {
    return axiosPrivate.put("/annonces/" + id, data);
}