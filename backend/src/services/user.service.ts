import { User } from "../model/user.model"

export const getUserById = (id: string) => {
    return User.findById(id)
}