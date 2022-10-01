import React from "react";
import { Photo } from "./Photo";

export const Album = ({ album, user, photo }) => {
  return (
    <ul>
      <div>
      <h2>Album #{album.id}: {album.title}</h2>
      <h3>Owner: {user.name} (id: {user.id}) </h3>
      </div>
      {photo.slice(0, 3).map(item => {return(<div>
        <Photo key={item.id} photo={item}/>
      </div>)})}     
    </ul>
  );
};
