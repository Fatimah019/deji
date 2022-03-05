import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "./postApi";

const initialState = {
  isLoading: false,
  posts: [],
};

export const fetchAllPosts = createAsyncThunk("posts/all", async () => {
  try {
    const response = await getPosts();
    return response.data;
  } catch (err) {
    return err;
  }
});

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload;
      })
      .addCase(fetchAllPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default PostsSlice.reducer;

// selectors
export const allPostsSelector = (state) => state.posts;
