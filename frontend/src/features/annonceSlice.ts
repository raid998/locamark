import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllAnnoncesRequest } from "../requests/getRequests";
import { AnnonceState } from "../types";
import { createAnnonceRequest } from "../requests/postRequests";
import { create } from "domain";
import { CreateAnnonceInput } from "../schemas/annonce.schema";

const initialState: AnnonceState = {
  error: "",
  loading: false,
  annonces: [],
};

export const getAllAnnonces = createAsyncThunk(
  "annonce/getAllAnnonces",
  async () => {
    const response = await getAllAnnoncesRequest();
    return response.data;
  }
);

export const createAnnonce = createAsyncThunk(
  "annonce/createAnnonce",
  async (data: CreateAnnonceInput) => {
    const response = await createAnnonceRequest(data);
    return response.data;
  }
);

export const annonceSlice = createSlice({
  name: "annonce",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllAnnonces.fulfilled,
        (state, action: PayloadAction<AnnonceState["annonces"]>) => {
          state.loading = false;
          state.error = "";
          state.annonces = action.payload;
        }
      )
      .addCase(getAllAnnonces.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Erreur de chargement des annonces";
      })
      .addCase(getAllAnnonces.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAnnonce.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(createAnnonce.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Erreur lors de la création de l'annonce";
      })
      .addCase(createAnnonce.pending, (state) => {
        state.loading = true;
      });
  },
});

export default annonceSlice.reducer;
