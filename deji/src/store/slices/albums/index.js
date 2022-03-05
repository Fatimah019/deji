import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAlbums } from "./albumApi";

const initialState = {
  isLoading: false,
  albums: [],
};

export const fetchAllAlbums = createAsyncThunk("albums/all", async () => {
  try {
    const response = await getAlbums();
    return response.data;
  } catch (err) {
    return err;
  }
});

const AlbumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAlbums.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAlbums.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.albums = payload;
      })
      .addCase(fetchAllAlbums.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default AlbumsSlice.reducer;

// selectors
export const allAlbumsSelector = (state) => state.albums;
