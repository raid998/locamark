import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getMonProfilRequest } from "../requests/getRequests";
import { loginRequest } from "../requests/postRequests";
import { editProfilRequest } from "../requests/putRequests";
import { LoginSchema, UpdateProfilSchema } from "../schemas/user.schema";
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

export const updateProfil = createAsyncThunk(
  "user/updateProfil",
  async ({ data, id }: { data: Partial<UpdateProfilSchema>; id: string }) => {
    const response = await editProfilRequest(id, data);
    return response.data;
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
      })
      .addCase(getMonProfil.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getMonProfil.fulfilled,
        (state, action: PayloadAction<UserState["user"]>) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload;
        }
      )
      .addCase(getMonProfil.rejected, (state) => {
        state.loading = false;
        state.error =
          "Erreur de la récupération des informations vous concernant";
      })
      .addCase(updateProfil.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateProfil.fulfilled,
        (state, action: PayloadAction<UserState["user"]>) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload;
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      )
      .addCase(updateProfil.rejected, (state) => {
        state.loading = false;
        state.error =
          "Erreur de la modification des informations vous concernant";
      });
  },
});

export const getMonProfil = createAsyncThunk(
  "mon-profil/getMonProfil",
  async (id: string) => {
    const response = await getMonProfilRequest(id);
    return response.data;
  }
);

export default userSlice.reducer;
export const { logout } = userSlice.actions;
