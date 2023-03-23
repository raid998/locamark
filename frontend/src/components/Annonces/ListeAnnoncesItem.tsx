import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { IAnnonce } from "../../types";
import { theme } from "../../utils/theme";
import "./listeAnnonces.css";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { deleteAnnonceRequest } from "../../requests/deleteRequests";

const Annonce = ({ annonce, edit }: { annonce: IAnnonce; edit: boolean }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            maxHeight: "650px",
            maxWidth: "80vw",
            flexDirection: "column",
            alignItems: "center",
            justify: "center",
          },
          [theme.breakpoints.up("sm")]: {
            display: "flex",
            maxHeight: "250px",
            maxWidth: "60vw",
            position: "relative",
          },
          marginBottom: 1,
        }}
      >
        {edit ? (
          <Box sx={{ position: "absolute", top: 0, right: 2 }}>
            <Stack direction={"row"} spacing={0}>
              <IconButton
                onClick={() => {
                  navigate("/annonces/" + annonce._id + "/modifier");
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
              </IconButton>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Voulez-vous vraiment supprimer l'annonce?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Voulez-vous vraiment supprimer l'annonce?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Non</Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="error"
                    className="annonce-item"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      deleteAnnonceRequest(annonce._id as string)
                        .then(() => {
                          handleClose();
                          navigate(0);
                          toast.success("Annonce supprimée");
                        })
                        .catch(() => {
                          toast.error(
                            "Erreur lors de la suppression de l'annonce"
                          );
                        });
                    }}
                  >
                    Supprimer
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>
          </Box>
        ) : null}

        <Link
          style={{ textDecoration: "none" }}
          to={"/annonces/" + annonce._id}
        >
          {" "}
          <CardMedia
            component="img"
            sx={{ width: 251 }}
            image={annonce.photos ? annonce.photos[0] : ""}
            alt="Live from space album cover"
          />
        </Link>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ maxHeight: "60%" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/annonces/" + annonce._id}
            >
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
                {annonce.titre}{" "}
              </Typography>
            </Link>
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
              {annonce.description}
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
              <p>Prix : {annonce.prix}$</p>
              <p>
                {annonce.user.prenom} {annonce.user.nom} - {annonce.telephone}{" "}
              </p>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Annonce;
