import { combineReducers } from "redux";
import UsersSlice from "./slices/user";
import PostsSlice from "./slices/posts";
import AlbumsSlice from "./slices/albums";
import CommentsSlice from "./slices/comments";

const rootReducer = combineReducers({
  allUsers: UsersSlice,
  posts: PostsSlice,
  albums: AlbumsSlice,
  comments: CommentsSlice,
});

export default rootReducer;
