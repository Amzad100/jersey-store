import { useLoaderData } from "react-router-dom";

export default function JerseyDetails() {
  const jersey = useLoaderData();
  console.log(jersey);
  const { country, brand, price, Stock_quantity, img_url } = jersey;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img_url}
          alt="Shoes"
          className="rounded-xl w-[300] h-[300px]"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{country}</h2>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>Stock Quantity: {Stock_quantity}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Bye Now</button>
        </div>
      </div>
    </div>
  );
}
