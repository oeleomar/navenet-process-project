import { useState } from "react";

export const VideoComponent = ({ data }) => {
  const [nodowndload, setNoDownload] = useState("nodownload");

  return (
    <video autoPlay="false" controls height={300} controlsList={nodowndload}>
      <source src={`http://localhost:3000/videos/${data}`} type="video/mp4" />
    </video>
  );
};
