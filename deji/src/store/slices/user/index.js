import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "./userApi";

const initialState = {
  isLoading: false,
  users: [],
};

export const fetchAllUsers = createAsyncThunk("users/all", async () => {
  try {
    const response = await getAllUsers();
    return response.data;
  } catch (err) {
    return err;
  }
});

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default UserSlice.reducer;

// selectors
export const allUsersSelector = (state) => state.allUsers;
