import { TypeOf, z } from "zod";

export const createAnnonceSchema = z.object({
  titre: z
    .string()
    .min(1, {
      message: "Il faut un titre pour l'annonce",
    })
    .max(150, { message: "Vous ne devez pas dépasser 150 caractères" }),
  description: z
    .string({ required_error: "Il faut une description pour l'annonce" })
    .min(1, {
      message: "Il faut une description pour l'annonce",
    })
    .max(1500, { message: "Vous ne devez pas dépasser 1500 caractères" }),
  adresse: z
    .string()
    .min(1, {
      message: "Veuillez indiquer une adresse",
    })
    .max(200, { message: "Vous ne devez pas dépasser 200 caractères" }),
  complement_adresse: z
    .string()
    .max(200, { message: "Vous ne devez pas dépasser 200 caractères" })
    .optional(),
  code_postal: z
    .string()
    .regex(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/, {
      message: "Code postal erroné",
    })
    .min(5)
    .max(5),
  ville: z
    .string()
    .min(1, { message: "Veuillez indiquer votre ville" })
    .max(40, { message: "Vous ne devez pas dépasser 40 caractères" }),
  telephone: z
    .string()
    .regex(/^0(6|7|9)\d{8}$/, { message: "Le numéro est erroné" }),
});
export type CreateAnnonceInput = TypeOf<typeof createAnnonceSchema>;
