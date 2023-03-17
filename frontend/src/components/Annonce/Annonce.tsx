import { Container } from "@mui/system";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { Button, FormControl, Grid, Typography } from "@mui/material";
import "./annonces.css";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import {
  CreateAnnonceInput,
  createAnnonceSchema,
} from "../../schemas/annonce.schema";

const Annonce = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<CreateAnnonceInput>({
    resolver: zodResolver(createAnnonceSchema),
  });

  useEffect(() => {
    register("description");
  }, [register]);
  const description = watch("description");
  const setDescription = (description: string) => {
    setValue("description", description);
  };
  return (
    <Container
      sx={{ margin: "1rem auto" }}
      component="form"
      onSubmit={handleSubmit(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
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
          sx={{ backgroundColor: "lightgrey" }}
          height="300"
        >
          <Box
            padding={1}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                width: "240px",
                height: "240px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  width: "240px",
                  height: "240px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="elevation"
              >
                1
              </Paper>
            </Grid>
            <Grid
              item
              sx={{
                width: "240px",
                height: "240px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  width: "240px",
                  height: "240px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="elevation"
              >
                2
              </Paper>
            </Grid>
            <Grid
              item
              sx={{
                width: "240px",
                height: "240px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                variant="elevation"
                sx={{
                  width: 240,
                  height: 240,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                3
              </Paper>
            </Grid>
          </Box>
          <Button
            sx={{ margin: "0 auto" }}
            variant="contained"
            startIcon={<AddAPhotoIcon />}
            component={"label"}
          >
            Télécharger une photo
            <input type="file" hidden />
          </Button>
        </Grid>
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
        startIcon={<AddIcon />}
      >
        Soumettre
      </Button>
    </Container>
  );
};

export default Annonce;
