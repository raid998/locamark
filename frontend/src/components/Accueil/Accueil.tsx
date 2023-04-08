import { Box, Card, CardMedia, Typography } from "@mui/material";
import { theme } from "../../utils/theme";

const Accueil = () => {
  return (
    <Box
      sx={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justify: "center",
      }}
    >
      <Typography variant="h3">Bienvenue</Typography>
      <Typography variant="h3">Besoin d'un service ?</Typography>
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justify: "center",
          },
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            display: "flex",
            maxHeight: "250px",
            maxWidth: "200vw",
          },
        }}
      >
        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "relative",
              maxHeight: "650px",
              maxWidth: "40vw",
              flexDirection: "column",
              alignItems: "center",
              justify: "center",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "25vw",
              position: "relative",
            },
            maxWidth: 200,
            marginTop: 5,
            marginLeft: 2,
            marginRight: 2,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="electricien"
          />
        </Card>

        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              maxHeight: "650px",
              maxWidth: "40vw",
              flexDirection: "column",
              alignItems: "center",
              justify: "center",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "25vw",
              position: "relative",
            },
            maxWidth: 250,
            marginTop: 5,
            marginLeft: 2,
            marginRight: 2,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1614359835514-92f8ba196357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="plombier"
          />
        </Card>

        <Card
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              maxHeight: "650px",
              maxWidth: "40vw",
              flexDirection: "column",
              alignItems: "center",
              justify: "center",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              maxHeight: "250px",
              maxWidth: "25vw",
              position: "relative",
            },
            maxWidth: 200,
            marginTop: 5,
            marginLeft: 2,
            marginRight: 2,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="plombier"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default Accueil;
