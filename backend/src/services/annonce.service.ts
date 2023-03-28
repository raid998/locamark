import { Document, Types ,ObjectId} from "mongoose";
import { User } from "../model/user.model";
import { Annonce, IAnnonce } from "../model/annonce.model";
import { CreateAnnonceInput } from "../schemas/annonce.schema";

export const createAnnonce = async (data: CreateAnnonceInput, user: any) => {
  const annonce = new Annonce({
    ...data,
    codePostal: data.code_postal,
    user: user.id,
  });
  return annonce.save();
};

export const getAllAnnonces = ( limit: number, skipIndex: number) => {
  return Annonce.find().populate({ path: "user" }).limit(limit).skip(skipIndex).exec();
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

export const getAnnonceById = (id: string) => {
  return Annonce.findById(id).populate({ path: "user" }).exec();
};

export const updateAnnonce = async (data: IAnnonce, id: string) => {
  try {
    await Annonce.findByIdAndUpdate(id, data);
    return true;
  } catch {
    return false;
  }
};

export const deleteAnnonce = async (id: string) => {
  const annonce = await Annonce.findById(id);
  await annonce?.deleteOne();
};

export const countAnnonces =  () => {
  return Annonce.countDocuments()
}
export const countMesAnnonces = (user: { _id: any; }) => {
  return Annonce.find({user: user._id}).countDocuments()
}