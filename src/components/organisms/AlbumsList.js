import React, { useEffect, useState } from "react";
import { Album } from "../molecules/Album";

export const AlbumList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getUserById = (userId) => {
    const username = users.find((item) => item.id === userId);
    return username;
  };

  const getPhoto = (id) => {
    const filterPhoto = photos.filter((item) => item.albumId === id)
    return filterPhoto;
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
      {albums.slice(8, 13).map((item) => (
        <Album
          key={item.id}
          album={item}
          user={getUserById(item.userId)}
          photo={getPhoto(item.id)}
        />
      ))}
    </div>
  );
};
