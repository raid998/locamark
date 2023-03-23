import { Typography, Pagination } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import ListAnnoncesItem from "../../components/Annonces/ListeAnnoncesItem";
import { getMesAnnonces } from "../../features/annonceSlice";
import { store, useAppDispatch, useAppSelector } from "../../store";

const MesAnnonces = () => {
  const dispatch = useAppDispatch();
  const { annonces, count } = useAppSelector((state) => state.annonces || []);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    dispatch(
      getMesAnnonces({ id: store.getState().user.user?.id || "", currentPage })
    );
  }, [currentPage, dispatch]);
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
        {annonces.length
          ? annonces.map((annonce) => (
              <ListAnnoncesItem
                key={annonce._id}
                annonce={annonce}
                edit={true}
              />
            ))
          : "Vous n'avez pas d'annonces pour le moment"}
        <Stack spacing={2} sx={{ marginTop: 2, marginBottom: 5 }}>
          <Pagination
            count={count}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Stack>
      </Box>
    </>
  );
};

export default MesAnnonces;
