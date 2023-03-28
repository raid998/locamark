import { TypeOf, z } from "zod";

export const registerSchema = z.object({
  nom: z.string().max(20).min(1, { message: "Veuillez entrer votre nom" }),
  prenom: z
    .string()
    .max(20)
    .min(1, { message: "Veuillez entrer votre prénom" }),
  email: z.string().email({ message: "Veuillez entrer votre email" }),
  password: z
    .string()
    .max(32)
    .min(8, { message: "Veuillez entrer un mot de passe" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer un email valide" }),
  password: z
    .string()
    .min(1, { message: "Veuillez entrer votre mot de passe" }),
});

export const updateProfilSchema = z.object({
  nom: z
    .string()
    .max(20)
    .min(1, { message: "Veuillez entrer votre nom" })
    .optional(),
  prenom: z
    .string()
    .max(20)
    .min(1, { message: "Veuillez entrer votre prénom" })
    .optional(),
  email: z
    .string()
    .email({ message: "Veuillez entrer votre email" })
    .optional(),
  password: z
    .string()
    .max(32)
    .min(8, { message: "Veuillez entrer un mot de passe" })
    .optional(),
});

export type LoginSchema = TypeOf<typeof loginSchema>;
export type RegisterSchema = TypeOf<typeof registerSchema>;
export type UpdateProfilSchema = TypeOf<typeof updateProfilSchema>;
