/**
 * @description Import needed libraries to display data on user post page
 * @author By Deji Adebayo
 */
//Begin Import statement
import React, { useEffect, useState } from "react"; //import useEffect from react libraries to fetch data and render it to the page
import { useDispatch, useSelector } from "react-redux"; //import react-redux for managing the state
import { useParams } from "react-router-dom"; //import use navigate from react router-dom for navigation purpose
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import {
  fetchPostComments,
  postCommentsSelector,
} from "../../store/slices/comments";
import Pagination from "../../components/Pagination";
import { allPostsSelector, fetchAllPosts } from "../../store/slices/posts";
import "./style.css";

/**
 *
 * @returns
 */
const Posts = () => {
  const dispatch = useDispatch();
  const postData = useSelector(allPostsSelector);
  const postComments = useSelector(postCommentsSelector);
  const [showComment, setShowComment] = useState(false);
  const [postId, setPostId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const pageSize = 5;
  const { id } = useParams();

  useEffect(() => {
    const allPostsData = async () => {
      await dispatch(fetchAllPosts(id));
    };
    allPostsData();
  }, [dispatch, id]);

  useEffect(() => {
    setCurrentPageData(postData?.posts?.slice(0, pageSize));
  }, [postData?.posts]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    setCurrentPageData(postData?.posts?.slice(start, end));
  };

  const getPostComments = async (id) => {
    showComment ? setShowComment(false) : setShowComment(true);
    setPostId(id);
    await dispatch(fetchPostComments(id));
  };

  return (
    <div>
      <h2>Users Posts</h2>
      <ul className="post-list">
        {postData?.isLoading ? (
          <Loader visible={postData?.isLoading} />
        ) : (
          currentPageData?.map((post, index) => {
            return (
              <li key={post.id + index} className="post-card">
                <div>
                  <div className="post">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </div>
                  <Button secondary onClick={() => getPostComments(post.id)}>
                    View Comments
                  </Button>
                </div>

                {showComment && postId === post.id && (
                  <div>
                    {postComments?.isLoading
                      ? "Loading"
                      : postComments?.comments?.map((comment, index) => {
                          return (
                            <div key={index}>
                              <h4>{comment.name}</h4>
                              <p>{comment.email}</p>
                              <p>{comment.body}</p>
                            </div>
                          );
                        })}
                  </div>
                )}
              </li>
            );
          })
        )}
      </ul>
      <div>
        {!postData?.posts?.length ||
        !currentPage ||
        postData?.posts?.length < 1 ? null : (
          <Pagination
            totalCount={postData?.posts?.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Posts;
