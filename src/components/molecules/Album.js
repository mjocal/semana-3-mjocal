import React from "react";
import { Photo } from "./Photo";

export const Album = ({ album, user, photo }) => {
  return (
    <ul>
      <div>
        <h3>Album: {album.title}</h3>
        <h3>Album id: {album.id}</h3>
      </div>
      <div>
        <p>Owner: {user.name}</p>
        <Photo photo={photo} album={album} />
      </div>
    </ul>
  );
};

// export const Album = ({ album, user }) => {
//   return (
//     <ul>
//       <div>
//         <h3>Album: {album.title}</h3>
//       </div>
//       <div>
//         <p>Owner: {user.name}</p>
//       </div>
//     </ul>
//   );
// };
