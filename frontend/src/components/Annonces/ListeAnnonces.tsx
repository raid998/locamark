import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import './listeAnnonces.css'


const Annonce = () => {

    return (
        <Box 
            component='form'
            sx={{ 
                marginTop: 8, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
            }}
            noValidate
            autoComplete='off'
        >
         
            <Container maxWidth="sm">
                <Typography component="h1" variant="h5" align="center" m={1}>
                    Liste des annonces
                </Typography>
            </Container>

            <Grid container 
                sx={{ 
                    margin: 2, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 300, 
                }}
            >
                <Grid item xs={4} 
                    sx={{ 
                        margin: 1, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                    }}
                >
                    <img src="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="logo" />
                </Grid>
                <Grid item xs={4} direction="column">
                    <Typography component="h1" variant="subtitle1" m={1}>
                        Titre de l'annonce 1
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Prix: 100€
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Nom Prénom - Numéro de téléphone
                    </Typography>
                </Grid>
            </Grid>

            <Grid container 
                sx={{ 
                    margin: 2, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 300, 
                }}
            >
                <Grid item xs={4} 
                    sx={{ 
                        margin: 1, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                    }}
                >
                    <img src="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="logo" />
                </Grid>
                <Grid item xs={4} direction="column">
                    <Typography component="h1" variant="subtitle1" m={1}>
                        Titre de l'annonce 2
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Prix: 100€
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Nom Prénom - Numéro de téléphone
                    </Typography>
                </Grid>
            </Grid>


            <Grid container 
                sx={{ 
                    margin: 2, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 300, 
                }}
            >
                <Grid item xs={4} 
                    sx={{ 
                        margin: 1, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                    }}
                >
                    <img src="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="logo" />
                </Grid>
                <Grid item xs={4} direction="column">
                    <Typography component="h1" variant="subtitle1" m={1}>
                        Titre de l'annonce 3
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Prix: 100€
                    </Typography>
                    <Typography component="h2" variant="subtitle2" align="justify" m={1}>
                        Nom Prénom - Numéro de téléphone
                    </Typography>
                </Grid>
            </Grid>

            <Stack spacing={2} sx={{ marginTop: 2, marginBottom: 5 }}>
                <Pagination count={3} shape="rounded"/>
            </Stack>
        </Box>

        
    );

}

export default Annonce;