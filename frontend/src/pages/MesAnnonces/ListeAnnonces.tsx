import { Typography, Pagination } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useEffect } from "react";
import ListAnnoncesItem from "../../components/Annonces/ListeAnnoncesItem";
import { getAllAnnonces } from "../../features/annonceSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const MesAnnonces = () => {
  const dispatch = useAppDispatch();
  const annonces = useAppSelector((state) => state.user?.user?.annonces || []);

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
          <Typography component="h1" variant="h5" align="center" m={4}>
            Liste des annonces
          </Typography>
        </Container>
        {annonces.map((annonce, index) => (
          <ListAnnoncesItem key={annonce._id} annonce={annonce} />
        ))}
        <Stack spacing={2} sx={{ marginTop: 2, marginBottom: 5 }}>
          <Pagination count={3} shape="rounded" />
        </Stack>
      </Box>
    </>
  );
};

export default MesAnnonces;
