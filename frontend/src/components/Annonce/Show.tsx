import { Container } from "@mui/system";
import "react-quill/dist/quill.snow.css";
import { FormControl, Grid, Typography } from "@mui/material";
import "./annonces.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAnnonce } from "../../types";
import { getAnnonceContentRequest } from "../../requests/getRequests";

const ShowAnnonce = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState<Partial<IAnnonce>>({});

  useEffect(() => {
    getAnnonceContentRequest(id as string)
      .then((response) => {
        setAnnonce(response.data);
      })
      .catch(() => {
        toast.error(
          "erreur lors de la récupération des informations de l'annonce"
        );
      });
  }, [id]);

  return (
    <Container sx={{ margin: "1rem auto" }}>
      <Box className="annonce-item">
        <FormControl className="annonce-item-element">
          <Typography variant="h2">{annonce.titre}</Typography>
        </FormControl>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Description de l'annonce
        </Typography>
        {annonce.description}
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Photos
        </Typography>

        <Grid
          container
          className="annonce-item-element"
          direction={"column"}
          sx={{ backgroundColor: "lightgrey" }}
          height="300"
        >
          <Box
            padding={1}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {annonce.photos?.map(photo => <Grid
              item
              sx={{
                width: "240px",
                height: "240px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  width: "240px",
                  height: "240px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="elevation"
              >
                <a href={'http://localhost:8080/'+photo.slice(8)}>1</a>
              </Paper>
            </Grid>)}
            
          </Box>
        </Grid>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Adresse
        </Typography>
        <Grid
          container
          direction={"column"}
          justifyContent="flex-start"
          maxWidth={"40%"}
        >
          {annonce.adresse} <br />
          {annonce.complement}
          <Grid
            flexDirection={"row"}
            container
            justifyContent={"space-between"}
          >
            {annonce.codePostal} - {annonce.ville}
          </Grid>
        </Grid>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Budget
        </Typography>
        ${annonce.prix}
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Contact
        </Typography>
        {annonce.user?.prenom} {annonce.user?.nom} - {annonce.telephone}
      </Box>
    </Container>
  );
};

export default ShowAnnonce;
