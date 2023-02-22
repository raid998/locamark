import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Inscription = () => {

    return (
        <Box
            component="form"
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            noValidate
            autoComplete="off"
        >
            <Container maxWidth="sm">
                <Typography component="h1" variant="h5" align="center" m={1}>
                    Inscription
                </Typography>
                <TextField required fullWidth margin="normal" id="nom" label="Nom" />
                <TextField required fullWidth margin="normal" id="prenom" label="Prénom" />
                <TextField required fullWidth margin="normal" id="email" label="Email" />
                <TextField required fullWidth margin="normal" id="motDePasse" label="Mot de passe" />
                <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 3 }}>S'inscrire</Button>

                <Typography align="right">
                    <Link href="/authentification" variant="body1">
                        Vous avez déjà un compte? Connexion
                    </Link>
                </Typography>
            </Container>
        </Box>
    );

}

export default Inscription