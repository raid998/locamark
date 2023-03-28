import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "../../types";
import { useAppSelector } from "../../store";
import { registerSchema, RegisterSchema } from "../../schemas/user.schema";
import { editProfilRequest } from "../../requests/putRequests";
import { getProfilContentRequest } from "../../requests/getRequests";

const EditProfil = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Partial<IUser>>({});
  const { loading } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
    },
  });

  useEffect(() => {
    getProfilContentRequest(id as string)
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        toast.error(
          "Erreur lors de la récupération des informations du profil de l'utilisateur"
        );
      });
  }, []);

  return (
    <>
      <Container
        sx={{ margin: "1rem auto" }}
        component="form"
        onSubmit={handleSubmit((data) => {
          editProfilRequest(id as string, {
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
          })
            .then(() => {
              toast.success("Profil modifié avec succès");
              navigate("/mon-profil/" + id, { replace: true });
            })
            .catch(() => {
              toast.error("Erreur lors de la modification du profil");
            });
        })}
      >
        <Box className="user-item">
          <TextField
            defaultValue={user.nom}
            error={!!errors.nom}
            helperText={errors.nom?.message}
            variant="standard"
            label="Nom"
            {...register("nom")}
          />
        </Box>
        <Box className="user-item">
          <TextField
            defaultValue={user.prenom}
            error={!!errors.prenom}
            helperText={errors.prenom?.message}
            variant="standard"
            label="Prénom"
            {...register("prenom")}
          />
        </Box>
        <Box className="user-item">
          <TextField
            defaultValue={user.email}
            error={!!errors.email}
            helperText={errors.email?.message}
            variant="standard"
            label="Email"
            {...register("email")}
          />
        </Box>
        <Box className="user-item">
          <TextField
            error={!!errors.password}
            helperText={errors.password?.message}
            variant="standard"
            label="Ancien mot de passe"
          />
        </Box>
        <Box className="user-item">
          <TextField
            error={!!errors.password}
            helperText={errors.password?.message}
            variant="standard"
            label="Nouveau mot de passe"
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="user-item"
          sx={{
            marginTop: 3,
          }}
          startIcon={loading ? <CircularProgress /> : <EditIcon />}
        >
          Modifier
        </Button>
      </Container>
    </>
  );
};

export default EditProfil;
