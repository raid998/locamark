import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginRequest } from "../requests/postRequests";
import { LoginSchema } from "../schemas/user.schema";
import { UserState } from "../types";

const initialState: UserState = {
  error: "",
  loading: false,
  user:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage?.getItem("user") as string) || null
      : null,
};

export const login = createAsyncThunk(
  "user/login",
  async (data: LoginSchema) => {
    const response = await loginRequest(data);
    return response.data.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.error = "";
      state.loading = false;
      toast.success("Déconnecté");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<UserState["user"]>) => {
          state.loading = false;
          state.error = "";
          state.user = action.payload;
        }
      )
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
export const { logout } = userSlice.actions;
