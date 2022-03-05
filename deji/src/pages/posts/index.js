import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPostComments,
  postCommentsSelector,
} from "../../store/slices/comments";
import { allPostsSelector, fetchAllPosts } from "../../store/slices/posts";
import "./style.css";

const Posts = () => {
  const dispatch = useDispatch();
  const postData = useSelector(allPostsSelector);
  const postComments = useSelector(postCommentsSelector);

  const { id } = useParams();

  useEffect(() => {
    const allPostsData = async () => {
      await dispatch(fetchAllPosts());
    };
    allPostsData();
  }, [dispatch]);

  const getPostComments = async (id) => {
    await dispatch(fetchPostComments(id));
  };

  return (
    <ul>
      {postData?.isLoading
        ? "Loading"
        : postData?.posts
            ?.filter((data) => data.userId === Number(id))
            .map((post, index) => {
              return (
                <li key={post.id + index} className="post-card">
                  <>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={() => getPostComments(post.id)}>
                      View Comments
                    </button>
                  </>

                  {postComments?.comments?.map((comment, index) => {
                    return (
                      <div key={index}>
                        <h4>{comment.name}</h4>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                      </div>
                    );
                  })}
                </li>
              );
            })}
    </ul>
  );
};

export default Posts;
