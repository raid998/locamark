import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const registerSchema = z.object({
  nom: z.string().max(20).min(1, { message: "Veuillez entrer votre nom" }),
  prenom: z
    .string()
    .max(20)
    .min(1, { message: "Veuillez entrer votre prénom" }),
  email: z.string().email({ message: "Veuillez entrer votre email" }),
  motDePasse: z
    .string()
    .max(32)
    .min(8, { message: "Veuillez entrer un mot de passe" }),
});

type RegisterInput = TypeOf<typeof registerSchema>;

const Inscription = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
  };
  console.log(errors);

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
          id="motDePasse"
          label="Mot de passe"
          error={!!errors["motDePasse"]}
          helperText={errors["motDePasse"] ? errors["motDePasse"].message : ""}
          {...register("motDePasse")}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
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
