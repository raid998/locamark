import { Typography, Pagination } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import ListAnnoncesItem from "../../components/Annonces/ListeAnnoncesItem";
import { getAllAnnonces } from "../../features/annonceSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const ListeAnnonces = () => {
  const dispatch = useAppDispatch();
  const { annonces, count } = useAppSelector((state) => state.annonces);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    dispatch(getAllAnnonces(currentPage));
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
        {annonces && annonces.length
          ? annonces.map((annonce) => (
              <ListAnnoncesItem
                key={annonce._id}
                annonce={annonce}
                edit={false}
              />
            ))
          : "Aucune annonce pour l'instant"}
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

export default ListeAnnonces;
