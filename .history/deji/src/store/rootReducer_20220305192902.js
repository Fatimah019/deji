import { combineReducers } from "redux";
import UsersSlice from "./slices/user";
import PostsSlice from "./slices/posts";
import AlbumsSlice from "./slices/albums";
import CommentsSlice from "./slices/comments";

/**
 * @descriptionThis function helps you organize your reducers to manage their own slices of state, 
 * similar to how you would have different Flux Stores to manage different state.
 *  With Redux, there is just one store, but combineReducers helps you keep the same logical division between reducers.
 */
const rootReducer = combineReducers({
  allUsers: UsersSlice,
  posts: PostsSlice,
  albums: AlbumsSlice,
  comments: CommentsSlice,
});

export default rootReducer;
