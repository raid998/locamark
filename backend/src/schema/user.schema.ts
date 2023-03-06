import { z } from "zod";

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
    .max(32)
    .min(8, { message: "Veuillez entrer votre mot de passe" }),
});
