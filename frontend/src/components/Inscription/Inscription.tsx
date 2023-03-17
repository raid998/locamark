import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";
import { registerRequest } from "../../requests/postRequests";
import { registerSchema, RegisterSchema } from "../../schemas/user.schema";

const Inscription = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitHandler: SubmitHandler<RegisterSchema> = async (values) => {
    setLoading(true);
    try {
      const response = await registerRequest(values);
      setLoading(false);
      toast.success(response.data.message);
      navigate("/connexion");
    } catch (error: any) {
      setLoading(false);
      toast.error(
        error.response?.data.message || "Problème lors de l'inscription"
      );
    }
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h5" align="center" m={4}>
          Inscription
        </Typography>

        <TextField
          required
          fullWidth
          margin="normal"
          id="nom"
          label="Nom"
          error={!!errors["nom"]}
          helperText={errors["nom"] ? errors["nom"].message : ""}
          {...register("nom")}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="prenom"
          label="Prénom"
          error={!!errors["prenom"]}
          helperText={errors["prenom"] ? errors["prenom"].message : ""}
          {...register("prenom")}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          error={!!errors["email"]}
          helperText={errors["email"] ? errors["email"].message : ""}
          {...register("email")}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="password"
          label="Mot de passe"
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
          type="password"
          {...register("password")}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
          startIcon={loading ? <CircularProgress /> : <></>}
        >
          S'inscrire
        </Button>

        <Typography align="right">
          <Link href="/connexion" variant="body1">
            Vous avez déjà un compte? Connexion
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Inscription;
