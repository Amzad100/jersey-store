import { useEffect, useState } from "react";
import SingleGalleryImg from "./SingleGalleryImg";

export default function Galleary() {
  const [jerseys, setJerseys] = useState([]);
  useEffect(() => {
    fetch("https://jersey-store-server.vercel.app/jerseys")
      .then((res) => res.json())
      .then((result) => {
        setJerseys(result);
      });
  }, []);
  return (
    <div className="my-3">
      <h1 className="text-center font-bold text-3xl my-3 text-pink-800">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 justify-center">
        {
          // eslint-disable-next-line react/prop-types
          jerseys.map((jersey) => (
            <SingleGalleryImg key={jersey.id} jersey={jersey} />
          ))
        }
      </div>
    </div>
  );
}
