import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Authentification = () => {

    return (
        <Box
            component="form"
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
        >
            <Container maxWidth="sm">
                <Typography component="h1" variant="h5" align="center" m={1}>
                    Authentification
                </Typography>
                <TextField required fullWidth margin="normal" id="email" label="Email" variant="outlined" />
                <TextField required fullWidth margin="normal" id="motDePasse" label="Mot de passe" variant="outlined" />
                <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 3 }}>Se connecter</Button>
                
                <Typography align="right">
                    <Link href="/inscription" variant="body1">
                        Vous n'avez pas de compte? Inscrivez-vous
                    </Link>
                </Typography>
            </Container>
        </Box>
    );

}

export default Authentification