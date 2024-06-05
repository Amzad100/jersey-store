import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Jerseys from "../components/Home/Jerseys";
import Galleary from "../components/Home/Galleary";

export default function HomePage() {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Jerseys data={data} />
      <Galleary />
    </div>
  );
}
