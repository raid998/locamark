import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IAnnonce } from "../../types";
import { theme } from "../../utils/theme";
import "./listeAnnonces.css";

const Annonce = ({ annonce }: { annonce: IAnnonce }) => {
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
          },
          marginBottom: 1,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 251 }}
          image={annonce.photos ? annonce.photos[0] : ""}
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
              {annonce.titre}{" "}
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
