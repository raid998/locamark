import { Button, CardActions, IconButton, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { breakpoints } from "@mui/system";
import React from "react";
import { theme } from "../../utils/theme";
import "./listeAnnonces.css";

const Annonce = () => {
  return (
    <>
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
      >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h5" align="center" m={1}>
            Liste des annonces
          </Typography>
        </Container>

        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              maxHeight: "650px",
              maxWidth: "80vw",
              flexDirection: "column",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "60vw",
            },
            marginBottom: 1,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251 }}
            image="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ /*flex: '1 0 auto',*/ maxHeight: "60%" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWith: "50%",
                }}
              >
                Titre de l'annonce 1
              </Typography>
              <Typography
                variant="caption"
                component="div"
                maxHeight="15vh"
                maxWidth="30vw"
                overflow="hidden"
                whiteSpace="initial"
                textOverflow="ellipsis"
                sx={{ overflowWrap: "break-word" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "white",
                  flexBasis: "20%",
                  alignSelf: "flex-end",
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  minHeight: "10vh",
                  overflowWrap: "break-word",
                  lineHeight: "0",
                }}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                mt={1}
              >
                <p>Prix : 100$</p>
                <p>Nom Prénom - Num de téléphone </p>
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              maxHeight: "650px",
              maxWidth: "80vw",
              flexDirection: "column",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "60vw",
            },
            marginBottom: 1,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251 }}
            image="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ /*flex: '1 0 auto',*/ maxHeight: "60%" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWith: "50%",
                }}
              >
                Titre de l'annonce 1
              </Typography>
              <Typography
                variant="caption"
                component="div"
                maxHeight="15vh"
                maxWidth="30vw"
                overflow="hidden"
                whiteSpace="initial"
                textOverflow="ellipsis"
                sx={{ overflowWrap: "break-word" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "white",
                  flexBasis: "20%",
                  alignSelf: "flex-end",
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  minHeight: "10vh",
                  overflowWrap: "break-word",
                  lineHeight: "0",
                }}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                mt={1}
              >
                <p>Prix : 100$</p>
                <p>Nom Prénom - Num de téléphone </p>
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              maxHeight: "650px",
              maxWidth: "80vw",
              flexDirection: "column",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "60vw",
            },
            marginBottom: 1,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251 }}
            image="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ /*flex: '1 0 auto',*/ maxHeight: "60%" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWith: "50%",
                }}
              >
                Titre de l'annonce 1
              </Typography>
              <Typography
                variant="caption"
                component="div"
                maxHeight="15vh"
                maxWidth="30vw"
                overflow="hidden"
                whiteSpace="initial"
                textOverflow="ellipsis"
                sx={{ overflowWrap: "break-word" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "white",
                  flexBasis: "20%",
                  alignSelf: "flex-end",
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  minHeight: "10vh",
                  overflowWrap: "break-word",
                  lineHeight: "0",
                }}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                mt={1}
              >
                <p>Prix : 100$</p>
                <p>Nom Prénom - Num de téléphone </p>
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              maxHeight: "650px",
              maxWidth: "80vw",
              flexDirection: "column",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "60vw",
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251 }}
            image="https://images.unsplash.com/photo-1676869503942-79e94f62862d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ /*flex: '1 0 auto',*/ maxHeight: "60%" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWith: "50%",
                }}
              >
                Titre de l'annonce 1
              </Typography>
              <Typography
                variant="caption"
                component="div"
                maxHeight="15vh"
                maxWidth="30vw"
                overflow="hidden"
                whiteSpace="initial"
                textOverflow="ellipsis"
                sx={{ overflowWrap: "break-word" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "white",
                  flexBasis: "20%",
                  alignSelf: "flex-end",
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  minHeight: "10vh",
                  overflowWrap: "break-word",
                  lineHeight: "0",
                }}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                mt={1}
              >
                <p>Prix : 100$</p>
                <p>Nom Prénom - Num de téléphone </p>
              </Box>
            </CardContent>
          </Box>
        </Card>

        {/* 
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
            </Grid> */}

        <Stack spacing={2} sx={{ marginTop: 2, marginBottom: 5 }}>
          <Pagination count={3} shape="rounded" />
        </Stack>
      </Box>
    </>
  );
};

export default Annonce;
