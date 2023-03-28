import { Box, Button, Container, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  updateProfilSchema,
  UpdateProfilSchema,
} from "../../schemas/user.schema";
import { updateProfil } from "../../features/userSlice";

const EditProfil = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.user);
  const id = user?.id;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Partial<UpdateProfilSchema>>({
    resolver: zodResolver(updateProfilSchema),
    defaultValues: {
      nom: user?.nom,
      prenom: user?.prenom,
      email: user?.email,
    },
  });

  return (
    <>
      <Container
        sx={{ margin: "1rem auto" }}
        component="form"
        onSubmit={handleSubmit(async (data) => {
          try {
            console.log(data);
            await dispatch(
              updateProfil({ data, id } as {
                data: Partial<UpdateProfilSchema>;
                id: string;
              })
            );
            toast.success("Profil modifié avec succès");
            navigate(0);
          } catch {
            toast.error("Erreur lors de la modification du profil");
          }
        })}
      >
        <Box className="user-item">
          <TextField
            defaultValue={user?.nom}
            error={!!errors.nom}
            helperText={errors.nom?.message}
            variant="standard"
            label="Nom"
            {...register("nom")}
          />
        </Box>
        <Box className="user-item">
          <TextField
            defaultValue={user?.prenom}
            error={!!errors.prenom}
            helperText={errors.prenom?.message}
            variant="standard"
            label="Prénom"
            {...register("prenom")}
          />
        </Box>
        <Box className="user-item">
          <TextField
            defaultValue={user?.email}
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
