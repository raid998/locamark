import { Container } from "@mui/system";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Button, FormControl, Grid, Typography } from "@mui/material";
import "./annonces.css";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, IconButton } from "@mui/material";
import {
  CreateAnnonceInput,
  createAnnonceSchema,
} from "../../schemas/annonce.schema";
import { useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { axiosPrivate } from "../../utils/axios";
import { isValidFile } from "../../utils/filechecker";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelIcon from "@mui/icons-material/Cancel";

const AddAnnonce = () => {
  const { loading } = useAppSelector((state) => state.annonces);
  const navigate = useNavigate();
  const [selectedPhotos, setSelectedPhotos] = useState<any[]>([]);
  const [imagePreviews, setImagePreviews] = useState<any[]>([]);

  const handlePhotoUpload = (e: any) => {
    const target = e.target as HTMLInputElement;
    if (target.files?.length) {
      const file = e.target.files?.[0];
      isValidFile(file)
        .then((isValid) => {
          if (isValid) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImagePreviews([
                ...imagePreviews,
                { id: imagePreviews.length, image: reader.result },
              ]);
            };
            reader.readAsDataURL(file);
            setSelectedPhotos([...selectedPhotos, file]);
            setValue("photos", selectedPhotos);
          } else {
            // file is invalid, show error message
            setError("photos", {
              message: "Le fichier téléchargé n'est pas une image",
            });
          }
        })
        .catch(() => {
          setError("photos", {
            message:
              "Un problème est survenu lors du téléchargement de l'image",
          });
        });
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    setError,
  } = useForm<CreateAnnonceInput>({
    resolver: zodResolver(createAnnonceSchema),
  });

  useEffect(() => {
    register("description");
    register("photos");
  }, [register]);

  const description = watch("description");
  const photos = watch("photos");
  const setDescription = (description: string) => {
    setValue("description", description);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleCancelClick = (id: any) => {
    setSelectedImage(null);
    setImagePreviews(imagePreviews.filter((preview) => preview.id !== id));
  };

  return (
    <Container
      sx={{ margin: "1rem auto" }}
      component="form"
      onSubmit={handleSubmit(
        async (data) => {
          const formData = new FormData();
          formData.append("titre", data.titre);
          formData.append("description", data.description);
          formData.append("adresse", data.adresse);
          formData.append("complement_adresse", data.complement_adresse ?? "");
          formData.append("code_postal", data.code_postal);
          formData.append("ville", data.ville);
          formData.append("telephone", data.telephone);
          formData.append("prix", data.prix);
          if (data.photos)
            selectedPhotos.forEach((file: any) => {
              formData.append("photos", file);
            });
          try {
            const response = await axiosPrivate.post("/annonces", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
          } catch (error) {
            console.error(error);
          }
          toast.success("Annonce créée avec succès");
          navigate("/annonces", { replace: true });
        },
        () => {
          toast.error("Erreur lors de la création de l'annonce");
        }
      )}
    >
      <Box className="annonce-item">
        <FormControl className="annonce-item-element">
          <TextField
            error={!!errors.titre}
            helperText={errors.titre?.message}
            label="Titre de l'annonce"
            variant="standard"
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.3rem" } }}
            {...register("titre")}
          />
        </FormControl>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Description de l'annonce
        </Typography>
        <ReactQuill
          className="annonce-item-element"
          theme="snow"
          value={description}
          onChange={setDescription}
        />
        <div className="description_error">
          {" "}
          {errors.description && errors.description?.message}
        </div>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Photos
        </Typography>

        <Grid
          container
          className="annonce-item-element"
          direction={"column"}
          sx={{
            backgroundColor: "lightgrey",
            maxWidth: "100%",
            overflowX: "auto",
          }}
          height="300"
        >
          <Box
            padding={1}
            sx={{
              overflowX: "auto",
              maxWidth: "95%",
            }}
            display={"flex"}
            flexWrap={"wrap"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {imagePreviews.length ? (
              imagePreviews.map((file) => (
                <Grid
                  key={file.id}
                  item
                  sx={{
                    margin: "4px",
                    width: "240px",
                    height: "240px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  <Paper
                    variant="elevation"
                    sx={{
                      width: 240,
                      height: 240,
                      overflow: "hidden",
                      position: "relative",
                      "& .cancel-icon": {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 1,
                      },
                    }}
                  >
                    {selectedImage === file.id && (
                      <IconButton
                        className="cancel-icon"
                        onClick={() => {
                          handleCancelClick(file.id);
                        }}
                      >
                        <CancelIcon />
                      </IconButton>
                    )}
                    <img
                      src={file.image}
                      style={{
                        minWidth: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                      onClick={() => setSelectedImage(file.id)}
                    />
                  </Paper>
                </Grid>
              ))
            ) : (
              <Grid>
                <Paper
                  variant="elevation"
                  sx={{
                    width: 240,
                    height: 240,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <AddPhotoAlternateIcon
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Paper>
              </Grid>
            )}
          </Box>
          <Button
            sx={{ margin: "0 auto" }}
            variant="contained"
            startIcon={<AddAPhotoIcon />}
            component={"label"}
          >
            Télécharger une photo
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              hidden
              id="photos"
              onChange={handlePhotoUpload}
            />
          </Button>
        </Grid>
        <p style={{ textAlign: "center", color: "red" }}>
          {errors.photos?.message}
        </p>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Adresse
        </Typography>
        <Grid
          container
          direction={"column"}
          justifyContent="flex-start"
          maxWidth={"40%"}
        >
          <TextField
            variant="standard"
            label="Adresse"
            error={!!errors.adresse}
            helperText={errors.adresse?.message}
            {...register("adresse")}
          />
          <TextField
            variant="standard"
            label="Complément d'adresse"
            error={!!errors.complement_adresse}
            helperText={
              errors.complement_adresse
                ? errors.complement_adresse?.message
                : "Ce champ est optionnel"
            }
            {...register("complement_adresse")}
          />
          <Grid
            flexDirection={"row"}
            container
            justifyContent={"space-between"}
          >
            <TextField
              variant="standard"
              label="Code postal"
              error={!!errors.code_postal}
              helperText={errors.code_postal?.message}
              {...register("code_postal")}
            />
            <TextField
              variant="standard"
              label="Ville"
              error={!!errors.ville}
              helperText={errors.ville?.message}
              {...register("ville")}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Budget
        </Typography>
        <TextField
          error={!!errors.prix}
          helperText={
            errors.prix
              ? errors.prix.message
              : "Seulement les valeurs numériques sont acceptées"
          }
          variant="standard"
          label="Budget"
          {...register("prix")}
        />
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Contact
        </Typography>
        <TextField
          error={!!errors.telephone}
          helperText={
            errors.telephone
              ? errors.telephone.message
              : "Seulement les numéros mobiles sont acceptés"
          }
          variant="standard"
          label="Téléphone"
          {...register("telephone")}
        />
      </Box>
      <Button
        type="submit"
        style={{ margin: "0 auto", display: "flex" }}
        variant="contained"
        color="primary"
        className="annonce-item"
        startIcon={loading ? <CircularProgress /> : <AddIcon />}
      >
        Soumettre
      </Button>
    </Container>
  );
};

export default AddAnnonce;
