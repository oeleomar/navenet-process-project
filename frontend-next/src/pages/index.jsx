import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataRaw = await fetch("http://localhost:3000/process/suport");
      const json = await dataRaw.json();

      setData(json);
      console.debug("data", json);
    };

    fetchData();
  }, []);

  if (!data) {
    return <h1>Carregando...</h1>;
  }

  if (data.message) {
    return (
      <h1>
        {data.message} <Link href="/">Retornar para home</Link>;
      </h1>
    );
  }

  return <Link href="/">Retornar para home</Link>;
}
