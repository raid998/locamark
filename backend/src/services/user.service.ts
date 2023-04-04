import { IUser, User } from "../model/user.model";
import bcrypt from "bcrypt"
export const getUserById = (id: string) => {
  return User.findById(id);
};

export const updateUser = async (data: IUser, id: string) => {
  try {
    if (!data.password.length) {
      await User.findByIdAndUpdate(id, data);
      return true
    }
    const user = await User.findById(id)
    const oldPassword = (data as any).oldPassword as string
    const samePassword = await bcrypt.compare(oldPassword, user?.password as string)
    if(samePassword) {
      delete (data as any).oldPassword
      user?.updateOne(data)
      await user?.save()
      return true
    }
    return false;
  } catch (err) {
    console.log(err);

    return false;
  }
};
