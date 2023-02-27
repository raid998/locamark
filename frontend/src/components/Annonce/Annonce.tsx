import { Container } from "@mui/system";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Button, FormControl, Grid, Input, Typography } from "@mui/material";
import "./annonces.css";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import { theme } from "../../utils/theme";
import Box from "@mui/material/Box";
const Annonce = () => {
  const [value, setValue] = useState("");
  return (
    <Container
      sx={{ margin: "1rem auto" }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit");
      }}
    >
      <Box className="annonce-item">
        <FormControl className="annonce-item-element">
          <Input
            style={{ fontSize: "1.5rem" }}
            placeholder="Titre de l'annonce"
          />
        </FormControl>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Description de l'annonce
        </Typography>
        <ReactQuill
          className="annonce-item-element"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Photos
        </Typography>

        <Grid
          container
          className="annonce-item-element"
          direction={"row"}
          spacing={3}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              square
              sx={{
                width: theme.spacing(30),
                height: theme.spacing(30),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              1
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              square
              sx={{
                width: theme.spacing(30),
                height: theme.spacing(30),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              2
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              square
              sx={{
                width: theme.spacing(30),
                height: theme.spacing(30),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              3
            </Paper>
          </Grid>
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
          <Input placeholder="Adresse" />
          <Input placeholder="Complément d'adresse" />
          <Grid
            flexDirection={"row"}
            container
            justifyContent={"space-between"}
          >
            <Input placeholder="Code postal" />
            <Input placeholder="Ville" />
          </Grid>
        </Grid>
      </Box>
      <Box className="annonce-item">
        <Typography className="annonce-item-element" variant="h5">
          Contact
        </Typography>
        <Input placeholder="Téléphone" />
      </Box>
      <Button
        type="submit"
        style={{ margin: "0 auto", display: "flex" }}
        variant="contained"
        color="primary"
        className="annonce-item"
        startIcon={<AddIcon />}
      >
        Soumettre
      </Button>
    </Container>
  );
};

export default Annonce;
