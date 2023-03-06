import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import type { LoginInput } from "../components/Connexion/Connexion";

const initialState = { error: "", loading: false, user: {} };

export const login = createAsyncThunk(
  "user/login",
  async (data: LoginInput, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erreur de connexion";
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      });
  },
});

export default userSlice.reducer;
