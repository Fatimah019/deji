/**
 * @description Import needed libraries to display data on user page
 * @author By Deji Adebayo
 */
//Begin Import statement
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allAlbumsSelector, fetchAllAlbums } from "../../store/slices/albums";
import "./style.css"; //End Import statement

/**
 *
 * @returns bind user album 
 * @description this page bind user album data and   Users Album functional component to display the users album
 */
const Albums = () => {
  const dispatch = useDispatch();
  const albumsData = useSelector(allAlbumsSelector);

  const { id } = useParams();

  useEffect(() => {
    const allAlbumsData = async () => {
      await dispatch(fetchAllAlbums());
    };
    allAlbumsData();
  }, [dispatch]);
  return (
    <div>
      <h2>Albums</h2>
      <ul className="albums-list">
        {albumsData?.isLoading
          ? "Loading"
          : albumsData?.albums
              ?.filter((data) => data.userId === Number(id))
              .map((album, index) => {
                return (
                  <li key={album.id + index} className="albums-card">
                    {album.title}
                  </li>
                );
              })}
      </ul>
    </div>
  );
};

export default Albums;
