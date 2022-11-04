import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Page404 } from "../Page404";

export const ShowProcess = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = `${id.charAt(0).toUpperCase() + id.slice(1)} | Navenet`;
    const dataFetch = async () => {
      try {
        const dataRaw = await axios("http://localhost:3000/process/" + id);
        setData(dataRaw.data);
      } catch (e) {
        return <Page404 />;
      }
    };
    dataFetch();
  }, []);

  if (!data) {
    return <h1>Caregando...</h1>;
  }

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};
