import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store";
import { login } from "../../features/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";
import { LoginSchema, loginSchema } from "../../schemas/user.schema";

const Authentification = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitHandler: SubmitHandler<LoginSchema> = async (values) => {
    try {
      const user = await dispatch(login(values)).unwrap();

      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Connexion réussie!");
      navigate("/liste-annonces");
    } catch {
      toast.error("Les coordonnées que vous avez saisies sont erronées.");
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
          Connexion
        </Typography>

        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          variant="outlined"
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
          variant="outlined"
          type="password"
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
          {...register("password")}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
          startIcon={user.loading ? <CircularProgress /> : <></>}
        >
          Se connecter
        </Button>

        <Typography align="right">
          <Link href="/inscription" variant="body1">
            Vous n'avez pas de compte? Inscrivez-vous
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Authentification;
