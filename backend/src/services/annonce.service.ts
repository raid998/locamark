import { User } from "../model/user.model";
import { Document, Types } from "mongoose";
import { Annonce, IAnnonce } from "../model/annonce.model";
import type { CreateAnnonceInput } from "../schemas/annonce.schema";

export const createAnnonce = async (data: CreateAnnonceInput, user: any) => {
  const annonce = new Annonce({
    ...data,
    codePostal: data.code_postal,
    user: user.id,
  });
  return annonce.save();
};

export const getAllAnnonces = () => {
  return Annonce.find().populate({ path: "user" }).exec();
};

export const pushAnnonce = async (
  annonce: Document<unknown, {}, IAnnonce> &
    Omit<
      IAnnonce & {
        _id: Types.ObjectId;
      },
      never
    >,
  email: any
) => {
  const user = await User.findOne({ email });
  return user?.save();
};
