import { IUser, User } from "../model/user.model";

export const getUserById = (id: string) => {
  return User.findById(id);
};

export const updateUser = async (data: IUser, id: string) => {
  try {
    await User.findByIdAndUpdate(id, data);
    console.log("user updated");
    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};
