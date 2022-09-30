import React from "react";

// export const Photo = ({ photo }) => {
//   return (
//     <div>
//       <p>Title: {photo.title}</p>
//       <p>Album Id: {photo.albumId}</p>
//       <p>Photo Id: {photo.id}</p>
//       <img src={photo.url} alt="asdasd" style={{ width: "140px" }} />
//     </div>
//   );
// };

export const Photo = ({ album, photo }) => {
  return (
    <div>
      <p>Title: {photo.title}</p>
      <p>Album Id: {photo.albumId}</p>
      <p>Photo Id: {photo.id}</p>
      <img src={photo.url} alt="asdasd" style={{ width: "140px" }} />
    </div>
  );
};
