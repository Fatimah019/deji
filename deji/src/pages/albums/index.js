import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allAlbumsSelector, fetchAllAlbums } from "../../store/slices/albums";
import "./style.css";

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
    <ul>
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
  );
};

export default Albums;
