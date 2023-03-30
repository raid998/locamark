import { NextFunction, RequestHandler } from "express";
import { getUserById } from "../services/user.service";
import { User } from "../model/user.model";
import { createAnnonceSchema } from "../schemas/annonce.schema";
import {
  countAnnonces,
  countMesAnnonces,
  createAnnonce,
  deleteAnnonce,
  getAllAnnonces,
  getAnnonceById,
  pushAnnonce,
  updateAnnonce,
} from "../services/annonce.service";
import { signUser } from "../services/auth.service";

export const createAnnonceController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    // Extraire les données reçues de l'annonce
    const photos = []
    for (let i = 0; i < (req.files?.length as number ) ; i++) {
      photos.push((req.files as Express.Multer.File[])[i].path)
    }
    const annonceData = createAnnonceSchema.strip().safeParse({...req.body, photos});
    if (!annonceData.success)
      return res.status(400).send({
        message:
          "Les données que vous avez saisies sont erronées, veuillez réessayer.",
      });
    // Créer une nouvelle entité annonce
    const { user } = res.locals;
    
    const annonce = await createAnnonce(
      {...annonceData.data, photos},
      await User.findOne({ email: user.email })
    );
    await pushAnnonce(annonce, user.email);

    return res.send({
      message: "Annonce créée avec succès",
      user: await signUser(user.email), // ça pourrait changer
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAnnoncesController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = 5
    const skipIndex = (page - 1)*limit
    const annonces = await getAllAnnonces( limit, skipIndex);
    const count = await countAnnonces()
    return res.send({annonces, totalPages: Math.ceil(count/limit)});
  } catch (err) {
    next(err);
  }
};

export const getAnnoncesByUserIdController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const id = req.params.id;
    const page = parseInt(req.query.page as string) || 1
    const limit = 5
    const skipIndex = (page - 1)*limit
    const user = await getUserById(id)
      .populate({ path: "annonces", populate: { path: "user" }, options: {skip: skipIndex, limit} })
      .exec();
      const count = await countMesAnnonces(res.locals.user);
    console.log(user)
    return res.send({annonces: user?.annonces, totalPages: Math.ceil(count/limit)});
  } catch (err) {
    next(err);
  }
};

export const getAnnonceByIdController: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const annonce = await getAnnonceById(id);
    return res.send(annonce);
  } catch (err) {
    return next(err);
  }
};

export const editAnnonceController: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  const id = req.params.id;
  const data = req.body;

  const updateStatus = await updateAnnonce(data, id);
  if (updateStatus) return res.sendStatus(200);
  return res.sendStatus(400);
};

export const deleteAnnonceController: RequestHandler = async (req, res) => {
  const annonceId = req.params.id;
  try {
    await deleteAnnonce(annonceId);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};
