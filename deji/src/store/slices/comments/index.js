import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostComments } from "./commentApi";

const initialState = {
  isLoading: false,
  comments: [],
};

export const fetchPostComments = createAsyncThunk(
  "post/comments",
  async (id) => {
    try {
      const response = await getPostComments(id);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const CommentsSlice = createSlice({
  name: "post-comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostComments.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.comments = payload;
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default CommentsSlice.reducer;

// selectors
export const postCommentsSelector = (state) => state.comments;
