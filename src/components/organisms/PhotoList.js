import React, { useEffect, useState } from "react";
import { Album } from "../molecules/Album";

export const AlbumList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getUserById = (userId) => {
    const username = users.find((item) => item.id === userId);
    console.log("username", username);
    return username;
  };

  const getAlbumById = (albumId) => {
    let album = albums.find((item) => item.id === albumId);
    console.log("album", album);
    return album;
  };

  const getPhotoById = (photoId) => {
    const photo = photos.find((item) => item.id === photoId);
    console.log("photo", photo);
    return photo;
  };

  async function getAllData() {
    const [respUsers, respAlbums, respPhotos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/albums"),
      fetch("https://jsonplaceholder.typicode.com/photos"),
    ]);

    const [usersData, albumsData, photosData] = await Promise.all([
      respUsers.json(),
      respAlbums.json(),
      respPhotos.json(),
    ]);

    setUsers(usersData);
    setAlbums(albumsData);
    setPhotos(photosData);
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {albums.slice(0, 5).map((item) => (
        <Album
          key={item.id}
          album={item}
          user={getUserById(item.userId)}
          photo={getPhotoById(item.id)}
        />
      ))}
    </div>
  );
};
