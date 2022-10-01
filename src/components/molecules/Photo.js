import React from "react";

export const Photo = ({ photo }) => {
  return (
     <div> 
      <p>Photo #{photo.id} - {photo.title}</p>
      <img src={photo.url} alt="asdasd" style={{ width: "140px" }} />
    </div>
  );
};
